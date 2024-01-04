import { PostType } from "@/types";
import Post from "./_components/Post";
import { getPosts } from "@/lib/api";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="text-xl font-semibold text-center mb-8 ">Articles</h1>
      {posts.map((post: PostType) => (
        <Post post={post} />
      ))}
    </div>
  );
}
