import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/app/_components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="jp">
      <body className={inter.className}>
        <Header />
        <div id="main-container">
          <section>{children}</section>
        </div>
      </body>
    </html>
  );
}
