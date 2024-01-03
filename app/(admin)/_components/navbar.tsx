"use client";

import { useMenuStore } from "@/lib/store";
import { Menu } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const { toggleMenu } = useMenuStore();

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 ">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span className="sr-only">Open sidebar</span>
              <Menu />
            </button>
            <Link href="/" className="flex ms-2 md:me-24 items-center gap-2">
              <span className="self-center text-md  sm:text-md whitespace-nowrap ">
                Blog GoRest - Admin Page
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
