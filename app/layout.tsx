import "./globals.css";
import { Inter } from "next/font/google";
import Head from "./head";
import { Header } from "@components/Header";
import { Footer, type Item as FooterItem } from "@components/Footer";
import { JotaiProvider } from "@components/Providers/JotaiProvider/JotaiProvider";
import { ReactQueryProvider } from "@components/Providers/ReactQueryProvider";
import { AuthProvider } from "./_components/Providers/AuthProvider";
import { appConfig } from "@/src/config/app.config";

const inter = Inter({ subsets: ["latin"] });

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
