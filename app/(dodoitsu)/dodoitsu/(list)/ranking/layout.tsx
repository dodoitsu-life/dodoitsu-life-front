import { Metadata } from "next";
import seoGen from "@/src/utils/seoGen";

export const metadata = (): Metadata => {
  // TODO: pathの動的な取得が現状できないので、一旦固定値を入れておく
  const url = "https://dodoitsu-life.vercel.app";
  return seoGen({
    title: "人気の都々逸｜都々逸ライフ",
    description: "人気の都々逸を表示します",
    url: `${url}/dodoitsu/ranking`,
    imageUrl: `${url}/api/ogp?content=人気の都々逸`,
  });
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
