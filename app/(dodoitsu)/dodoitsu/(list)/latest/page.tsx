import { redirect } from "next/navigation";
import { getLatestDodoitsuList } from "@/src/server/dodoitsu/getDodoitsuList";

import { DodoitsuList } from "../../_components/DodoitsuList";
import { PaginationLink } from "../_components/PaginationLink";

// 一ページ当たりに表示する都々逸の件数
const ITEMS_PER_PAGE = 10;

export default async function DodoitsuLatest({
  searchParams,
}: {
  searchParams: { page: number };
}) {
  const page = Number(searchParams.page);
  const { dodoitsuList, count } = await getLatestDodoitsuList({
    page,
  });

  const maxPage = Math.ceil(count / ITEMS_PER_PAGE);
  const pageLinkGen = (page: number) => `/dodoitsu/latest?page=${page}`;

  if (page < 1 || page > maxPage || isNaN(page)) {
    if (page < 1) redirect("/dodoitsu/latest?page=1");
    if (page > maxPage) redirect(`/dodoitsu/latest?page=${maxPage}`);
    if (isNaN(page)) redirect("/dodoitsu/latest?page=1");
  }

  return (
    <div className="h-full flex flex-col justify-between">
      <section id="dodoitsu-list">
        <h1 className="mb-8 text-center lg:text-3xl text-lg font-bold text-gray-900 dark:text-white">
          最新の都々逸
        </h1>

        <DodoitsuList dodoitsuList={dodoitsuList} />
      </section>
      {maxPage > 1 && (
        <PaginationLink
          page={page}
          maxPage={maxPage}
          pageLinkGen={pageLinkGen}
        />
      )}
    </div>
  );
}
