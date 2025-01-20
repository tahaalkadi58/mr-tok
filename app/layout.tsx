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
      <body
        className={`${rechargeFont.variable} ${monteroFont.variable} ${blackjackFont.variable} ${monotoneFont.variable} ${baysanFont.variable} ${lobsterFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
