'use client';

import { BookPost } from "@/types/bookPost";
import Image from "next/image";
import { useState } from "react";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { Timestamp } from "firebase/firestore";

interface PostDetailViewProps {
  post: BookPost;
  className?: string;
}

export default function PostDetailView({ post, className = "" }: PostDetailViewProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const formatDate = (timestamp: Timestamp | undefined) => {
    if (!timestamp) return "";
    try {
      // Firebaseの Timestamp オブジェクトを Date に変換
      const date = timestamp.toDate();
      return format(date, "yyyy年MM月dd日", { locale: ja });
    } catch {
      return "";
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev: number) => 
      prev + 1 >= post.imageUrls.length ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev: number) => 
      prev - 1 < 0 ? post.imageUrls.length - 1 : prev - 1
    );
  };

  return (
    <div className={`w-full max-w-screen-xs mx-auto bg-nidomi-surface ${className}`}>
      {/* 画像表示エリア */}
      <div className="relative w-full aspect-square bg-nidomi-surface-variant">
        <Image
          src={post.imageUrls[currentImageIndex]}
          alt={post.title || "投稿画像"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 480px"
          priority
        />
        
        {/* 画像切り替えボタン（複数画像の場合のみ表示） */}
        {post.imageUrls.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-nidomi-surface/80 flex items-center justify-center hover:bg-nidomi-surface/90 transition-colors"
              aria-label="前の画像"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-nidomi-surface/80 flex items-center justify-center hover:bg-nidomi-surface/90 transition-colors"
              aria-label="次の画像"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            
            {/* 画像インジケーター */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {post.imageUrls.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex
                      ? "bg-nidomi-primary"
                      : "bg-nidomi-surface/60"
                  }`}
                  aria-label={`画像${index + 1}に移動`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* 投稿詳細情報 */}
      <div className="px-6 py-6 space-y-4">
        {/* タイトル */}
        {post.title && (
          <h1 className="text-large font-bold text-nidomi-surface-foreground">
            {post.title}
          </h1>
        )}

        {/* コメント */}
        {post.comment && (
          <div className="text-medium text-nidomi-surface-foreground leading-relaxed">
            {post.comment}
          </div>
        )}

        {/* タグ */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-nidomi-surface-variant text-small text-nidomi-surface-variant-foreground rounded-12 font-regular"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* 作成日時 */}
        {post.createdAt && (
          <div className="text-small text-nidomi-surface-variant-foreground">
            {formatDate(post.createdAt)}
          </div>
        )}
      </div>
    </div>
  );
}
