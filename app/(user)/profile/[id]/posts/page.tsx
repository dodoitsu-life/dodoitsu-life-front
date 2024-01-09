import { redirect } from "next/navigation";
import { Card } from "@components/Card";
import { getUserPostedDodoitsuList } from "@/src/server/dodoitsu/getDodoitsuList";

import { DodoitsuList } from "@/app/(dodoitsu)/dodoitsu/_components/DodoitsuList";
import { PaginationLink } from "@/app/_components/PaginationLink";

// 一ページ当たりに表示する都々逸の件数
const ITEMS_PER_PAGE = 10;

export default async function UserProfilePostDodoitsuList({
  searchParams,
  params,
}: {
  searchParams: { page: number };
  params: { id: string };
}) {
  const page = Number(searchParams.page);
  const { dodoitsuList, count } = await getUserPostedDodoitsuList(params.id, {
    page,
  });

  const maxPage = Math.ceil(count / ITEMS_PER_PAGE);
  const pageLinkGen = (page: number) =>
    `/profile/${params.id}/posts?page=${page}`;

  if (page < 1 || page > maxPage || isNaN(page)) {
    if (page < 1) redirect(`/profile/${params.id}/posts?page=1`);
    if (page > maxPage) redirect(`/profile/${params.id}/posts?page=${maxPage}`);
    if (isNaN(page)) redirect(`/profile/${params.id}/posts?page=1`);
  }

  return (
    <Card>
      <div className="h-full flex flex-col justify-between md:p-12 p-6">
        <section id="dodoitsu-list">
          <h2 className="mb-8 text-center lg:text-3xl text-lg text-gray-900">
            投稿した都々逸
          </h2>

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
