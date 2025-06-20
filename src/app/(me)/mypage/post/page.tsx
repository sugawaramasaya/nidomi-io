"use client";

import { useEffect, useState } from "react";
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

export default function PostPage() {
  const { data: session } = useSession();
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();
    let isMounted = true;

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (isMounted) {
        setAuthUser(user);
        setAuthReady(true);
      }
    });

    const maybeSignInToFirebase = async () => {
      if (!auth.currentUser && session?.idToken) {
        try {
          const credential = GoogleAuthProvider.credential(session.idToken);
          await signInWithCredential(auth, credential);
          console.log("✅ Firebase login successful:", auth.currentUser?.uid);
        } catch (error) {
          console.error("🔥 Firebase login error:", error);
        }
      }
    };

    maybeSignInToFirebase();

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, [session]);

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
        className={`mt-4 px-4 py-2 rounded ${
          uploading ? "bg-gray-400" : "bg-blue-600"
        } text-white`}
      >
        {uploading ? "アップロード中..." : "アップロード"}
      </button>
    </div>
  );
}
