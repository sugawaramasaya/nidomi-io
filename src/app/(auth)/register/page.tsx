import React, { useState } from "react";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import Image from "next/image";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // TODO: バリデーションや状態管理は後続で実装
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)]">
      <div className="w-full max-w-[480px] flex flex-col items-center px-4 pt-[60px] pb-8">
        {/* ロゴ */}
        <Image src="/nidomy/nidomy.png" alt="nidomi logo" width={64} height={64} className="mb-8" priority />
        {/* タイトル */}
        <h1 className="text-[28px] leading-[36px] font-bold text-[var(--on-surface)] mb-4">新規登録</h1>
        {/* 説明文 */}
        <p className="text-[16px] leading-[24px] text-[var(--on-surface-variant)] font-medium mb-8 text-center w-full">メールアドレスとパスワードで新規登録してください。</p>
        {/* メールアドレス */}
        <div className="w-full mb-4">
          <TextField
            label="メールアドレス"
            value={email}
            onChange={setEmail}
            placeholder="example@email.com"
            type="email"
            autoComplete="email"
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
          />
        </div>
        {/* 登録ボタン */}
        <Button fullWidth className="mb-4" type="submit">登録</Button>
        {/* Googleで登録ボタン */}
        <Button fullWidth variant="secondary" className="mb-8">Googleで登録</Button>
        {/* ログイン画面へのリンク */}
        <div className="w-full flex justify-center">
          <a href="/login" className="text-[var(--primary)] text-[16px] font-bold underline underline-offset-4">ログイン画面へ</a>
        </div>
      </div>
    </div>
  );
}
