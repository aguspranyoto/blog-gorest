import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import TanstackProvider from "@/providers/TanstackProvider";
import { Toaster } from "@/components/ui/toaster";
import Sidebar from "./_components/sidebar";
import Navbar from "./_components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog GoRest - Admin Page",
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
        <Navbar />
        <Sidebar />
        <div className="p-4 sm:ml-64">
          <div className="p-4 shadow-xl border border-gray-200  mt-14">
            <TanstackProvider>{children}</TanstackProvider>
            <Toaster />
          </div>
        </div>
      </body>
    </html>
  );
}
