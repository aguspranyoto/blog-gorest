import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import Navbar from "./_components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog GoRest",
  description: "Developed by Agus Pranyoto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-5xl mx-auto px-4 md:px-0">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
