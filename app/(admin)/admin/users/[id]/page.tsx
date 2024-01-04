import BackButton from "@/components/BackButton";
import { getSingleUser } from "@/lib/api";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const UserDetail = async ({ params }: { params: { id: string } }) => {
  const id = Number(params.id);

  const data = await getSingleUser(id);

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">User Details</h2>
          <p className="mt-1 text-sm text-gray-500 ">
            Detailed information about user id {params.id}.
          </p>
        </div>
        <BackButton url="/admin/users" text="Back to all users" />
      </div>
      <div className="mt-5">
        <dl className="space-y-4 ">
          <div>
            <dt className="text-sm font-medium text-gray-500 ">Full name</dt>
            <dd className="mt-1 text-lg font-medium text-gray-900 ">
              {data?.name}
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500 ">
              Email address
            </dt>
            <dd className="mt-1 text-lg text-gray-900 ">{data?.email}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500 ">Gender</dt>
            <dd className="mt-1 text-lg text-gray-900 ">{data?.gender}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500 ">Status</dt>
            <dd className="mt-1 text-lg text-gray-900 ">{data?.status}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default UserDetail;
