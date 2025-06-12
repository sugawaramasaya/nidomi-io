"use client";
import React, { useState } from "react";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import Image from "next/image";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!email) return "メールアドレスを入力してください";
    if (!/^[\w\-.]+@[\w\-.]+\.[a-zA-Z]{2,}$/.test(email))
      return "メールアドレスの形式が正しくありません";
    if (!password) return "パスワードを入力してください";
    if (password.length < 8) return "パスワードは8文字以上で入力してください";
    if (password !== confirmPassword) return "パスワードが一致しません";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setError(null);
    setLoading(true);
    // ここでAPIリクエストを実装
    setTimeout(() => {
      setLoading(false);
      // 成功時の処理
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)]">
      <div className="w-full max-w-[480px] flex flex-col items-center px-4 pt-[60px] pb-8">
        {/* ロゴ */}
        <Image
          src="/nidomy/nidomy.png"
          alt="nidomi logo"
          width={64}
          height={64}
          className="mb-8"
          priority
        />
        {/* タイトル */}
        <h1 className="text-[28px] leading-[36px] font-bold text-[var(--on-surface)] mb-4">
          新規登録
        </h1>
        {/* 説明文 */}
        <p className="text-[16px] leading-[24px] text-[var(--on-surface-variant)] font-medium mb-8 text-center w-full">
          メールアドレスとパスワードでアカウントを作成します。
        </p>
        <form className="w-full" onSubmit={handleSubmit}>
          {/* メールアドレス */}
          <div className="w-full mb-4">
            <TextField
              label="メールアドレス"
              value={email}
              onChange={setEmail}
              placeholder="example@email.com"
              type="email"
              error={!!error && error.includes("メールアドレス")}
              errorMessage={
                error && error.includes("メールアドレス") ? error : undefined
              }
            />
          </div>
          {/* パスワード */}
          <div className="w-full mb-4">
            <TextField
              label="パスワード"
              value={password}
              onChange={setPassword}
              type="password"
              variant="password"
              autoComplete="new-password"
              error={
                !!error &&
                error.includes("パスワード") &&
                !error.includes("一致")
              }
              errorMessage={
                error && error.includes("パスワード") && !error.includes("一致")
                  ? error
                  : undefined
              }
            />
          </div>
          {/* パスワード確認 */}
          <div className="w-full mb-8">
            <TextField
              label="パスワード（確認）"
              value={confirmPassword}
              onChange={setConfirmPassword}
              type="password"
              variant="password"
              autoComplete="new-password"
              error={!!error && error.includes("一致")}
              errorMessage={error && error.includes("一致") ? error : undefined}
            />
          </div>
          {/* 登録ボタン */}
          <Button fullWidth className="mb-4" type="submit" disabled={loading}>
            {loading ? "登録中..." : "登録"}
          </Button>
        </form>
        {/* Googleで登録ボタン */}
        <Button fullWidth variant="secondary" className="mb-8">
          Googleで登録
        </Button>
        {/* ログイン画面へのリンク */}
        <div className="w-full flex justify-center">
          <a
            href="/login"
            className="text-[var(--primary)] text-[16px] font-bold underline underline-offset-4"
          >
            ログインはこちら
          </a>
        </div>
      </div>
    </div>
  );
}
