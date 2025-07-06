"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import FixedBottomContainer from "@/components/FixedBottomContainer";

export default function VerifyCodePage() {
  const [code, setCode] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const initialHeight = window.innerHeight;
    const onResize = () => {
      setIsKeyboardOpen(window.innerHeight < initialHeight - 100);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isCodeValid = code.length === 6;

  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="w-full max-w-[480px] mx-auto flex flex-col items-center">
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
            メールをご確認ください。
          </div>
          {/* 確認コード入力 */}
          <TextField
            label="確認コード"
            value={code}
            onChange={setCode}
            variant="default"
            autoComplete="off"
            helperText="届いたメールを確認し、メールに記載の6桁の確認コードを入力してください。"
            error={code.length > 0 && !isCodeValid}
          />
        </div>
      </div>
      {/* 下部固定のボタン */}
      <FixedBottomContainer>
        <Button
          variant="primary"
          fullWidth
          disabled={!isCodeValid}
          onClick={() => {
            if (isCodeValid) {
              console.log("Sending verification code:", code);
              router.push("/home");
            }
          }}
        >
          確認コードを送信
        </Button>
        <Button
          variant="text-secondary"
          fullWidth
          onClick={() => router.push("/login")}
        >
          すでにアカウントをお持ちの方
        </Button>
      </FixedBottomContainer>
    </div>
  );
}
