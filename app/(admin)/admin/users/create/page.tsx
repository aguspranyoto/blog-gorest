"use client";

import FormUser from "@/app/(admin)/_components/FormUser";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { SubmitHandler } from "react-hook-form";
import { FormUserType } from "@/types";

import { toast } from "@/components/ui/use-toast";
import { createUser } from "@/lib/api";
import BackButton from "@/components/BackButton";

const CreatePage = () => {
  const router = useRouter();

  const handleCreateUser: SubmitHandler<FormUserType> = (data) => {
    mutation.mutate(data);
  };

  const mutation = useMutation({
    mutationFn: (data: FormUserType) => {
      return createUser(data);
    },
    onError: (error) => {
      console.log("error", error);
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "User created successfully",
      });
      router.push("/admin/users");
      router.refresh();
    },
  });

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Create new user</h2>
        <BackButton url="/admin/users" text="Back to all users" />
      </div>
      <FormUser
        initialValues={{
          name: "",
          email: "",
          gender: "",
          status: "",
        }}
        submit={handleCreateUser}
        isLoading={mutation.isPending}
        isEditing={false}
      />
    </div>
  );
};

export default CreatePage;
