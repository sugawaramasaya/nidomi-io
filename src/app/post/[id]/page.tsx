import { notFound } from "next/navigation";
import PostDetailView from "@/components/PostDetailView";
import { BookPost } from "@/types/bookPost";
import { Timestamp } from "firebase/firestore";

interface PostDetailPageProps {
  params: {
    id: string;
  };
}

// 投稿データを取得する関数（一時的にモックデータを返す）
async function getPost(id: string): Promise<BookPost | null> {
  try {
    // 実際の開発環境では、ここでFirebaseからデータを取得
    // 現在は一時的にモックデータを返す
    const mockPost: BookPost = {
      id: id,
      imageUrls: ["https://via.placeholder.com/480x480?text=Sample+Image"],
      title: "サンプル投稿",
      comment: "これはテスト用の投稿です。",
      tags: ["テスト", "サンプル"],
      userId: "test-user",
      createdAt: Timestamp.now(),
    };
    
    return mockPost;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const post = await getPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-nidomi-surface">
      <div className="w-full max-w-screen-xs mx-auto">
        <PostDetailView post={post} />
      </div>
    </div>
  );
}

// メタデータを生成
export async function generateMetadata({ params }: PostDetailPageProps) {
  const post = await getPost(params.id);
  
  if (!post) {
    return {
      title: "投稿が見つかりません",
    };
  }

  return {
    title: post.title || "投稿詳細",
    description: post.comment || "nidomi.ioの投稿詳細",
  };
}
