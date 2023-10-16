import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import Head from "./head";
import { Header } from "@components/Header";
import { Footer, type Item as FooterItem } from "@components/Footer";
import { JotaiProvider } from "@components/Providers/JotaiProvider/JotaiProvider";
import { ReactQueryProvider } from "@components/Providers/ReactQueryProvider";
import { AuthProvider } from "./_components/Providers/AuthProvider";
import seoGen from "@/src/utils/seoGen";
import { appConfig } from "@/src/config/app.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata = (): Metadata => {
  // TODO: pathの動的な取得が現状できないので、一旦固定値を入れておく
  const url = "https://dodoitsu-life.vercel.app";
  return seoGen({
    title: "都々逸ライフ",
    description: "都々逸を投稿・閲覧できるサービスです",
    url: `${url}/`,
    imageUrl: `${url}/api/ogp?content=都々逸ライフ\n都々逸の投稿・閲覧サイト`,
  });
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { supportUrl } = appConfig();
  const footerItems: FooterItem[] = [
    {
      text: "利用規約",
      to: "/terms",
    },
    {
      text: "プライバシーポリシー",
      to: "/privacy",
    },
    {
      text: "特商法表記",
      to: "/transaction-law",
    },
    {
      text: "サービスを支援する",
      to: supportUrl,
    },
  ];

  return (
    <html lang="jp">
      <Head />
      <body className={`${inter.className} flex flex-col h-screen`}>
        <ReactQueryProvider>
          <JotaiProvider>
            <AuthProvider>
              <Header />
              <div id="main-container" className="flex-grow">
                {children}
              </div>
              <Footer items={footerItems} />
            </AuthProvider>
          </JotaiProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
