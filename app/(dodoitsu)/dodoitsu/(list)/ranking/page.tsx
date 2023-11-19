"use client";

import { redirect } from "next/navigation";
import { useQuery } from "react-query";
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

const getDodoitsuList = async (): Promise<DodoitsuListResponse> => {
  const res = await fetch(
    `/api/dodoitsu/popular?page=1&limit=${ITEMS_PER_PAGE}`
  );

  return await res.json();
};

export default function DodoitsuLatest({
  searchParams,
}: {
  searchParams: { page: number };
}) {
  const page = Number(searchParams.page);
  const { data, isLoading, isError } = useQuery(
    "popularDodoitsuList",
    getDodoitsuList,
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
          人気の都々逸
        </h1>

        <ListView />
      </section>
      <Paginate />
    </div>
  );
}
