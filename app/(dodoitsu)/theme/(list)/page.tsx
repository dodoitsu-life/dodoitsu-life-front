"use client";

import { redirect } from "next/navigation";
import { useQuery } from "react-query";
import { useSearchParams } from "next/navigation";
import { Theme } from "@/src/types/Theme";

import { ThemeList } from "../_components/ThemeList";
import { PaginationLink } from "@/app/_components/PaginationLink";

// 一ページ当たりに表示する都々逸の件数
const ITEMS_PER_PAGE = 10;

type ThemeListResponse = {
  themeList: Theme[];
  count: number;
  allCount: number;
};

export default function Theme() {
  const searchParams = useSearchParams();
  const pageStr = decodeURIComponent(searchParams.get("page") || "1");
  const page = Number(pageStr);

  const { data, isLoading, isError } = useQuery(
    ["themeList", page],
    async (): Promise<ThemeListResponse> => {
      const res = await fetch(
        `/api/theme?page=${page}&limit=${ITEMS_PER_PAGE}`
      );

      return await res.json();
    },
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  const ListView = () => {
    if (isLoading || !data) return <ThemeList isLoading />;
    if (isError) return <div>お題の取得に失敗しました</div>;
    return <ThemeList themeList={data.themeList} />;
  };

  const Paginate = () => {
    if (data && data.allCount > ITEMS_PER_PAGE) {
      const maxPage = Math.ceil(data.allCount / ITEMS_PER_PAGE);
      const pageLinkGen = (page: number) => `/theme?page=${page}`;

      if (page < 1 || page > maxPage || isNaN(page)) {
        if (page < 1) redirect("/theme?page=1");
        if (page > maxPage) redirect(`/theme?page=${maxPage}`);
        if (isNaN(page)) redirect("/theme?page=1");
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
        <h1 className="mb-8 text-center lg:text-3xl text-2xl　text-gray-900 dark:text-white">
          お題別
        </h1>
        <ListView />
      </section>
      <Paginate />
    </div>
  );
}
