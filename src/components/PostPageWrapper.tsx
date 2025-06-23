// components/PostPageWrapper.tsx
import { BookPost } from "@/types/bookPost";
import PostGridView from "@/components/PostGridView";
import PostFABMenu from "@/components/PostFABMenu";
import Image from "next/image";
import nidomy from "@/assets/nidomy/kyoton.png";

interface Props {
  posts: BookPost[];
  screen?: "mypage" | "home";
}

export default function PostPageWrapper({ posts, screen = "mypage" }: Props) {
  const showEmptyState = screen === "mypage" && posts.length === 0;

  if (showEmptyState) {
    return (
      <div className="h-screen flex flex-col">
        <div className="w-full max-w-[480px] mx-auto flex flex-col gap-[12px] px-[24px] pt-[24px]">
          <div
            style={{
              fontSize: "var(--font-size-large)",
              lineHeight: "var(--line-height-large)",
              fontWeight: "var(--font-weight-bold)",
              color: "var(--on-surface)",
            }}
          >
            お気に入りのアートブックを並べよう
          </div>
          <div
            style={{
              fontSize: "var(--font-size-large)",
              lineHeight: "var(--line-height-large)",
              fontWeight: "var(--font-weight-bold)",
              color: "var(--on-surface-variant)",
            }}
          >
            撮影した写真や保存済みの画像を追加できます。またホーム画面でみんなのコレクションを眺めることもできます。
          </div>
        </div>
        <div className="w-full max-w-[480px] mx-auto flex flex-col h-screen">
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
        </div>
        <PostFABMenu screen={screen} />
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen bg-[color:var(--surface)]">
      <PostGridView posts={posts} />
      <PostFABMenu screen={screen} />
    </div>
  );
}
