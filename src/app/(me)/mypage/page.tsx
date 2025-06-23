"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { BookPost } from "@/types/bookPost";
import PostPageWrapper from "@/components/PostPageWrapper";

export default function MyPage() {
  const [posts, setPosts] = useState<BookPost[] | null>(null);

  useEffect(() => {
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
        setPosts([]);
      }
    });

    return () => unsub();
  }, []);

  if (posts === null) {
    return (
      <div className="h-screen flex items-center justify-center text-[var(--on-surface)]">
        Loading...
      </div>
    );
  }

  return (
    <PostPageWrapper
      posts={posts}
      screen="mypage"
      className="bg-[var(--surface)] text-[var(--on-surface)]"
    />
  );
}
