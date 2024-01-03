import { getSinglePost, getRecentPost, getComment } from "@/lib/api";

import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import Recent from "../../_components/Recent";
import { CommentType, PostType } from "@/types";
import Comment from "../../_components/Comment";
import { comment } from "postcss";

const DetailPost = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const post = await getSinglePost(Number(id));
  const recents = await getRecentPost();
  const comments = await getComment(Number(id));

  return (
    <div>
      <div className="flex flex-col space-y-6 px-4 py-6 md:px-6 lg:py-8 md:py-8">
        <Link
          className="inline-flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-900"
          href="/"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          <span>Back to all posts</span>
        </Link>
        <article className="">
          <div className="space-y-2 mb-2">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
              {post?.title}
            </h1>
            <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 mb-2">
              <span>By Unknown</span>
              <span>•</span>
              <span>Posted on -</span>
            </div>
          </div>
          <p>{post?.body}</p>
        </article>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Comments</h2>
          {comments.length > 0 ? (
            <>
              {comments.map((comment: CommentType) => (
                <Comment key={comment.id} comment={comment} />
              ))}
            </>
          ) : (
            <div>0 comment</div>
          )}
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Recent Posts</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recents.map((recent: PostType) => (
              <Recent recent={recent} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DetailPost;
