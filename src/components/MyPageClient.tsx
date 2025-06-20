"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { BookPost } from "@/types/bookPost";
import MyPageComponent from "@/components/MyPageComponent";

export default function MyPageClient() {
  const [posts, setPosts] = useState<BookPost[] | null>(null);

  useEffect(() => {
    console.log("🔑 currentUser:", auth.currentUser?.uid);
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const q = query(
          collection(db, "posts"),
          where("userId", "==", user.uid)
        );
        const snapshot = await getDocs(q);
        const fetched = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<BookPost, "id">),
        }));
        setPosts(fetched);
      } else {
        // 未ログイン時は空配列扱い
        setPosts([]);
      }
    });

    return () => unsub();
  }, []);

  if (posts === null) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return <MyPageComponent posts={posts} />;
}
