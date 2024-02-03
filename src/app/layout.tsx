import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/main/header.component";
import ChangeDarkMode from "@/components/util/change-dark-mode.component";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | 蒼氷えめさん",
    default: "蒼氷えめさん",
  },
  description: "えめさんのサイト のんびりと書く",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJp.className + "min-h-screen overflow-x-hidden"}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <ChangeDarkMode />
      </body>
    </html>
  );
}
