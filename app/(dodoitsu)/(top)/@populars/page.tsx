"use client";

import { cache } from "react";
import { useQuery } from "react-query";

import { Dodoitsu } from "@/src/types/Dodoitsu";
import { LinkButton } from "@components/LinkButton/LinkButton";
import { DodoitsuList } from "./_components/DodoitsuList";

// 一ページ当たりに表示する都々逸の件数
const ITEMS_PER_PAGE = 3;

type DodoitsuListResponse = {
  dodoitsuList: Dodoitsu[];
  count: number;
};

const getDodoitsuList = cache(async (): Promise<DodoitsuListResponse> => {
  const res = await fetch(
    `/api/dodoitsu/popular?page=1&limit=${ITEMS_PER_PAGE}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return await res.json();
});

export default function TopPopulars() {
  const { data, isLoading, isError } = useQuery(
    "dodoitsuList",
    getDodoitsuList,
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  if (isLoading || !data) return <DodoitsuList loading />;
  if (isError) return <div>都々逸の取得に失敗しました</div>;

  return (
    <div>
      <DodoitsuList dodoitsuList={data.dodoitsuList?.slice(0, data.count)} />
      <LinkButton text="もっと見る" href="/dodoitsu/ranking?page=1" />
    </div>
  );
}
