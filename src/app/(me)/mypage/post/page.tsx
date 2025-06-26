// src/app/(me)/mypage/post/page.tsx
"use client";
import { useEffect, useState, useRef } from "react"; // useRefを追加
import { useSession } from "next-auth/react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithCredential,
  GoogleAuthProvider,
  User,
} from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { storage, db } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { nanoid } from "nanoid";
import type { Session } from "next-auth";
import FAB from "@/components/FAB";
import BackIcon from "@/icons/size40/back.svg";
import { usePostImageStore } from "@/store/postImage";
import { useFirebaseAuth } from "@/hooks/useFirebaseAuth"; // ✅ 追加

interface ExtendedSession extends Session {
  idToken?: string;
}

export default function PostPage() {
  const { data: session } = useSession();
  const [uploading, setUploading] = useState(false);
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);

  useFirebaseAuth(); // ✅ 呼び出し
  const router = useRouter();
  const file = usePostImageStore((s) => s.imageFile);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setAuthUser(user);
      setAuthReady(true);
    });
    return () => unsubscribe();
  }, []);

  const handleUpload = async () => {
    const userId = authUser?.uid;
    if (!userId || !file) {
      console.warn("⛔ userId or file not ready");
      return;
    }

    setUploading(true);

    try {
      const filename = `${Date.now()}_${nanoid()}`;
      const storageRef = ref(storage, `posts/${filename}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);

      await addDoc(collection(db, "posts"), {
        userId,
        imageUrls: [downloadURL],
        title: "", // 仮
        comment: "", // 仮
        tags: [],
        createdAt: Timestamp.now(),
      });

      router.push("/mypage");
    } catch (err) {
      console.error("🔥 Upload error:", err);
      alert("アップロードに失敗しました。再試行してください。");
    } finally {
      setUploading(false);
    }
  };

  if (!authReady) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-gray-500">認証情報を確認中です...</p>
      </div>
    );
  }

  if (!authUser) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-red-500">ログインしてください。</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      {/* 戻るボタン */}
      <div className="fixed bottom-[40px] left-[16px] z-50 flex flex-col items-start space-y-[20px]">
        <FAB icon={<BackIcon />} onClick={() => router.back()} />
      </div>
      <h1 className="text-xl font-bold mb-4">投稿テスト画面</h1>
      <button
        onClick={handleUpload}
        disabled={!file || uploading}
        className={`mt-4 px-4 py-2 rounded ${
          uploading ? "bg-gray-400" : "bg-blue-600"
        } text-white`}
      >
        {uploading ? "アップロード中..." : "アップロード"}
      </button>
    </div>
  );
}
