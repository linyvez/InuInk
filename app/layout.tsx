import type { Metadata } from "next";
import { Protest_Revolution } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const protestRev = Protest_Revolution({
  variable: "--font-protest-revolution",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "InuInk",
  description: "Practice hiragana online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${protestRev.variable} antialiased flex flex-col h-dvh w-screen pt-5`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
