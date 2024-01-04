"use client";

import FormUser from "@/app/(admin)/_components/FormUser";

import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { SubmitHandler } from "react-hook-form";
import { FormUserType, UserType } from "@/types";

import { toast } from "@/components/ui/use-toast";
import { editUser, getSingleUser } from "@/lib/api";
import BackButton from "@/components/BackButton";

const EditPage = ({ params }: { params: { id: string } }) => {
  const id = Number(params.id);
  const router = useRouter();

  const { data: dataUser, isLoading } = useQuery<UserType>({
    queryKey: ["user", id],
    queryFn: () => {
      const res = getSingleUser(id);
      return res;
    },
  });

  const mutation = useMutation({
    mutationFn: (newData: FormUserType) => {
      return editUser(newData, id);
    },
    onError: (error) => {
      console.log("error", error);
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Student updated successfully",
      });
      router.push("/admin/users");
      router.refresh();
    },
  });

  const handleEditUser: SubmitHandler<FormUserType> = (data) => {
    mutation.mutate(data);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Edit user</h2>
        <BackButton url="/admin/users" text="Back to all users" />
      </div>
      {dataUser && (
        <FormUser
          initialValues={dataUser}
          submit={handleEditUser}
          isLoading={isLoading}
          isEditing={true}
        />
      )}
    </div>
  );
};

export default EditPage;
