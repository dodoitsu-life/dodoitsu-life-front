import seoGen from "@/src/utils/seoGen";
import { getThemeById } from "@/src/server/theme/getThemeById";

type Params = {
  id: string;
};

export async function generateMetadata({ params }: { params: Params }) {
  return await getThemeById({ id: params.id }).then((res) => {
    const theme = res.theme;
    // TODO: pathの動的な取得が現状できないので、一旦固定値を入れておく
    const url = "https://dodoitsu-life.vercel.app";

    return seoGen({
      title: `お題「${theme.title}」｜都々逸ライフ`,
      url: `${url}/theme/detail/${theme.id}`,
      imageUrl: `${url}/api/ogp?content=お題「${theme.title}」`,
    });
  });
}

export default function Layout({
  info,
  list,
}: {
  info: React.ReactNode;
  list: React.ReactNode;
}) {
  return (
    <div className="container mx-auto justify-center h-full max-w-6xl px-2">
      <section id="theme-detail" className="mb-2">
        {info}
      </section>

      <section id="dodoitsu">
        <div className="mt-7">
          <div className="mb-5">{list}</div>
        </div>
      </section>
    </div>
  );
}
