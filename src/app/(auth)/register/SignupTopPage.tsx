"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import nidomy from "@/assets/nidomy/nidomy.png";
import LogoSvg from "@/assets/logo.svg";

export default function RegisterPage() {
  return (
    <div className="h-screen overflow-y-hidden flex flex-col items-center">
      <div className="w-full max-w-[480px] flex flex-col items-center h-screen">
        {/* ロゴ・nidomy画像を縦flexで並べる。下部ブロック分スペースを空ける */}
        <div className="flex flex-col w-full items-center flex-1 min-h-0 pb-[300px]">
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
        {/* メインフォーム＋ログインボタンを下部固定の1ブロックにまとめる */}
        <div className="w-full max-w-[480px] flex flex-col items-stretch gap-[24px] px-[16px] z-20 fixed left-1/2 bottom-0 -translate-x-1/2 pb-[40px]">
          {/* Googleで登録・または・メール登録（＋注釈）ブロック */}
          <div className="flex flex-col items-stretch w-full gap-[12px]">
            {/* Googleで登録ボタン */}
            <Button fullWidth variant="primary">
              Googleで登録
            </Button>
            {/* または */}
            <div className="flex justify-center items-center w-full px-[8px]">
              <div
                className="w-full text-center"
                style={{
                  fontSize: "var(--font-size-medium)",
                  fontWeight: "var(--font-weight-small-medium)",
                  lineHeight: "var(--line-height-medium)",
                  color: "var(--on-surface-variant)",
                }}
              >
                または
              </div>
            </div>
            {/* メールアドレス登録フォーム＋注釈 */}
            <form className="flex flex-col gap-[12px] w-full">
              <Button fullWidth type="submit" variant="primary">
                メールアドレスで登録
              </Button>
              {/* 注釈を囲うコンテナ */}
              <div className="flex justify-center items-center w-full px-[8px]">
                <div
                  className="w-full text-center"
                  style={{
                    fontSize: "var(--font-size-small)",
                    fontWeight: "var(--font-weight-small-bold)",
                    lineHeight: "var(--line-height-small)",
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
            </form>
          </div>
          {/* ログインボタン（下40スペース含む） */}
          <Button fullWidth variant="secondary">
            ログイン
          </Button>
        </div>
      </div>
    </div>
  );
}
