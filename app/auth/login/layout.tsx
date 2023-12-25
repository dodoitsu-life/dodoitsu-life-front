import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ログイン｜都々逸ライフ",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
