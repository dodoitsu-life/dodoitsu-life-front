import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { Header } from "@/app/_components/Header/Header";
import { Footer } from "@/app/_components/Footer/Footer";
import JotaiProvider from "@/app/_components/Providers/JotaiProvider/JotaiProvider";

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
        <JotaiProvider>
          <Header />
          <div id="main-container" className="flex-grow">
            {children}
          </div>
          <Footer />
        </JotaiProvider>
      </body>
    </html>
  );
}
