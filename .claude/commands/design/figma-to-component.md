---
description: "FigmaデザインからTypeScriptコンポーネントを完全生成"
allowed-tools: ["figma", "FileSystem", "Bash"]
---

# Figma → React Component 完全変換

$ARGUMENTSコンポーネントを以下の完全な手順で実装してください：

## Phase 1: Figmaデザイン解析
1. **デザイントークン抽出**
   - カラー値 → globals.cssの--color-*変数と照合
   - スペーシング → --space-*変数と照合
   - タイポグラフィ → --font-size-*, --line-height-*と照合
   - ボーダーラジウス → --radius-*変数と照合

2. **コンポーネント構造分析**
   - Atomic Design原則での分類（Atom/Molecule/Organism）
   - Props設計（必須/オプション）
   - State管理の必要性判定
   - イベントハンドラー設計

## Phase 2: TypeScript実装
```typescript
// 生成するファイル構造
src/components/${ComponentName}/
├── ${ComponentName}.tsx       # メインコンポーネント
├── ${ComponentName}.types.ts  # 型定義
├── ${ComponentName}.module.css # カスタムスタイル（必要時）
└── index.ts                   # エクスポート
```

**実装要件：**
- TypeScript strict mode準拠
- Props型定義の完全性
- forwardRef対応（HTML要素の場合）
- アクセシビリティ属性の自動付与
- レスポンシブ対応

## Phase 3: Tailwind CSS実装
```tsx
// 必須実装パターン
const baseClasses = "基本レイアウト classes"
const variantClasses = {
  primary: "text-[var(--on-primary)] bg-[var(--primary)]",
  secondary: "text-[var(--on-secondary)] bg-[var(--secondary)]"
}
const sizeClasses = {
  sm: "px-[var(--space-12)] py-[var(--space-8)] text-small",
  md: "px-[var(--space-16)] py-[var(--space-12)] text-medium",
  lg: "px-[var(--space-24)] py-[var(--space-16)] text-large"
}
```

**禁止事項の厳守：**
- 任意の値（arbitrary values）の使用禁止
- 標準Tailwindクラス（text-gray-500等）の使用禁止
- globals.cssに未定義のカスタムプロパティ使用禁止

## Phase 4: Storybook統合
```typescript
// ${ComponentName}.stories.tsx の自動生成
export default {
  title: 'Components/${ComponentName}',
  component: ${ComponentName},
  parameters: {
    docs: { description: { component: 'コンポーネントの説明' } }
  },
  argTypes: { /* 全props対応 */ }
}

// 必須ストーリー
export const Default = {}
export const AllVariants = {}
export const Responsive = { parameters: { viewport: { viewports: INITIAL_VIEWPORTS } } }
export const Accessibility = { /* a11y addon対応 */ }
```

## Phase 5: 品質保証チェック
- [ ] TypeScript型エラーなし
- [ ] ESLint/Prettier準拠
- [ ] WCAG 2.1 AA準拠
- [ ] レスポンシブ対応確認
- [ ] Figmaデザインとの1px単位一致
- [ ] docs/AI_IMPLEMENTATION_RULES.md準拠

## 実行完了後の報告
実装完了後、以下を報告してください：
1. 生成されたファイル一覧
2. 使用したデザイントークン一覧
3. Props仕様書
4. 使用例コード
5. 発見された課題と改善提案
