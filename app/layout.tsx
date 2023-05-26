import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./_components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="jp">
      <body className={inter.className}>
        <div id="main-container">
          <Header />
          <section>{children}</section>
        </div>
      </body>
    </html>
  );
}
