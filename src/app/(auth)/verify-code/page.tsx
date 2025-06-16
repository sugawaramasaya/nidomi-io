"use client";
import React, { useState, useEffect } from "react";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import TextButton from "@/components/TextButton";

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
    <div className="h-screen overflow-y-hidden flex flex-col items-center">
      <div className="w-full max-w-[480px] flex flex-col items-center h-screen">
        {/* メッセージと確認コード入力 */}
        <div className="flex flex-col w-full p-[24px] gap-[48px] flex-1">
          {/* メッセージ */}
          <div
            className="text-left"
            style={{
              fontSize: "var(--font-size-large)",
              lineHeight: "var(--line-height-large)",
              fontWeight: "var(--font-weight-large-bold)",
              color: "var(--on-surface)",
            }}
          >
            新規登録メールを送信しました。
            <br />
            メールをご確認ください。
          </div>
          {/* 確認コード入力フィールド */}
          <TextField
            label="確認コード"
            value={code}
            onChange={setCode}
            helperText="届いたメールを確認し、メールに記載の6桁の確認コードを入力してください。"
          />
        </div>
        {/* 下部固定ボタン */}
        <div
          className="fixed left-1/2 bottom-0 -translate-x-1/2 w-full max-w-[480px] px-[16px] gap-[20px] z-20 flex flex-col"
          style={{ paddingBottom: isKeyboardOpen ? 16 : 40 }}
        >
          <Button
            fullWidth
            variant="primary"
            disabled={!isCodeValid}
            onClick={() => console.log("確認コード送信")}
          >
            確認コードを送信
          </Button>
          {!isKeyboardOpen && (
            <TextButton fullWidth variant="primary">
              すでにアカウントをお持ちの方
            </TextButton>
          )}
        </div>
      </div>
    </div>
  );
}
