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
import Button from "@/components/Button";
import type { Session } from "next-auth";

interface ExtendedSession extends Session {
  idToken?: string;
}

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
      const extendedSession = session as ExtendedSession;
      if (!auth.currentUser && extendedSession?.idToken) {
        try {
          const credential = GoogleAuthProvider.credential(
            extendedSession.idToken
          );
          await signInWithCredential(auth, credential);

          const currentUser = auth.currentUser as User | null;
          if (currentUser) {
            console.log("✅ Firebase login successful:", currentUser.uid);
          }
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
        <p className="text-[var(--on-surface-variant)] text-medium">
          認証情報を確認中です...
        </p>
      </div>
    );
  }

  if (!authUser) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-[var(--error)] text-medium">
          ログインしてください。
        </p>
      </div>
    );
  }

  return (
    <div className="p-[var(--space-16)]">
      <h1 className="text-large font-bold mb-[var(--space-16)]">
        投稿テスト画面
      </h1>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files?.[0]) setFile(e.target.files[0]);
        }}
      />
      <Button
        variant="primary"
        fullWidth
        disabled={!file || uploading}
        onClick={handleUpload}
      >
        {uploading ? "アップロード中..." : "アップロード"}
      </Button>
    </div>
  );
}
