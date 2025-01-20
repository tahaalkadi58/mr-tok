import type { Metadata } from "next";
import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";
import {
  rechargeFont,
  monteroFont,
  blackjackFont,
  monotoneFont,
  baysanFont,
  lobsterFont,
} from "@/lib/fonts/LocalFontsOptimize";
import "./globals.scss";

config.autoAddCss = false;
export const metadata: Metadata = {
  title: "Home",
  description: "My portfolio home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" />
        <link rel="icon" type="image/svg+xml" href="/fav_ico.svg" />

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@next/dist/aos.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/rellax@1.12.0/rellax.min.css"
        />
      </Head>
      <body
        className={`${rechargeFont.variable} ${monteroFont.variable} ${blackjackFont.variable} ${monotoneFont.variable} ${baysanFont.variable} ${lobsterFont.variable}`}
      >
        {children}
        <script src="https://cdn.jsdelivr.net/npm/aos@next/dist/aos.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/rellax@1.12.0/rellax.min.js"></script>
      </body>
    </html>
  );
}
