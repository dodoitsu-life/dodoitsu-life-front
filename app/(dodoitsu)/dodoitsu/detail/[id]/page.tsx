import { getDodoitsuById } from "@/src/server/dodoitsu/getDodoitsuById";
import { DodoitsuCard } from "../../../_components/DodoitsuCard";
import seoGen from "@/src/utils/seoGen";

type Params = {
  id: string;
};

export async function generateMetadata({ params }: { params: Params }) {
  const { dodoitsu } = await getDodoitsuById({ id: params.id });

  // TODO: pathの動的な取得が現状できないので、一旦固定値を入れておく
  const url = "https://dodoitsu-life.vercel.app";

  return seoGen({
    title: `${dodoitsu.content} | 都々逸ライフ`,
    description: dodoitsu.description,
    url: `${url}/dodoitsu/detail/${dodoitsu.id}`,
    imageUrl: `${url}/api/ogp?title=${dodoitsu.content}`,
  });
}

export default async function DodoitsuDetail({ params }: { params: Params }) {
  const { dodoitsu } = await getDodoitsuById({ id: params.id });

  return <DodoitsuCard dodoitsu={dodoitsu} />;
}
