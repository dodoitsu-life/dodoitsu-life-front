import { Metadata } from "next";
import seoGen from "@/src/utils/seoGen";

export const metadata = (): Metadata => {
  // TODO: pathの動的な取得が現状できないので、一旦固定値を入れておく
  const url = "https://dodoitsu-life.vercel.app";
  return seoGen({
    title: "都々逸ライフ｜利用規約",
    description: "利用規約を表示します",
    url: `${url}/terms`,
    imageUrl: `${url}/api/ogp?content=都々逸ライフ\n利用規約`,
  });
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
