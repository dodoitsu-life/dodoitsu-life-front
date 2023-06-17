import { getLatestDodoitsuList } from "@/src/server/dodoitsu/getDodoitsuList";
import { LinkButton } from "@components/LinkButton/LinkButton";
import { DodoitsuList } from "./_components/DodoitsuList";

// 一ページ当たりに表示する都々逸の件数
const ITEMS_PER_PAGE = 5;

export default async function TopLatests() {
  const { dodoitsuList } = await getLatestDodoitsuList({
    page: 1,
    limit: ITEMS_PER_PAGE,
  });

  return (
    <div>
      <div className="mb-3">
        <DodoitsuList dodoitsuList={dodoitsuList} />
      </div>
      <LinkButton text="もっと見る" href="/dodoitsu/latest?page=1" />
    </div>
  );
}
