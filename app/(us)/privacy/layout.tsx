import { Metadata } from "next";
import seoGen from "@/src/utils/seoGen";

export const metadata = (): Metadata => {
  // TODO: pathの動的な取得が現状できないので、一旦固定値を入れておく
  const url = "https://dodoitsu-life.vercel.app";
  return seoGen({
    title: "プライバシーポリシー｜都々逸ライフ",
    description: "プライバシーポリシーを表示します",
    url: `${url}/privacy`,
    imageUrl: `${url}/api/ogp?content=都々逸ライフ\nプライバシーポリシー`,
  });
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
