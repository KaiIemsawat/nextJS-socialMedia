import PostEditor from "@/components/posts/editor/PostEditor";
import Post from "@/components/posts/Post";
import { postDataInclude } from "@/components/ui/type";
import prisma from "@/lib/prisma";

export default async function Home() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    // Select what to fetch
    include: postDataInclude,
  });
  return (
    <main className="w-full min-w-0">
      <div className="w-full min-w-0 space-y-5">
        <PostEditor />
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
