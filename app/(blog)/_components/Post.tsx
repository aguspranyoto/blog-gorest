import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PostType } from "@/types";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  post: PostType;
}

const Post = ({ post }: Props) => {
  return (
    <div className="mb-6" key={post.id}>
      <Link href={`/detail/${post?.id}`}>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>{post?.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="truncate">{post?.body}</p>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default Post;
