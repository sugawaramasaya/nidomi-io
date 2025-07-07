// src/components/AuthForm.tsx
"use client";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import FixedBottomContainer from "@/components/FixedBottomContainer";
import { registerWithEmail, loginWithEmail } from "@/lib/firebase";

interface AuthFormProps {
  isLogin?: boolean;
  buttonLabel?: string;
}

export default function AuthForm({
  isLogin = false,
  buttonLabel,
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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isFormValid = isEmailValid && password.length >= 6;

  const label = buttonLabel || (isLogin ? "ログイン" : "新規登録");

  const handleSubmit = async () => {
    if (!isFormValid) return;

    setIsLoading(true);
    setError("");

    try {
      if (isLogin) {
        // ログイン処理
        const result = await loginWithEmail(email, password);
        if (result.success) {
          console.log("✅ ログイン成功:", result.user?.email);
          router.push("/home");
        } else {
          setError(getErrorMessage(result.code));
        }
      } else {
        // 新規登録処理
        const result = await registerWithEmail(email, password);
        if (result.success) {
          console.log("✅ 新規登録成功:", result.user?.email);
          // メール認証の確認ページに遷移
          router.push("/verify-email");
        } else {
          setError(getErrorMessage(result.code));
        }
      }
    } catch (error) {
      console.error("認証エラー:", error);
      setError("予期しないエラーが発生しました。しばらく後でお試しください。");
    } finally {
      setIsLoading(false);
    }
  };

  const getErrorMessage = (code: string | undefined) => {
    switch (code) {
      case "auth/email-already-in-use":
        return "このメールアドレスは既に使用されています。";
      case "auth/invalid-email":
        return "メールアドレスの形式が正しくありません。";
      case "auth/weak-password":
        return "パスワードは6文字以上で入力してください。";
      case "auth/user-not-found":
        return "このメールアドレスは登録されていません。";
      case "auth/wrong-password":
        return "パスワードが間違っています。";
      case "auth/invalid-credential":
        return "メールアドレスまたはパスワードが正しくありません。";
      default:
        return "エラーが発生しました。しばらく後でお試しください。";
    }
  };

  return (
    <div className="h-screen overflow-y-hidden flex flex-col items-center">
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
              disabled={isLoading}
            />
            <TextField
              label="パスワード"
              type="password"
              value={password}
              onChange={setPassword}
              variant="password"
              autoComplete={isLogin ? "current-password" : "new-password"}
              error={password.length > 0 && password.length < 6}
              errorMessage={
                password.length > 0 && password.length < 6
                  ? "パスワードは6文字以上で入力してください"
                  : ""
              }
              disabled={isLoading}
            />
            {error && (
              <div className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-md">
                {error}
              </div>
            )}
          </div>
        </div>
        <FixedBottomContainer withKeyboardAware>
          <Button
            fullWidth
            variant="primary"
            disabled={!isFormValid || isLoading}
            onClick={handleSubmit}
          >
            {isLoading ? "処理中..." : label}
          </Button>
        </FixedBottomContainer>
      </div>
    </div>
  );
}
