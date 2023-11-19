"use client";

import { redirect } from "next/navigation";
import { useQuery } from "react-query";
import { useSearchParams } from "next/navigation";
import { Dodoitsu } from "@/src/types/Dodoitsu";

import { DodoitsuList } from "../../_components/DodoitsuList";
import { PaginationLink } from "../_components/PaginationLink";

// 一ページ当たりに表示する都々逸の件数
const ITEMS_PER_PAGE = 10;

type DodoitsuListResponse = {
  dodoitsuList: Dodoitsu[];
  count: number;
  allCount: number;
};

export default function DodoitsuLatest() {
  const searchParams = useSearchParams();
  const pageStr = decodeURIComponent(searchParams.get("page") || "1");
  const page = Number(pageStr);

  const { data, isLoading, isError } = useQuery(
    ["latestDodoitsuList", page],
    async (): Promise<DodoitsuListResponse> => {
      const res = await fetch(
        `/api/dodoitsu/latest?page=${page}&limit=${ITEMS_PER_PAGE}`
      );

      return await res.json();
    },
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  const ListView = () => {
    if (isLoading || !data) return <DodoitsuList isLoading />;
    if (isError) return <div>都々逸の取得に失敗しました</div>;
    return <DodoitsuList dodoitsuList={data.dodoitsuList} />;
  };

  const Paginate = () => {
    if (data && data.allCount > ITEMS_PER_PAGE) {
      const maxPage = Math.ceil(data.allCount / ITEMS_PER_PAGE);
      const pageLinkGen = (page: number) => `/dodoitsu/latest?page=${page}`;

      if (page < 1 || page > maxPage || isNaN(page)) {
        if (page < 1) redirect("/dodoitsu/latest?page=1");
        if (page > maxPage) redirect(`/dodoitsu/latest?page=${maxPage}`);
        if (isNaN(page)) redirect("/dodoitsu/latest?page=1");
      }
      return (
        <PaginationLink
          page={page}
          maxPage={maxPage}
          pageLinkGen={pageLinkGen}
        />
      );
    }
    return <></>;
  };

  return (
    <div className="h-full flex flex-col justify-between">
      <section id="dodoitsu-list">
        <h1 className="mb-8 text-center lg:text-3xl text-lg font-bold text-gray-900 dark:text-white">
          最新の都々逸
        </h1>

        <ListView />
      </section>
      <Paginate />
    </div>
  );
}
