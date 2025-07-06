---
description: "安全な段階的リファクタリング実行"
allowed-tools: ["FileSystem", "Bash"]
---

# 段階的安全リファクタリング

$ARGUMENTSコンポーネントを docs/REFACTORING_GUIDE.md の4段階手順で安全にリファクタリングします。

## 事前確認
```bash
# 現在のファイル状況確認
find src -name "*${ARGUMENTS}*" -type f

# Git状態確認
git status
git stash push -m "refactor-${ARGUMENTS}-backup-$(date +%Y%m%d-%H%M%S)"
```

## Phase 1: 構造変更のみ（見た目保持）
**実行前スクリーンショット保存**
```bash
# Storybookでスクリーンショット取得
npm run storybook:screenshot ${ARGUMENTS}
```

**変更内容：**
- HTMLタグ構造の最適化
- classNameの整理（機能は変更しない）
- コンポーネント分割/統合

**変更禁止：**
- 色の変更
- サイズの変更
- 余白の変更
- 動作の変更

**完了確認：**
```bash
# 実装後スクリーンショット比較
npm run storybook:screenshot ${ARGUMENTS} -- --compare
```

## Phase 2: カラートークン更新
**対象トークン確認：**
```bash
# 現在使用中のカラー抽出
grep -r "text-\|bg-\|border-" src/components/${ARGUMENTS}/
```

**実行内容：**
- 旧カラートークン → 新カラートークンへ変更
- globals.css定義済みトークンのみ使用
- カラーパレットの統一

**変更例：**
```diff
- className="text-blue-600 bg-blue-50"
+ className="text-[var(--primary)] bg-[var(--primary-light)]"
```

**確認項目：**
- [ ] 色のみが変更されている
- [ ] レイアウトに影響なし
- [ ] 他コンポーネントとの色統一確認

## Phase 3: スペーシング最適化
**現在のスペーシング確認：**
```bash
# スペーシング系クラス抽出
grep -r "p-\|m-\|gap-\|space-" src/components/${ARGUMENTS}/
```

**実行内容：**
- padding/margin値の最適化
- --space-* トークンへの統一
- グリッドシステムとの整合性確保

**変更例：**
```diff
- className="px-4 py-2 gap-2"
+ className="px-[var(--space-16)] py-[var(--space-8)] gap-[var(--space-8)]"
```

## Phase 4: 最終統合確認
**包括的品質チェック：**
```bash
# TypeScript型チェック
npx tsc --noEmit

# ESLint/Prettier
npm run lint:fix

# ビルドテスト
npm run build

# Storybookビルドテスト
npm run build-storybook
```

**完了条件チェック：**
- [ ] Figmaデザインと1px単位で一致
- [ ] DESIGN_GUIDELINE.md完全準拠
- [ ] 他コンポーネントとの整合性確認
- [ ] アクセシビリティ問題なし
- [ ] パフォーマンス劣化なし

**最終報告：**
1. 変更サマリー
2. 使用トークン一覧
3. 改善されたポイント
4. 今後の改善提案
