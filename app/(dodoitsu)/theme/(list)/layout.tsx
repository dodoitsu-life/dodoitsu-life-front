import { Metadata } from "next";
import seoGen from "@/src/utils/seoGen";

export const metadata = (): Metadata => {
  // TODO: pathの動的な取得が現状できないので、一旦固定値を入れておく
  const url = "https://dodoitsu-life.vercel.app";
  return seoGen({
    title: "お題｜都々逸ライフ",
    description: "お題",
    url: `${url}/dodoitsu/latest`,
    imageUrl: `${url}/api/ogp?content=お題別`,
  });
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
