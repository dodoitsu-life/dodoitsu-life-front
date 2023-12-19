import seoGen from "@/src/utils/seoGen";
import { Metadata } from "next";

export const metadata = (): Metadata => {
  // TODO: pathの動的な取得が現状できないので、一旦固定値を入れておく
  const url = "https://dodoitsu-life.vercel.app";
  return seoGen({
    title: "都々逸の投稿・共有サイト | 都々逸ライフ",
    description: "都々逸を投稿・閲覧できるサービスです",
    url: `${url}/`,
    imageUrl: `${url}/api/ogp?content=都々逸ライフ\n都々逸の投稿・閲覧サイト`,
  });
};

export default function Layout({
  children,
  latests,
  populars,
}: {
  children: React.ReactNode;
  latests: React.ReactNode;
  populars: React.ReactNode;
}) {
  return (
    <div>
      <div className="w-full max-w-7xl mt-12">{children}</div>
      <section id="yesterday-bests" className="mt-24">
        <h2 className="mb-8 text-center lg:text-3xl text-lg font-bold text-gray-900 dark:text-gray-900">
          人気の都々逸
        </h2>
        <div className="mt-7 text-center">
          <div className="mb-5">{populars}</div>
        </div>
      </section>

      <section id="yaesterday-posts" className="my-24">
        <h2 className="mb-8 text-center lg:text-3xl text-lg font-bold text-gray-900 dark:text-gray-900">
          最新の都々逸
        </h2>

        <div className="mt-7 text-center">{latests}</div>
      </section>
    </div>
  );
}
