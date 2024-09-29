import { CommentData } from "@/lib/type";

interface CommentProps {
  comment: CommentData;
}

export default function Comment({ comment }: CommentProps) {
  return <div>{comment.content}</div>;
}
