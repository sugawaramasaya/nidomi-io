"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@/components/Button";
import nidomy from "@/assets/nidomy/nidomy.png";
import LogoSvg from "@/assets/logo.svg";

export default function SignupPage() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="w-full max-w-[480px] mx-auto flex flex-col items-center h-screen">
        {/* ロゴ・nidomy画像を縦flexで並べる。下部ブロック分スペースを空ける */}
        <div className="flex flex-col w-full items-center flex-1 min-h-0">
          {/* ロゴ */}
          <div className="w-full flex justify-center items-center pt-[24px] px-[24px] z-20">
            <div className="w-full aspect-[100/18]">
              <LogoSvg className="w-full h-full block" />
            </div>
          </div>
          {/* nidomy画像を中央配置 */}
          <div className="flex-1 flex items-center justify-center w-full">
            <div className="aspect-square flex justify-center items-center w-full">
              <Image
                src={nidomy.src}
                alt="nidomy graphic"
                width={256}
                height={256}
                priority
                className="aspect-square"
              />
            </div>
          </div>
        </div>
        {/* メインコンテンツ */}
        <div className="flex flex-col w-full px-[16px] pb-[40px] gap-[24px]">
          {/* メールアドレスで登録ボタンと注釈 */}
          <div className="flex flex-col gap-[12px]">
            {/* Googleで登録ボタン */}
            <Button
              fullWidth
              variant="primary"
              onClick={() => signIn("google", { callbackUrl: "/home" })}
            >
              Googleで登録
            </Button>
            <div
              className="text-center"
              style={{
                fontSize: "var(--font-size-medium)",
                lineHeight: "var(--line-height-medium)",
                fontWeight: "var(--font-weight-bold)",
                color: "var(--on-surface-variant)",
              }}
            >
              または
            </div>
            <div className="flex flex-col gap-[12px]">
              <Button
                fullWidth
                variant="primary"
                onClick={() => router.push("/register/email")}
              >
                メールアドレスで登録
              </Button>
              <div
                className="text-center px-[24px]"
                style={{
                  fontSize: "var(--font-size-small)",
                  lineHeight: "var(--line-height-small)",
                  fontWeight: "var(--font-weight-bold)",
                  color: "var(--on-surface-variant)",
                }}
              >
                <span>続行することで、</span>
                <a href="#" className="text-nidomi-blue-70 underline">
                  利用規約
                </a>
                <span>と</span>
                <a href="#" className="text-nidomi-blue-70 underline">
                  プライバシーポリシー
                </a>
                <span>（</span>
                <a href="#" className="text-nidomi-blue-70 underline">
                  Cookieの使用
                </a>
                <span>を含む）に同意したとみなされます。</span>
              </div>
            </div>
          </div>
          <Button
            fullWidth
            variant="secondary"
            onClick={() => router.push("/login")}
          >
            ログイン
          </Button>
        </div>
      </div>
    </div>
  );
}
