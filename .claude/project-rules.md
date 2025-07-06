# nidomi.io プロジェクトルール

## 開発原則
1. 既存のドキュメントルールに従う
2. TypeScript strict mode準拠
3. カスタムデザイントークンのみ使用
4. アクセシビリティ(WCAG 2.1 AA)準拠
5. 段階的リファクタリング手順の遵守

## 禁止事項
- 任意の値（arbitrary values）の使用
- 標準Tailwindクラス（text-gray-500等）の使用
- globals.cssに未定義のカスタムプロパティ使用

## 必須チェック項目
- [ ] TypeScript型エラーなし
- [ ] ESLint/Prettier準拠
- [ ] テストカバレッジ80%以上
- [ ] Lighthouseスコア90以上
- [ ] アクセシビリティ違反なし
