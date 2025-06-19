// src/app/(me)/mypage/page.tsx

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { BookPost } from "@/types/bookPost";
import MyPageComponent from "@/components/MyPageComponent";

export default function MyPage() {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<BookPost[] | null>(null);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const q = query(
          collection(db, "posts"),
          where("userId", "==", currentUser.uid)
        );
        const querySnapshot = await getDocs(q);
        const fetchedPosts: BookPost[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<BookPost, "id">),
        }));
        setPosts(fetchedPosts);
      } else {
        router.push("/login");
      }
    });
  }, []);

  if (!user || posts === null) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return <MyPageComponent posts={posts} />;
}
