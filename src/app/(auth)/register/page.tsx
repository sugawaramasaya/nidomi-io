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
    <div className="h-screen flex flex-col justify-between bg-[var(--surface)] text-[var(--on-surface)]">
      <div className="w-full max-w-[480px] mx-auto flex flex-col items-center h-screen">
        {/* ロゴ・nidomy画像を縦flexで並べる。下部ブロック分スペースを空ける */}
        <div className="flex flex-col w-full items-center flex-1 min-h-0">
          {/* ロゴ */}
          <div className="w-full flex justify-center items-center pt-[var(--space-24)] px-[var(--space-24)] z-20">
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
        <div className="flex flex-col w-full px-[var(--space-16)] pb-[var(--space-40)] gap-[var(--space-24)]">
          {/* メールアドレスで登録ボタンと注釈 */}
          <div className="flex flex-col gap-[var(--space-12)]">
            {/* Googleで登録ボタン */}
            <Button
              fullWidth
              variant="primary"
              onClick={() => signIn("google", { callbackUrl: "/home" })}
            >
              Googleで登録
            </Button>
            <div className="text-[var(--on-surface-variant)] text-small text-center">
              Googleアカウントを使用して登録します。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
