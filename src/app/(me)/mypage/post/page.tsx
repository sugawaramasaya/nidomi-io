"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db, storage } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { nanoid } from "nanoid";

export default function PostPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  const handleUpload = async () => {
    const userId = session?.user?.id;
    console.log("🆔 userId:", userId);
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
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">投稿テスト画面</h1>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files?.[0]) setFile(e.target.files[0]);
        }}
      />
      <button
        onClick={handleUpload}
        disabled={!file || uploading}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        {uploading ? "アップロード中..." : "アップロード"}
      </button>
    </div>
  );
}
