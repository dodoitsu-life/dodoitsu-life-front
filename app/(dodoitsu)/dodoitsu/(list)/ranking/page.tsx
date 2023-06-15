import { cache } from "react";
import { redirect } from "next/navigation";

import { Dodoitsu } from "@/types/Dodoitsu";
import { DodoitsuList } from "../../_components/DodoitsuList";
import { PaginationLink } from "../_components/PaginationLink";

// 一ページ当たりに表示する都々逸の件数
const ITEMS_PER_PAGE = 10;

type DodoitsuListResponse = {
  results: Dodoitsu[];
  count: number;
};

const getDodoitsuList = cache(
  async (page: string): Promise<DodoitsuListResponse> => {
    const params = { mode: "ranking", page, limit: `${ITEMS_PER_PAGE}` };
    const query = new URLSearchParams(params);
    const res = await fetch(`http://localhost:3000/api/dodoitsu?${query}`, {
      method: "GET",
      cache: "force-cache",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.json();
  }
);

export default async function DodoitsuRanking({
  searchParams,
}: {
  searchParams: { page: number };
}) {
  const page = Number(searchParams.page);
  const { results: dodoitsuList, count } = await getDodoitsuList(`${page}`);

  const maxPage = Math.ceil(count / ITEMS_PER_PAGE);
  const pageLinkGen = (page: number) => `/dodoitsu/ranking?page=${page}`;

  if (page < 1 || page > maxPage || isNaN(page)) {
    if (page < 1) redirect("/dodoitsu/ranking?page=1");
    if (page > maxPage) redirect(`/dodoitsu/ranking?page=${maxPage}`);
    if (isNaN(page)) redirect("/dodoitsu/ranking?page=1");
  }

  return (
    <div>
      <section id="dodoitsu-list">
        <h1 className="mb-8 text-center lg:text-3xl text-lg font-bold text-gray-900 dark:text-white">
          人気の都々逸
        </h1>

        <DodoitsuList dodoitsuList={dodoitsuList} />
      </section>
      <PaginationLink page={page} maxPage={maxPage} pageLinkGen={pageLinkGen} />
    </div>
  );
}
