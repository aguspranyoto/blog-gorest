"use client";

import { useSidebarStore } from "@/lib/store";
import { CircleUserRound, Menu, PawPrint } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const { toggleSidebar } = useSidebarStore();

  return (
    <nav className="w-full bg-white border-b border-gray-200 ">
      <div>
        <Link href="/">Blog GoRest</Link>
      </div>
      <div>
        <Link href="/about">Blog GoRest</Link>
        <Link href="/contact">Blog GoRest</Link>
      </div>
    </nav>
  );
};

export default Navbar;
