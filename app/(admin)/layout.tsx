import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import TanstackProvider from "@/providers/TanstackProvider";
import { Toaster } from "@/components/ui/toaster";
import Sidebar from "./_components/sidebar";
import Navbar from "./_components/navbar";
import Footer from "@/components/footer";

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
        <div className="p-4 sm:ml-64 min-h-[calc(100vh-54px)]">
          <div className="mt-14 p-6 shadow-md">
            <TanstackProvider>{children}</TanstackProvider>
            <Toaster />
          </div>
        </div>
        <Footer isAdmin={true} />
      </body>
    </html>
  );
}
