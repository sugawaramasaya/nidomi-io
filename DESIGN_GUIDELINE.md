# 🎨 DESIGN_GUIDELINE.md

このドキュメントは、`nidomi.io` のデザイン実装における命名規則とルールのガイドラインです。 主に Tailwind CSS、Figma トークン、Storybook および開発中の共通スタイルに基づいています。

---

## 🎯 目的

- コンポーネントやスタイルの一貫性を保つ
- Figma → コード変換時のルール明示
- リファクタや共同開発を円滑に進める

---

## 🎨 カラー

- カラートークンは `globals.css` の `--color-name` を参照（例：`--on-surface`）
- Tailwind では次のように使用：

```tsx
text-[var(--on-surface)]
bg-[var(--surface)]
border-[var(--outline)]
```

- 特別に使用頻度の高いカラー（例：nidomi-blue）は `tailwind.config.js` に拡張し、次のように記述：

```tsx
text - nidomi - blue - 70;
```

---

## 📏 スペーシング / レイアウト

- スペーシングはすべて `globals.css` にある `--space-*` トークンを使用
- クラス例：

```tsx
gap-[var(--space-16)]
px-[var(--space-24)]
py-[var(--space-12)]
```

- ブレークポイントは `tailwind.config.js` の `screens` に合わせて `xs`（480px）をベースに構成

---

## 🅰️ タイポグラフィ

- タイポグラフィトークンは `globals.css` に定義された以下の変数を使用：

```css
--font-size-large
--line-height-large
--font-size-medium
--line-height-medium
--font-size-small
--line-height-small
```

- これらを活かしたカスタムユーティリティを `@layer utilities` で定義（例）：

```css
@layer utilities {
  .text-large {
    font-size: var(--font-size-large);
    line-height: var(--line-height-large);
  }
  .text-medium {
    font-size: var(--font-size-medium);
    line-height: var(--line-height-medium);
  }
  .text-small {
    font-size: var(--font-size-small);
    line-height: var(--line-height-small);
  }
}
```

> 📝 このユーティリティは `globals.css` に直接書くか、`src/styles/utilities.css` として分離して `tailwind.config.js` で読み込む想定です。

---

## 🧩 命名規則

### コンポーネント / ディレクトリ

- コンポーネント：`PascalCase`（例：`PostCard.tsx`, `UserProfile.tsx`）
- フックや関数系：`camelCase`（例：`useUploadImage.ts`, `formatDate.ts`）

### className

- Tailwind ユーティリティ + カスタム変数で構成：

```tsx
className = "text-[var(--on-surface)] bg-[var(--surface)] px-[var(--space-16)]";
```

- カスタムユーティリティ使用時：

```tsx
className = "text-medium text-nidomi-blue-70";
```

---

## 🧩 トークンとコンポーネント対応

| トークン         | 使用箇所           | 対応コンポーネント例               |
| ---------------- | ------------------ | ---------------------------------- |
| `--space-16`     | padding 左右       | Button, TextField, TagDeleteButton |
| `--radius-full`  | 角丸               | Button, IconButton, FAB            |
| `--on-surface`   | テキスト色         | TextField, Button, FollowButton    |
| `--outline`      | フォーカスボーダー | TextField, Switch                  |
| `--surface-tint` | 背景               | FAB, IconButton (fab variant)      |

---

## 📱 画面構成方針（抜粋）

| パス                  | 目的                 | 主なコンポーネント                         |
| --------------------- | -------------------- | ------------------------------------------ |
| `/mypage/post`        | 投稿作成画面         | TextField, Button, TagDeleteButton         |
| `/mypage`             | 自分の投稿一覧・削除 | CountIconButton, IconButton, Checkbox      |
| `/home`               | 全ユーザーの投稿一覧 | CountIconButton, CollectionCountIconButton |
| `/settings`           | ユーザー設定画面     | Switch, TextField, Button                  |
| `/login`, `/register` | 認証画面             | TextField, Button                          |

---

## ✅ 今後の方針

- 本ガイドラインは MVP フェーズ用に簡易版として運用
- 開発が安定したら Figma のスタイル名と連携した命名設計を本格導入予定

---

以上が `nidomi.io` におけるデザイン実装の基本方針です。 運用しながら随時アップデートしていきます ✨
