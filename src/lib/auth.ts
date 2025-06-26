// src/lib/auth.ts
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt", // ← ✅ これがないとトークンが発行されないことがある！
  },
  callbacks: {
    async session({ session, token }) {
      session.user!.id = token.sub!; //「絶対ある」と TypeScript に伝える
      session.idToken = token.idToken; // idToken をセッションに追加
      return session;
    },
    async jwt({ token, account }) {
      // 👇 Googleログイン時に access_token を IDトークンとして保存
      if (account?.provider === "google") {
        token.idToken = account.id_token;
      }
      return token;
    },
  },
};
