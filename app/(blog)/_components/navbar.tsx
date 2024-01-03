"use client";

import { useMenuStore } from "@/lib/store";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const { isOpen, toggleMenu } = useMenuStore();
  return (
    <nav className="bg-white mb-8 border-b-2 border-gray-300">
      <div className="flex flex-wrap items-center justify-between mx-auto py-4">
        <Link href="/" className="flex items-center space-x-3">
          <span className="self-center text-xl font-semibold whitespace-nowrap ">
            Blog GoRest
          </span>
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <Menu />
        </button>
        <div className={`${isOpen ? "" : "hidden"} w-full md:block md:w-auto`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                href="/"
                onClick={toggleMenu}
                className={`${
                  pathname == "/"
                    ? "text-white bg-amber-500 md:text-amber-500"
                    : ""
                } block text-gray-900  py-2 px-3 rounded md:bg-transparent md:p-0`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={toggleMenu}
                className={`${
                  pathname == "/about"
                    ? "text-white bg-amber-500 md:text-amber-500"
                    : ""
                } block text-gray-900  py-2 px-3 rounded md:bg-transparent md:p-0`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={toggleMenu}
                className={`${
                  pathname == "/contact"
                    ? "text-white bg-amber-500 md:text-amber-500"
                    : ""
                } block text-gray-900  py-2 px-3 rounded md:bg-transparent md:p-0`}
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
