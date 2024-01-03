"use client";

import { useRouter } from "next/navigation";
import { buttonVariants } from "./ui/button";

const BackButton = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <button className={buttonVariants()} onClick={handleBackClick}>
      Go Back
    </button>
  );
};

export default BackButton;
