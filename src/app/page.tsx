"use client";
import { redirect } from "next/navigation";

// ホーム（みんなの投稿）
export default function HomePage() {
  // ❌ 間違い
  // redirect("/(auth)/register");

  // ✅ 正しい
  redirect("/register");
}
