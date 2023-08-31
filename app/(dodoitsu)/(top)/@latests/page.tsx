"use client";

import { Dodoitsu } from "@/src/types/Dodoitsu";
import { useQuery } from "react-query";
import { LinkButton } from "@components/LinkButton/LinkButton";
import { DodoitsuList } from "./_components/DodoitsuList";

// 一ページ当たりに表示する都々逸の件数
const ITEMS_PER_PAGE = 5;

type DodoitsuListResponse = {
  dodoitsuList: Dodoitsu[];
  count: number;
};

const getDodoitsuList = async (): Promise<DodoitsuListResponse> => {
  const res = await fetch(
    `/api/dodoitsu/latest?page=1&limit=${ITEMS_PER_PAGE}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return await res.json();
};

export default function TopLatests() {
  const { data, isLoading, isError } = useQuery(
    "latestDodoitsuList",
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
      <div className="mb-3">
        <DodoitsuList dodoitsuList={data.dodoitsuList} />
      </div>
      <LinkButton text="もっと見る" href="/dodoitsu/latest?page=1" />
    </div>
  );
}
