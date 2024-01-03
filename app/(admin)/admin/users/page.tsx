import React from "react";
import { DataTable } from "./data-table";
import { getUsers } from "@/lib/api";
import { columns } from "./columns";

const UsersPage = async () => {
  const users = await getUsers();
  return (
    <div>
      <DataTable columns={columns} data={users} />
    </div>
  );
};

export default UsersPage;
