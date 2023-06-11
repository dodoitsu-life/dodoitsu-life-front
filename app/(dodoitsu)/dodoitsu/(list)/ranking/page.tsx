"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";

import { Dodoitsu } from "@/types/Dodoitsu";
import { Pagination } from "@/app/_components/Pagination";
import { DodoitsuList } from "../../_components/DodoitsuList";

// 一ページ当たりに表示する都々逸の件数
const ITEMS_PER_PAGE = 10;

export default () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  const [dodoitsuList, setDodoitsuList] = useState<Dodoitsu[]>([]);
  const [currentPage, setCurrentPage] = useState(page ? Number(page) : 1);
  const [totalCount, setTotalCount] = useState(1);

  const {
    mutate: fetchDodoitsuList,
    isLoading,
    isError,
  } = useMutation(async ({ mode, page }: { mode: string; page: string }) => {
    const params = { mode, page, limit: `${ITEMS_PER_PAGE}` };
    const query = new URLSearchParams(params);

    const res = await fetch(`/api/dodoitsu?${query}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { results, count } = await res.json();
    setDodoitsuList(results);
    setTotalCount(count);
  });

  const onPageSelect = (targetPage: number) => {
    setCurrentPage(targetPage);
    router.push(`dodoitsu/ranking?page=${targetPage}`);
  };

  useEffect(() => {
    fetchDodoitsuList({ mode: "ranking", page: `${page}` });
  }, [page]);

  if (isLoading) {
    return <DodoitsuList isLoading={true} />;
  }

  if (isError) {
    alert("都々逸の取得に失敗しました。");
    router.back();
  }

  return (
    <div>
      <section id="dodoitsu-list">
        <h1 className="mb-8 text-center lg:text-3xl text-lg font-bold text-gray-900 dark:text-white">
          人気の都々逸
        </h1>

        <DodoitsuList dodoitsuList={dodoitsuList} />
      </section>

      <Pagination
        currentPage={currentPage}
        onPageSelect={onPageSelect}
        total={totalCount}
        itemsPerPage={ITEMS_PER_PAGE}
      />
    </div>
  );
};
