// src/components/MyPageComponent.tsx

"use client";

import { BookPost } from "@/types/bookPost";
import Image from "next/image";
import ImageCard from "@/components/ImageCard";
import FAB from "@/components/FAB";
import AddIcon from "@/icons/size40/add.svg";
import HomeIcon from "@/icons/size40/home-outlined.svg";
import HeartIcon from "@/icons/size40/heart-outlined.svg";
import SettingIcon from "@/icons/size40/setting.svg";
import nidomy from "@/assets/nidomy/kyoton.png";

interface Props {
  posts: BookPost[];
}

export default function MyPageComponent({ posts }: Props) {
  if (posts.length === 0) {
    return (
      <div className="h-screen flex flex-col justify-between">
        <div className="flex flex-col gap-[12px] p-[24px]">
          <div
            style={{
              fontSize: "var(--font-size-medium)",
              lineHeight: "var(--line-height-medium)",
              fontWeight: "var(--font-weight-bold)",
              color: "var(--on-surface)",
            }}
          >
            お気に入りのアートブックを並べよう
          </div>
          <div
            style={{
              fontSize: "var(--font-size-medium)",
              lineHeight: "var(--line-height-medium)",
              fontWeight: "var(--font-weight-bold)",
              color: "var(--on-surface-variant)",
            }}
          >
            撮影した写真や保存済みの画像を追加できます。またホーム画面でみんなのコレクションを眺めることもできます。
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center w-full">
          <div className="aspect-square flex justify-center items-center w-full">
            <Image
              src={nidomy.src}
              alt="nidomy graphic"
              width={256}
              height={256}
              priority
              className="aspect-square"
            />
          </div>
        </div>

        <div className="fixed bottom-[40px] right-[16px] z-50 flex flex-col items-end space-y-[20px]">
          <FAB icon={<AddIcon />} />
          <FAB icon={<HomeIcon />} />
          <FAB icon={<HeartIcon />} />
          <FAB icon={<SettingIcon />} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen">
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-0">
        {posts.map((post) =>
          post.imageUrls?.[0] ? (
            <ImageCard key={post.id} src={post.imageUrls[0]} />
          ) : null
        )}
      </div>
    </div>
  );
}
