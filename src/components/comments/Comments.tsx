import { PostData } from "@/lib/type";

interface CommentsProps {
  post: PostData;
}

export default function Comments({ post }: CommentsProps) {
  return <div>Comment</div>;
}
