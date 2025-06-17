"use client";
import React from "react";
import Button from "@/components/Button";
import FixedBottomContainer from "@/components/FixedBottomContainer";

export default function SignupPage() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="w-full max-w-[480px] mx-auto flex flex-col items-center h-screen">
        {/* メインコンテンツ */}
        <div className="flex flex-col w-full p-[24px] gap-[24px] flex-1">
          {/* Googleで登録ボタン */}
          <Button fullWidth variant="primary">
            Googleで登録
          </Button>
          {/* メールアドレスで登録ボタンと注釈 */}
          <div className="flex flex-col gap-[12px]">
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
              <Button fullWidth variant="primary">
                メールアドレスで登録
              </Button>
              <div
                className="text-center px-[24px]"
                style={{
                  fontSize: "var(--font-size-small)",
                  lineHeight: "var(--line-height-small)",
                  fontWeight: "var(--font-weight-bold)",
                  color: "var(--on-surface)",
                }}
              >
                続行することで、利用規約とプライバシーポリシー（Cookieの使用を含む）に同意したとみなされます。
              </div>
            </div>
          </div>
        </div>
        {/* 下部固定のログインボタン */}
        <FixedBottomContainer className="px-[16px] gap-[24px] bg-white text-black">
          <Button fullWidth variant="secondary">
            ログイン
          </Button>
        </FixedBottomContainer>
      </div>
    </div>
  );
}
