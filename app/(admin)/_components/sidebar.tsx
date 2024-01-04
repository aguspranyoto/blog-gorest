"use client";

import { useMenuStore } from "@/lib/store";
import { Home, ListChecks, ShoppingBag, Users } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const { isOpen, toggleMenu } = useMenuStore();

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const sidebar = document.getElementById("sidebar");

      if (sidebar && !sidebar.contains(event.target as Node) && isOpen) {
        toggleMenu();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, toggleMenu]);

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
          <li onClick={toggleMenu}>
            <Link
              href="/admin/users"
              className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
            >
              <Users />
              <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
