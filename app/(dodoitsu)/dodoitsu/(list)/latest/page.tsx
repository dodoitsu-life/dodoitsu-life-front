import { cache } from "react";
import { redirect } from "next/navigation";
import { getLatestDodoitsuList } from "@/src/server/dodoitsu/getDodoitsuList";

import { Dodoitsu } from "@/src/types/Dodoitsu";
import { DodoitsuList } from "../../_components/DodoitsuList";
import { PaginationLink } from "../_components/PaginationLink";

// 一ページ当たりに表示する都々逸の件数
const ITEMS_PER_PAGE = 10;

// const getDodoitsuList = cache(
//   async (page: string): Promise<DodoitsuListResponse> => {
//     const params = { mode: "latest", page, limit: `${ITEMS_PER_PAGE}` };
//     const query = new URLSearchParams(params);
//     const res = await fetch(`${projectUrl}/api/dodoitsu?${query}`, {
//       method: "GET",
//       cache: "force-cache",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     return res.json();
//   }
// );

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
    <div>
      <section id="dodoitsu-list">
        <h1 className="mb-8 text-center lg:text-3xl text-lg font-bold text-gray-900 dark:text-white">
          最新の都々逸
        </h1>

        <DodoitsuList dodoitsuList={dodoitsuList} />
      </section>
      <PaginationLink page={page} maxPage={maxPage} pageLinkGen={pageLinkGen} />
    </div>
  );
}
