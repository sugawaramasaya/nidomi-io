// ✅ src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth"; // ← 共通化した設定を読み込む

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
