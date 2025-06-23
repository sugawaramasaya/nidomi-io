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
import TextField from "@/components/TextField";
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
  const [title, setTitle] = useState("");
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
        } catch (error) {
          console.error("Failed to sign in to Firebase:", error);
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
    if (!file || !authUser) return;

    setUploading(true);

    try {
      const fileId = nanoid();
      const fileRef = ref(storage, `uploads/${authUser.uid}/${fileId}`);
      await uploadBytes(fileRef, file);
      const downloadURL = await getDownloadURL(fileRef);

      await addDoc(collection(db, "posts"), {
        title,
        imageUrls: [downloadURL],
        createdAt: Timestamp.now(),
        userId: authUser.uid,
      });

      router.push("/mypage");
    } catch (error) {
      console.error("Failed to upload file:", error);
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
    <div className="w-full max-w-[480px] mx-auto px-[var(--space-24)] py-[var(--space-16)]">
      <TextField
        label="タイトル"
        value={title}
        onChange={setTitle}
        placeholder="投稿のタイトルを入力してください"
        className="mb-[var(--space-16)]"
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="mb-[var(--space-16)]"
      />
      <Button
        fullWidth
        variant="primary"
        onClick={handleUpload}
        disabled={uploading || !file || !title}
      >
        {uploading ? "アップロード中..." : "投稿する"}
      </Button>
    </div>
  );
}
