"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import nidomy from "@/assets/nidomy/nidomy.png";
import LogoSvg from "@/assets/logo.svg";

export default function RegisterPage() {
  // 下部ブロックの高さ（Googleで登録〜ログイン＋40px）
  // Googleで登録: 56px, gap: 12+24=36px, メール登録: 56px, 注釈: 32px, ログイン: 56px, 下余白: 40px
  // 合計: 56+12+56+32+24+56+40 ≒ 276px（余裕を持って300pxでスペース確保）
  const bottomBlockHeight = 300;
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-surface font-['Noto_Sans_JP'] relative">
      <div
        className="w-full max-w-[480px] min-w-0 mx-auto flex flex-col items-center px-0 pt-0 pb-0 relative min-h-screen"
        style={{ width: "100%" }}
      >
        {/* ロゴ・nidomy画像を縦flexで並べる。下部ブロック分スペースを空ける */}
        <div className="flex flex-col w-full items-center justify-start flex-1 min-h-0 pb-[300px]">
          {/* ロゴ */}
          <div className="flex justify-center items-center w-full p-[24px] z-20 relative">
            <div
              className="w-full aspect-[100/18]"
              style={{ color: "var(--on-surface)" }}
            >
              <LogoSvg className="w-full h-full block" />
            </div>
          </div>
          {/* nidomy画像を中央配置（ロゴ下p-24含む）と下部ブロックの中央に配置 */}
          <div className="flex-1 flex items-center justify-center w-full">
            <div className="mx-auto max-w-[480px] aspect-square flex justify-center items-center w-full">
              <Image
                src={nidomy.src}
                alt="nidomy graphic"
                width={256}
                height={256}
                priority
                style={{ aspectRatio: "1 / 1" }}
              />
            </div>
          </div>
        </div>
        {/* メインフォーム＋ログインボタンを下部固定の1ブロックにまとめる */}
        <div
          className="w-full max-w-[480px] flex flex-col items-stretch gap-[24px] px-[16px] z-20"
          style={{
            position: "fixed",
            left: "50%",
            bottom: 0,
            transform: "translateX(-50%)",
            paddingBottom: 40,
            background: "var(--surface)",
          }}
        >
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
                  fontFamily: "var(--font-family-base)",
                  fontSize: "var(--font-size-medium)",
                  lineHeight: "var(--line-height-medium)",
                  fontWeight: "var(--font-weight-medium-bold)",
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
                  className="w-full text-center text-onSurfaceVariant"
                  style={{
                    fontFamily: "var(--font-family-base)",
                    fontSize: "var(--font-size-small)",
                    lineHeight: "var(--line-height-small)",
                    fontWeight: "var(--font-weight-small-bold)",
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
