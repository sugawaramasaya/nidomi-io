"use client";
import { redirect } from "next/navigation";

// ホーム（みんなの投稿）
export default function HomePage() {
  redirect("/(auth)/register");
}
