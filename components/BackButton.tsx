"use client";

import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface BackButtonProps {
  url: string;
  text: string;
}

const BackButton: FC<BackButtonProps> = ({ url, text }) => {
  return (
    <Link
      className="inline-flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-900 mb-6"
      href={url}
    >
      <ArrowLeftIcon className="h-4 w-4" />
      <span>{text}</span>
    </Link>
  );
};

export default BackButton;
