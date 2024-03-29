import { Metadata } from "next";
import seoGen from "@/src/utils/seoGen";

export const metadata = (): Metadata => {
  // TODO: pathの動的な取得が現状できないので、一旦固定値を入れておく
  const url = "https://dodoitsu-life.vercel.app";
  return seoGen({
    title: "特定商取引法に基づく表記｜都々逸ライフ",
    description: "特定商取引法に基づく表記を表示します",
    url: `${url}/transaction-law`,
    imageUrl: `${url}/api/ogp?content=都々逸ライフ\n特定商取引法に基づく表記`,
  });
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
