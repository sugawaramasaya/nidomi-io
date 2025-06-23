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

  return (
    <div className="w-full max-w-[480px] mx-auto pb-[var(--space-112)]">
      {/* 戻るボタン */}
      <div className="fixed bottom-[var(--space-40)] left-[var(--space-16)] z-50 flex flex-col items-start gap-[var(--space-20)]">
        <FAB icon={<BackIcon />} onClick={() => router.back()} />
      </div>

      {/* ユーザー名 */}
      <div className="px-[var(--space-24)] py-[var(--space-16)] gap-[var(--space-4)] flex flex-col items-start">
        <div className="text-large">ユーザー名</div>
        <div className="text-medium text-[var(--on-surface-variant)]">
          sugawara
        </div>
      </div>
      <Divider />

      {/* メールアドレス */}
      <div className="px-[var(--space-24)] py-[var(--space-16)] gap-[var(--space-4)] flex flex-col items-start">
        <div className="text-large">メールアドレス</div>
        <div className="text-medium text-[var(--on-surface-variant)]">
          masaya.sugawara@gmail.com
        </div>
      </div>
      <Divider />

      {/* 通知 */}
      <div className="px-[var(--space-24)] py-[var(--space-16)] gap-[var(--space-4)] flex flex-col items-start">
        <div className="text-large">通知</div>
        <Switch
          checked={notificationsEnabled}
          onChange={setNotificationsEnabled}
        />
      </div>
      <Divider />

      {/* テーマ */}
      <div className="px-[var(--space-24)] py-[var(--space-16)] gap-[var(--space-4)] flex flex-col items-start">
        <div className="text-large">テーマ</div>
        <div className="text-medium text-[var(--on-surface-variant)]">
          システムデフォルト
        </div>
      </div>
      <Divider />

      {/* フォロー中 */}
      <div className="px-[var(--space-24)] py-[var(--space-16)]">
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "40px",
            textAlign: "center",
          }}
          className="text-large"
        >
          フォロー中
        </div>
      </div>
      <Divider />

      {/* フォロワー */}
      <div className="px-[var(--space-24)] py-[var(--space-16)]">
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "40px",
            textAlign: "center",
          }}
          className="text-large"
        >
          フォロワー
        </div>
      </div>
      <Divider />

      {/* ハート */}
      <div className="px-[var(--space-24)] py-[var(--space-16)]">
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "40px",
            textAlign: "center",
          }}
          className="text-large"
        >
          ハート
        </div>
      </div>
      <Divider />

      {/* プライバシーポリシー */}
      <div className="px-[var(--space-24)] py-[var(--space-16)]">
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "40px",
            textAlign: "center",
          }}
          className="text-large"
        >
          プライバシーポリシー
        </div>
      </div>
      <Divider />

      {/* 利用規約 */}
      <div className="px-[var(--space-24)] py-[var(--space-16)]">
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "40px",
            textAlign: "center",
          }}
          className="text-large"
        >
          利用規約
        </div>
      </div>
      <Divider />

      {/* ログアウト */}
      <div className="px-[var(--space-24)] py-[var(--space-16)]">
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "40px",
            textAlign: "center",
          }}
          className="text-large"
        >
          ログアウト
        </div>
      </div>
      <Divider />

      {/* アカウントを削除 */}
      <div className="px-[var(--space-24)] py-[var(--space-16)]">
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "40px",
            textAlign: "center",
          }}
          className="text-large"
        >
          アカウントを削除
        </div>
      </div>
      <Divider />
    </div>
  );
}
