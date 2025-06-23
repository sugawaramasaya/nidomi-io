// app/settings/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Divider from "@/components/Divider";
import Switch from "@/components/Switch";
import FAB from "@/components/FAB";
import BackIcon from "@/icons/size40/back.svg";

export default function SettingsPage() {
  const router = useRouter();
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const textLargeStyle = {
    fontSize: "var(--font-size-large)",
    lineHeight: "var(--line-height-large)",
    fontWeight: "var(--font-weight-bold)",
    color: "var(--on-surface)",
  };

  const textMediumStyle = {
    fontSize: "var(--font-size-medium)",
    lineHeight: "var(--line-height-medium)",
    fontWeight: "var(--font-weight-bold)",
    color: "var(--on-surface-variant)",
  };

  return (
    <div className="w-full max-w-[480px] mx-auto pb-[112px]">
      {/* 戻るボタン */}
      <div className="fixed bottom-[40px] left-[16px] z-50 flex flex-col items-start space-y-[20px]">
        <FAB icon={<BackIcon />} onClick={() => router.back()} />
      </div>

      {/* ユーザー名 */}
      <div className="px-[24px] py-[16px] gap-[4px] flex flex-col items-start">
        <div style={textLargeStyle}>ユーザー名</div>
        <div style={textMediumStyle}>sugawara</div>
      </div>
      <Divider />

      {/* メールアドレス */}
      <div className="px-[24px] py-[16px] gap-[4px] flex flex-col items-start">
        <div style={textLargeStyle}>メールアドレス</div>
        <div style={textMediumStyle}>masaya.sugawara@gmail.com</div>
      </div>
      <Divider />

      {/* 通知 */}
      <div className="flex items-center justify-between px-[24px] py-[16px] gap-[4px]">
        <div>
          <div style={textLargeStyle}>通知</div>
          <div style={textMediumStyle}>アプリからの通知</div>
        </div>
        <Switch
          checked={notificationsEnabled}
          onChange={setNotificationsEnabled}
        />
      </div>
      <Divider />

      {/* テーマ */}
      <div className="px-[24px] py-[16px] gap-[4px] flex flex-col items-start">
        <div style={textLargeStyle}>テーマ</div>
        <div style={textMediumStyle}>システムデフォルト</div>
      </div>
      <Divider />

      {/* フォロー中 */}
      <div className="px-[24px] py-[16px]">
        <div
          style={{
            ...textLargeStyle,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "40px",
            textAlign: "center",
          }}
        >
          フォロー中
        </div>
      </div>
      <Divider />

      {/* フォロワー */}
      <div className="px-[24px] py-[16px]">
        <div
          style={{
            ...textLargeStyle,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "40px",
            textAlign: "center",
          }}
        >
          フォロワー
        </div>
      </div>
      <Divider />

      {/* ハート */}
      <div className="px-[24px] py-[16px]">
        <div
          style={{
            ...textLargeStyle,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "40px",
            textAlign: "center",
          }}
        >
          ハート
        </div>
      </div>
      <Divider />

      {/* プライバシーポリシー */}
      <div className="px-[24px] py-[16px]">
        <div
          style={{
            ...textLargeStyle,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "40px",
            textAlign: "center",
          }}
        >
          プライバシーポリシー
        </div>
      </div>
      <Divider />

      {/* 利用規約 */}
      <div className="px-[24px] py-[16px]">
        <div
          style={{
            ...textLargeStyle,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "40px",
            textAlign: "center",
          }}
        >
          利用規約
        </div>
      </div>
      <Divider />

      {/* ログアウト */}
      <div className="px-[24px] py-[16px]">
        <div
          style={{
            ...textLargeStyle,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "40px",
            textAlign: "center",
          }}
        >
          ログアウト
        </div>
      </div>
      <Divider />

      {/* アカウントを削除 */}
      <div className="px-[24px] py-[16px]">
        <div
          style={{
            ...textLargeStyle,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "40px",
            textAlign: "center",
          }}
        >
          アカウントを削除
        </div>
      </div>
      <Divider />
    </div>
  );
}
