"use client";
import React, { useState } from "react";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import nidomy from "@/assets/nidomy/nidomy.png";

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
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-surface font-['Noto_Sans_JP']">
      <div
        className="w-full max-w-[480px] min-w-0 mx-auto flex flex-col items-center px-0 pt-0 pb-0 relative"
        style={{ width: "100%" }}
      >
        {/* ロゴまわり */}
        <div className="flex flex-col justify-center items-center w-full p-[24px]">
          <div className="flex justify-center items-center w-[300px] h-[54px]">
            <Image
              src={logo}
              alt="nidomi logo"
              width={300}
              height={54}
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        {/* グラフィック画像まわり */}
        <div className="flex justify-center items-center w-full h-[418px] flex-shrink-0 self-stretch">
          <div
            className="flex justify-center items-center"
            style={{ width: 256, height: 256 }}
          >
            <Image
              src={nidomy}
              alt="nidomy graphic"
              width={256}
              height={256}
              priority
              style={{ aspectRatio: "1/1" }}
            />
          </div>
        </div>
        {/* メインフォーム領域 */}
        <div className="flex flex-col items-start gap-[12px] w-full self-stretch">
          {/* Googleで登録ボタンを囲うコンテナ */}
          <div className="flex flex-col items-start w-full self-stretch px-[16px]">
            <Button fullWidth variant="primary">
              Googleで登録
            </Button>
          </div>
          {/* Googleボタンとまたは・メール登録ボタン間 */}
          <div className="flex flex-col items-start w-full self-stretch gap-[12px]">
            {/* または */}
            <div className="flex flex-col items-center w-full self-stretch px-[24px]">
              <div className="w-full text-center text-onSurfaceVariant text-base font-bold font-['Noto_Sans_JP']">
                または
              </div>
            </div>
            {/* メールアドレス登録フォームと注釈を囲うコンテナ */}
            <div className="flex flex-col items-start w-full self-stretch gap-[12px] px-[16px]">
              <form
                className="flex flex-col gap-3 w-full"
                onSubmit={handleSubmit}
              >
                <Button
                  fullWidth
                  type="submit"
                  disabled={loading}
                  variant="primary"
                >
                  {loading ? "登録中..." : "メールアドレスで登録"}
                </Button>
                {/* 注釈を囲うコンテナ */}
                <div className="flex justify-center items-center w-full self-stretch px-[24px]">
                  <div className="w-full text-center text-[12px] leading-[18px] font-bold font-['Noto_Sans_JP'] text-onSurfaceVariant">
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
          </div>
          {/* ログインボタンを囲うコンテナ */}
          <div className="flex flex-col items-start w-full self-stretch px-[16px] pb-[40px]">
            <Button fullWidth variant="secondary">
              ログイン
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
