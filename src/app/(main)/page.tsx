import PostEditor from "@/components/posts/editor/PostEditor";
import Post from "@/components/posts/Post";
import prisma from "@/lib/prisma";

export default async function Home() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    // Select what to fetch
    include: {
      user: {
        select: {
          username: true,
          displayName: true,
          avatarUrl: true,
        },
      },
    },
  });
  return (
    <main className="h-[200vh] w-full bg-red-50">
      <div className="w-full">
        <PostEditor />
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
