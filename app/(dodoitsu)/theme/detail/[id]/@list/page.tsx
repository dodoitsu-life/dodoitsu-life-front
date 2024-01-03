import { redirect } from "next/navigation";
import { Card } from "@components/Card";
import { getThemePostedDodoitsuList } from "@/src/server/dodoitsu/getDodoitsuList";

import { DodoitsuList } from "@/app/(dodoitsu)/dodoitsu/_components/DodoitsuList";
import { PaginationLink } from "@/app/_components/PaginationLink";

// 一ページ当たりに表示する都々逸の件数
const ITEMS_PER_PAGE = 10;

export default async function ThemeDodoitsuList({
  searchParams,
  params,
}: {
  searchParams: { page: number };
  params: { id: string };
}) {
  const page = Number(searchParams.page);
  const { dodoitsuList, count } = await getThemePostedDodoitsuList(params.id, {
    page,
  });

  const maxPage = Math.ceil(count / ITEMS_PER_PAGE);
  const pageLinkGen = (page: number) =>
    `/profile/${params.id}/posts?page=${page}`;

  if (page < 1 || page > maxPage || isNaN(page)) {
    if (page < 1) redirect(`/theme/detail/${params.id}?page=1`);
    if (page > maxPage) redirect(`/theme/detail/${params.id}?page=${maxPage}`);
    if (isNaN(page)) redirect(`/theme/detail/${params.id}?page=1`);
  }

  return (
    <Card>
      <div className="h-full flex flex-col justify-between md:p-12 p-6">
        <section id="dodoitsu-list">
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
    </Card>
  );
}
