import localFont from "next/font/local";
export const rechargeFont = localFont({
  src: [
    {
      path: "./recharge.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-recharge", // يمكنك استخدام متغير CSS إذا احتجت
  display: "swap",
});

export const monteroFont = localFont({
  src: [
    {
      path: "./montero.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-montero",
  display: "swap",
});

export const blackjackFont = localFont({
  src: [
    {
      path: "./blackjack.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-blackjack",
  display: "swap",
});

export const monotoneFont = localFont({
  src: [
    {
      path: "./monoton.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-monotone",
  display: "swap",
});

export const baysanFont = localFont({
  src: [
    {
      path: "./baysan.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-baysan",
  display: "swap",
});

export const lobsterFont = localFont({
  src: [
    {
      path: "./lobster.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-lobster",
  display: "swap",
});
