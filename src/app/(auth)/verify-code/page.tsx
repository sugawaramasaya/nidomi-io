"use client";
import React, { useState, useEffect } from "react";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import FixedBottomContainer from "@/components/FixedBottomContainer";

export default function VerifyCodePage() {
  const [code, setCode] = useState("");
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let initialHeight = window.innerHeight;
    const onResize = () => {
      setIsKeyboardOpen(window.innerHeight < initialHeight - 100);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isCodeValid = code.length === 6;

  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="w-full max-w-[480px] mx-auto flex flex-col items-center h-screen">
        {/* メッセージと確認コード入力 */}
        <div className="flex flex-col w-full p-[24px] gap-[48px] flex-1">
          {/* メッセージ */}
          <div
            className="text-left"
            style={{
              fontSize: "var(--font-size-large)",
              lineHeight: "var(--line-height-large)",
              fontWeight: "var(--font-weight-bold)",
              color: "var(--on-surface)",
            }}
          >
            新規登録メールを送信しました。
            <br />
            メール内の確認コードを入力してください。
          </div>
          {/* 確認コード入力 */}
          <TextField
            label="確認コード"
            value={code}
            onChange={setCode}
            maxLength={6}
            variant="default"
            autoComplete="off"
          />
        </div>
        {/* 下部固定のボタン */}
        <FixedBottomContainer className="px-[16px] gap-[24px] bg-white text-black">
          <Button variant="primary" fullWidth disabled={!isCodeValid}>
            確認
          </Button>
          <Button variant="text-secondary" fullWidth>
            コードを再送信
          </Button>
        </FixedBottomContainer>
      </div>
    </div>
  );
}
