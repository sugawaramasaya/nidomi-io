// components/PostGridView.tsx
'use client';

import { BookPost } from "@/types/bookPost";
import ImageCard from "@/components/ImageCard";
import Checkbox from "@/components/Checkbox";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const handlePostClick = (postId: string) => {
    if (!isSelecting) {
      router.push(`/post/${postId}`);
    }
  };

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
                const timeout = setTimeout(() => {
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
              onClick={() => handlePostClick(post.id)}
              className="cursor-pointer"
            >
              <ImageCard src={post.imageUrls[0]} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
