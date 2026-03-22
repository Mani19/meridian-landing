import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Meridian",
  description:
    "Turn every customer conversation into revenue. AI-powered shopping assistants across web, WhatsApp, and voice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${publicSans.variable}`}>
      <body className="font-[family-name:var(--font-public-sans)] antialiased">
        {children}
      </body>
    </html>
  );
}
