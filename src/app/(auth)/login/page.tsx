"use client";
import { useRef, useEffect, useState } from "react";
import TextField, { TextFieldProps } from "@/components/TextField";
import Button from "@/components/Button";

export default function LoginPage() {
  const emailRef = useRef<HTMLInputElement>(null);

  // モバイル端末で遷移時にメールアドレスに自動フォーカス
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      /iPhone|Android.+Mobile/.test(navigator.userAgent)
    ) {
      emailRef.current?.focus();
    }
  }, []);

  // ソフトウェアキーボード表示判定
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isFormValid = isEmailValid && password.length > 0;

  return (
    <div className="h-screen overflow-y-hidden flex flex-col items-center">
      <div className="w-full max-w-[480px] flex flex-col items-center h-screen">
        {/* 入力フォーム */}
        <div className="flex flex-col w-full items-center flex-1 min-h-0 pb-[120px]">
          <div className="w-full p-[24px] flex flex-col gap-[48px]">
            <TextField
              label="メールアドレス"
              type="email"
              value={email}
              onChange={setEmail}
              inputRef={emailRef}
              autoComplete="email"
              error={!emailFocused && email.length > 0 && !isEmailValid}
              errorMessage={
                !emailFocused && email.length > 0 && !isEmailValid
                  ? "入力内容をご確認ください"
                  : ""
              }
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
            />
            <TextField
              label="パスワード"
              variant="password"
              type="password"
              value={password}
              onChange={setPassword}
              autoComplete="new-password"
            />
          </div>
        </div>
        {/* 下部固定ボタン */}
        <div
          className="fixed left-1/2 bottom-0 -translate-x-1/2 w-full max-w-[480px] px-[16px] z-20"
          style={{
            paddingBottom: isKeyboardOpen ? 16 : 40,
            background: "var(--background, #fff)",
          }}
        >
          <Button fullWidth variant="primary" disabled={!isFormValid}>
            新規登録
          </Button>
        </div>
      </div>
    </div>
  );
}
