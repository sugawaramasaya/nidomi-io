"use client";
import React from "react";
import Button from "@/components/Button";

interface VerifyEmailPageProps {
  email?: string;
  isVerified?: boolean;
  isLoading?: boolean;
  error?: string;
  success?: string;
  onResendEmail?: () => void;
  onContinue?: () => void;
}

const VerifyEmailPage: React.FC<VerifyEmailPageProps> = ({
  email = "user@example.com",
  isVerified = false,
  isLoading = false,
  error = "",
  success = "",
  onResendEmail,
  onContinue,
}) => {
  if (isVerified) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="w-full max-w-[480px] flex flex-col items-center p-[24px]">
          <div className="text-center">
            <div className="text-6xl mb-4">✅</div>
            <h1 className="text-2xl font-bold mb-4">メール認証完了！</h1>
            <p className="text-gray-600 mb-8">
              メールアドレスの認証が完了しました。
              <br />
              まもなくホーム画面に移動します。
            </p>
            {onContinue && (
              <Button variant="primary" onClick={onContinue}>
                ホーム画面に移動
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen overflow-y-hidden flex flex-col items-center">
      <div className="w-full max-w-[480px] flex flex-col items-center h-screen">
        <div className="flex flex-col w-full items-center flex-1 min-h-0 pb-[120px]">
          <div className="w-full p-[24px] flex flex-col gap-[48px]">
            <div className="text-center">
              <div className="text-6xl mb-4">📧</div>
              <h1 className="text-2xl font-bold mb-4">メール認証</h1>
              <p className="text-gray-600 mb-8">
                登録したメールアドレスに認証メールを送信しました。
                <br />
                メール内のリンクをクリックしてアカウントを有効化してください。
              </p>
              <p className="text-sm text-gray-500 mb-8">
                {email}
              </p>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-md">
                {error}
              </div>
            )}

            {success && (
              <div className="text-green-500 text-sm text-center bg-green-50 p-3 rounded-md">
                {success}
              </div>
            )}

            <div className="text-center">
              <p className="text-sm text-gray-500 mb-4">
                メールが届かない場合は、迷惑メールフォルダもご確認ください。
              </p>
              <Button
                variant="secondary"
                onClick={onResendEmail}
                disabled={isLoading}
              >
                {isLoading ? "送信中..." : "認証メールを再送信"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
