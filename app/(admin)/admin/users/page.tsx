import React from "react";
import { DataTable } from "./data-table";
import { getUsers } from "@/lib/api";
import { columns } from "./columns";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const UsersPage = async () => {
  const users = await getUsers();
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">User table</h2>
        <Link href="/admin/users/create" className={buttonVariants()}>
          Create
        </Link>
      </div>
      <DataTable columns={columns} data={users} />
    </div>
  );
};

export default UsersPage;
