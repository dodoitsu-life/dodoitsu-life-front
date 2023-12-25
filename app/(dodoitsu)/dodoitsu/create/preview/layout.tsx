import { Metadata } from "next";
export const metadata: Metadata = {
  title: "プレビュー｜都々逸ライフ",
  robots: {
    index: false, // noindexの設定
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
