import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

import { Header } from "@components/Header/Header";
import { Footer, type Item as FooterItem } from "@components/Footer";
import { JotaiProvider } from "@components/Providers/JotaiProvider/JotaiProvider";
import { ReactQueryProvider } from "@components/Providers/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "都々逸ライフ",
  description: "都々逸の共有サイトです",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const footerItems: FooterItem[] = [
    {
      text: "利用規約",
      to: "/terms",
    },
    {
      text: "プライバシーポリシー",
      to: "/privacy",
    },
  ];

  return (
    <html lang="jp">
      <body className={`${inter.className} flex flex-col h-screen`}>
        <ReactQueryProvider>
          <JotaiProvider>
            <Header />
            <div id="main-container" className="flex-grow">
              {children}
            </div>
            <Footer items={footerItems} />
          </JotaiProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
