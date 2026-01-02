// app/layout.tsx
import type { Metadata } from "next";
import { Noto_Sans_Georgian } from "next/font/google"; // Noto Sans Georgian
import "./globals.css";

const notoSans = Noto_Sans_Georgian({
  subsets: ["georgian", "latin"], // Georgian + fallback Latin
  weight: ["400", "500", "600", "700"],
  display: "swap", // avoids invisible text
});

export const metadata: Metadata = {
  title: "სარემონტო მომსახურება თბილისში",
  description:
    "საიმედო სარემონტო მომსახურება, ინტერიერის დიზაინი და ავეჯის დამზადება",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ka" className={notoSans.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
