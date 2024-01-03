import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const EditPage = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">Edit user</h2>
        <Link href="/admin/users" className={buttonVariants()}>
          Back to user table
        </Link>
      </div>
    </div>
  );
};

export default EditPage;
