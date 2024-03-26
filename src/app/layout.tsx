import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GridView",
  description: "Layout of screens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen flex-col w-full`}>
        <Nav />
        <main className="flex flex-grow w-full">{children}</main>
        <footer className="bg-gray-400 w-full h-14 flex justify-center items-center text-black">
          Copyright &copy; {new Date().getFullYear()} | All Rights reserved
        </footer>
      </body>
    </html>
  );
}
