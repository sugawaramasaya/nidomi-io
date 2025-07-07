import { notFound } from "next/navigation";
import PostDetailView from "@/components/PostDetailView";
import { BookPost } from "@/types/bookPost";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface PostDetailPageProps {
  params: {
    id: string;
  };
}

// 投稿データを取得する関数
async function getPost(id: string): Promise<BookPost | null> {
  try {
    const postDoc = await getDoc(doc(db, "posts", id));
    if (!postDoc.exists()) {
      return null;
    }
    
    const data = postDoc.data();
    return {
      id: postDoc.id,
      imageUrls: data.imageUrls || [],
      title: data.title || "",
      comment: data.comment || "",
      tags: data.tags || [],
      userId: data.userId || "",
      createdAt: data.createdAt,
    };
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
