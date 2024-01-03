import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { getRecentPost } from "@/lib/api";
import { PostType } from "@/types";
import Link from "next/link";

interface RecentType {
  recent: PostType;
}
const Recent = async ({ recent }: RecentType) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="leading-6">{recent?.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="truncate">{recent?.body}</p>
      </CardContent>
      <CardFooter>
        <Link className="underline" href={`/detail/${recent?.id}`}>
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Recent;
