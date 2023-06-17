import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

import { Header } from "@components/Header/Header";
import { Footer } from "@components/Footer/Footer";
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
  return (
    <html lang="jp">
      <body className={`${inter.className} flex flex-col h-screen`}>
        <ReactQueryProvider>
          <JotaiProvider>
            <Header />
            <div id="main-container" className="flex-grow">
              {children}
            </div>
            <Footer />
          </JotaiProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
