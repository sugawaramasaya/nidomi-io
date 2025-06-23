// components/PostGridView.tsx
import { BookPost } from "@/types/bookPost";
import ImageCard from "@/components/ImageCard";

interface Props {
  posts: BookPost[];
}

export default function PostGridView({ posts }: Props) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-0">
      {posts.map((post) =>
        post.imageUrls?.[0] ? (
          <ImageCard key={post.id} src={post.imageUrls[0]} />
        ) : null
      )}
    </div>
  );
}
