import { getPopularDodoitsuList } from "@/src/server/dodoitsu/getDodoitsuList";
import { LinkButton } from "@components/LinkButton/LinkButton";
import { DodoitsuList } from "./_components/DodoitsuList";

// 一ページ当たりに表示する都々逸の件数
const ITEMS_PER_PAGE = 3;

export default async function TopPopulars() {
  const { dodoitsuList } = await getPopularDodoitsuList({
    page: 1,
    limit: ITEMS_PER_PAGE,
  });

  return (
    <div className="mb-5">
      <DodoitsuList dodoitsuList={dodoitsuList} />
      <LinkButton text="もっと見る" href="/dodoitsu/ranking?page=1" />
    </div>
  );
}
