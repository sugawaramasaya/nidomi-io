// components/PostGridView.tsx
import { BookPost } from "@/types/bookPost";
import ImageCard from "@/components/ImageCard";
import Checkbox from "@/components/Checkbox";

interface Props {
  posts: BookPost[];
  isSelecting?: boolean;
  selectedPostIds?: string[];
  onLongPress?: (postId: string) => void;
  onToggleSelect?: (postId: string) => void;
}

export default function PostGridView({
  posts,
  isSelecting = false,
  selectedPostIds = [],
  onLongPress,
  onToggleSelect,
}: Props) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-0">
      {posts.map((post) => {
        const isChecked = selectedPostIds.includes(post.id);
        return (
          <div key={post.id} className="relative group">
            {isSelecting && (
              <div className="absolute top-0 left-0 z-10">
                <Checkbox
                  checked={isChecked}
                  onChange={() => onToggleSelect?.(post.id)}
                />
              </div>
            )}
            <div
              onPointerDown={(e) => {
                let timeout = setTimeout(() => {
                  onLongPress?.(post.id);
                }, 500);
                const cancel = () => clearTimeout(timeout);
                e.currentTarget.addEventListener("pointerup", cancel, {
                  once: true,
                });
                e.currentTarget.addEventListener("pointerleave", cancel, {
                  once: true,
                });
              }}
            >
              <ImageCard src={post.imageUrls[0]} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
