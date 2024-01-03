"use client";

import { useSidebarStore } from "@/lib/store";
import { CircleUserRound, Menu, PawPrint } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button, buttonVariants } from "./ui/button";

const Navbar = () => {
  const { profileOpen, toggleSidebar, toggleProfile } = useSidebarStore();
  const auth = false;
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 ">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              onClick={toggleSidebar}
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span className="sr-only">Open sidebar</span>
              <Menu />
            </button>
            <Link href="/" className="flex ms-2 md:me-24 items-center gap-2">
              <span className="self-center text-md  sm:text-md whitespace-nowrap ">
                Student App
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            {!auth ? (
              <div className="space-x-2">
                <Link
                  className={buttonVariants({
                    variant: "outline",
                    size: "sm",
                  })}
                  href={"/sign-in"}
                >
                  Sign in
                </Link>
                <Link
                  className={buttonVariants({ size: "sm" })}
                  href={"/sign-up"}
                >
                  Sign up
                </Link>
              </div>
            ) : (
              <div className="flex items-center ms-3">
                <div>
                  <button
                    onClick={toggleProfile}
                    type="button"
                    className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300 "
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <CircleUserRound />
                  </button>
                </div>
                <div
                  className={`z-50 absolute right-0 top-6 ${
                    profileOpen ? "block" : "hidden"
                  } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow `}
                  id="profile"
                >
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900 " role="none">
                      John Doe
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate "
                      role="none"
                    >
                      example@example.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li onClick={toggleProfile}>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        role="menuitem"
                      >
                        Profile
                      </Link>
                    </li>
                    <li onClick={toggleProfile}>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        role="menuitem"
                      >
                        Settings
                      </Link>
                    </li>
                    <li onClick={toggleProfile}>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        role="menuitem"
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
