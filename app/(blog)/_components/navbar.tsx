"use client";

import { useSidebarStore } from "@/lib/store";
import { Menu } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const { isOpen, toggleSidebar } = useSidebarStore();
  return (
    <nav className="bg-white border-gray-200 mb-8">
      <div className="flex flex-wrap items-center justify-between mx-auto py-4">
        <Link href="/" className="flex items-center space-x-3">
          <span className="self-center text-xl font-semibold whitespace-nowrap ">
            Blog GoRest
          </span>
        </Link>
        <button
          onClick={toggleSidebar}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open main menu</span>
          <Menu />
        </button>
        <div className={`${isOpen ? "" : "hidden"} w-full md:block md:w-auto`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
