import { redirect } from "next/navigation";
import { getPopularDodoitsuList } from "@/src/server/dodoitsu/getDodoitsuList";

import { DodoitsuList } from "../../_components/DodoitsuList";
import { PaginationLink } from "../_components/PaginationLink";

// 一ページ当たりに表示する都々逸の件数
const ITEMS_PER_PAGE = 10;

export default async function DodoitsuRanking({
  searchParams,
}: {
  searchParams: { page: number };
}) {
  const page = Number(searchParams.page);
  const { dodoitsuList, count } = await getPopularDodoitsuList({
    page,
  });

  const maxPage = Math.ceil(count / ITEMS_PER_PAGE);
  const pageLinkGen = (page: number) => `/dodoitsu/ranking?page=${page}`;

  if (page < 1 || page > maxPage || isNaN(page)) {
    if (page < 1) redirect("/dodoitsu/ranking?page=1");
    if (page > maxPage) redirect(`/dodoitsu/ranking?page=${maxPage}`);
    if (isNaN(page)) redirect("/dodoitsu/ranking?page=1");
  }

  return (
    <div className="h-full flex flex-col justify-between">
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
