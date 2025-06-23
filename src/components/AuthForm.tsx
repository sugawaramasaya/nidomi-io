// src/components/AuthForm.tsx
"use client";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import FixedBottomContainer from "@/components/FixedBottomContainer";

interface AuthFormProps {
  isLogin?: boolean;
  buttonLabel?: string;
  className?: string;
}

export default function AuthForm({
  isLogin = false,
  buttonLabel,
  className = "",
}: AuthFormProps) {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      /iPhone|Android.+Mobile/.test(navigator.userAgent)
    ) {
      emailRef.current?.focus();
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isFormValid = isEmailValid && password.length > 0;

  const label = buttonLabel || (isLogin ? "ログイン" : "新規登録");

  return (
    <div
      className={`h-screen overflow-y-hidden flex flex-col items-center ${className}`}
    >
      <div className="w-full max-w-[480px] flex flex-col items-center h-screen">
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
              type="password"
              value={password}
              onChange={setPassword}
              variant="password"
              autoComplete="new-password"
            />
          </div>
        </div>
        <FixedBottomContainer withKeyboardAware>
          <Button
            fullWidth
            variant="primary"
            disabled={!isFormValid}
            onClick={() => {
              if (isLogin) {
                // ログイン処理
                console.log("Logging in with email:", email);
                router.push("/home");
              } else {
                // 新規登録処理
                console.log("Registering with email:", email);
                router.push("/verify-code");
              }
            }}
          >
            {label}
          </Button>
        </FixedBottomContainer>
      </div>
    </div>
  );
}
