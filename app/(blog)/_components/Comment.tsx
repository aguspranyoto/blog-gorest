import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { CommentType } from "@/types";
import Link from "next/link";
const Comment = ({ comment }: { comment: CommentType }) => {
  return (
    <Card key={comment?.id}>
      <CardHeader className="p-3 pb-1">
        <CardTitle className="flex text-md justify-between items-center">
          <span>{comment?.name}</span>
          <span className="font-normal text-sm">{comment?.email}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <p>{comment?.body}</p>
      </CardContent>
    </Card>
  );
};

export default Comment;
{
  /* <div className="space-y-4">
      <div className="border rounded-lg p-4">
        <h3 className="font-medium">John Doe</h3>
        <p>This is a very insightful article. Thanks for sharing!</p>
      </div>
      <div className="border rounded-lg p-4">
        <h3 className="font-medium">Jane Smith</h3>
        <p>I'm excited to see where AI will take us in the future.</p>
      </div>
    </div> */
}
