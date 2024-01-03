import { PostType } from "@/types";
import Post from "./_components/Post";
import { getPosts } from "@/lib/api";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div>
      {posts.map((post: PostType) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
