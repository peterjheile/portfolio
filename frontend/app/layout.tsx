import type { Metadata } from "next";
import "./globals.css";

import { Header } from "@/app/components/layout/header";


export const metadata: Metadata = {
  title: "Peter's Portfolio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
