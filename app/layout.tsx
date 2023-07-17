import "./globals.css";
import { useContext } from "react";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { ClipboardIcon, TrophyIcon } from "@heroicons/react/24/outline";

import { Header, type Menu as HeaderMenu } from "@components/Header";
import { Footer, type Item as FooterItem } from "@components/Footer";
import { JotaiProvider } from "@components/Providers/JotaiProvider/JotaiProvider";
import { ReactQueryProvider } from "@components/Providers/ReactQueryProvider";
import {
  AuthContext,
  AuthProvider,
} from "./_components/Providers/AuthProvider";

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
  const {} = useContext(AuthContext);

  const headerMenus: HeaderMenu[] = [
    {
      name: "最新の投稿",
      icon: ClipboardIcon,
      link: "/dodoitsu/latest?page=1",
    },
    {
      name: "ランキング",
      icon: TrophyIcon,
      link: "/dodoitsu/ranking?page=1",
    },
  ];

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
            <AuthProvider>
              <Header menus={headerMenus} />
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
