import { PostData } from "@/lib/type";
import CommentInput from "./CommentInput";

interface CommentsProps {
  post: PostData;
}

export default function Comments({ post }: CommentsProps) {
  return (
    <div>
      <CommentInput post={post} />
    </div>
  );
}
