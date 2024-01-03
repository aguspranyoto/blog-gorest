"use client";

import { useSidebarStore } from "@/lib/store";
import { Home, ListChecks, ShoppingBag, Users } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const SidebarBlog = () => {
  const { isOpen, toggleSidebar } = useSidebarStore();

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const sidebar = document.getElementById("sidebar");

      if (sidebar && !sidebar.contains(event.target as Node) && isOpen) {
        toggleSidebar(); // Close the sidebar if it's open
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, toggleSidebar]);

  return (
    <aside
      id="sidebar"
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
        isOpen ? "-translate-x-0" : "-translate-x-full"
      } bg-white border-r border-gray-200 sm:translate-x-0`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white ">
        <ul className="space-y-2 font-medium">
          <li onClick={toggleSidebar}>
            <Link
              href="/student"
              className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
            >
              <Home />
              <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
            </Link>
          </li>
          <li onClick={toggleSidebar}>
            <Link
              href="/student"
              className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
            >
              <Home />
              <span className="flex-1 ms-3 whitespace-nowrap">About</span>
            </Link>
          </li>
          <li onClick={toggleSidebar}>
            <Link
              href="/student"
              className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
            >
              <Home />
              <span className="flex-1 ms-3 whitespace-nowrap">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SidebarBlog;
