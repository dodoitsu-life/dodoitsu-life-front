import { Metadata } from "next";
export const metadata: Metadata = {
  title: "都々逸ライフ｜人気の都々逸",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
