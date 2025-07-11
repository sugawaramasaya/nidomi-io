#!/bin/bash

gh issue create --title "`pages/` ディレクトリごとの Storybook 整備" --body "カテゴリ: 開発・品質改善系\n\n内容: 各画面の「状態確認＋回帰チェック」に使える\n\n目的: このタスクはプロダクト改善に寄与します。"
gh issue create --title "PostPage / MyPage の E2E動作確認" --body "カテゴリ: 開発・品質改善系\n\n内容: 投稿作成〜表示〜削除まで手動で検証\n\n目的: このタスクはプロダクト改善に寄与します。"
gh issue create --title "投稿データのバリデーション追加" --body "カテゴリ: 開発・品質改善系\n\n内容: タイトル必須・画像1枚以上などのチェック\n\n目的: このタスクはプロダクト改善に寄与します。"
gh issue create --title "投稿成功後のフィードバック追加" --body "カテゴリ: 開発・品質改善系\n\n内容: `トースト`, `モーダル`, `ページ遷移` などUX向上\n\n目的: このタスクはプロダクト改善に寄与します。"
gh issue create --title "本番URLでのスマホUIテスト" --body "カテゴリ: 開発・品質改善系\n\n内容: iOS/Androidブラウザで確認する（Figmaとのズレ検出）\n\n目的: このタスクはプロダクト改善に寄与します。"
gh issue create --title "globals.css トークンの整理" --body "カテゴリ: 開発・品質改善系\n\n内容: 使われていないトークンの棚卸し・命名の一貫性\n\n目的: このタスクはプロダクト改善に寄与します。"
gh issue create --title "Figmaから状態別コンポーネント（Active/Disabled等）を取り込む" --body "カテゴリ: デザイン・表現強化\n\n内容: 実装側の状態管理をデザインと一致させやすくなる\n\n目的: このタスクはプロダクト改善に寄与します。"
gh issue create --title "空のマイページ／投稿0件時の UI を追加" --body "カテゴリ: デザイン・表現強化\n\n内容: 体験が「壊れてる」印象を避けるため\n\n目的: このタスクはプロダクト改善に寄与します。"
gh issue create --title "アニメーション表現を検討" --body "カテゴリ: デザイン・表現強化\n\n内容: 投稿追加時の小さなmotionなど（Framer Motion導入など）\n\n目的: このタスクはプロダクト改善に寄与します。"
gh issue create --title "タイポグラフィ階層の再チェック" --body "カテゴリ: デザイン・表現強化\n\n内容: h1/h2/pの意図が統一されているか確認\n\n目的: このタスクはプロダクト改善に寄与します。"
gh issue create --title "投稿一覧の表示順／レイアウト調整" --body "カテゴリ: デザイン・表現強化\n\n内容: 人気順・新着順やグリッド密度の見直し\n\n目的: このタスクはプロダクト改善に寄与します。"
gh issue create --title "投稿データの型定義を zod などで強化" --body "カテゴリ: 設計・構成改善\n\n内容: 型の安心感とバリデーションを両立\n\n目的: このタスクはプロダクト改善に寄与します。"
gh issue create --title "Firestoreのセキュリティルール再確認" --body "カテゴリ: 設計・構成改善\n\n内容: 書き込み制限／削除条件などを明示する\n\n目的: このタスクはプロダクト改善に寄与します。"
gh issue create --title "コンポーネント分離の再整理" --body "カテゴリ: 設計・構成改善\n\n内容: Button系・投稿系などのカテゴリで `/components/ui/`, `/components/post/` に分割するとスッキリ\n\n目的: このタスクはプロダクト改善に寄与します。"
gh issue create --title "ユーティリティクラスの整理" --body "カテゴリ: 設計・構成改善\n\n内容: `.text-medium` 等の適用漏れや冗長なスタイルの削除\n\n目的: このタスクはプロダクト改善に寄与します。"
gh issue create --title "GitHub Projects or Issues に切り替え" --body "カテゴリ: 成長・公開準備フェーズ\n\n内容: 開発ログと次のタスクを可視化する（今がタイミング）\n\n目的: このタスクはプロダクト改善に寄与します。"
gh issue create --title "README更新（機能・デモGIFなど）" --body "カテゴリ: 成長・公開準備フェーズ\n\n内容: 公開を意識したドキュメント整備\n\n目的: このタスクはプロダクト改善に寄与します。"
gh issue create --title "デモ動画撮影・投稿" --body "カテゴリ: 成長・公開準備フェーズ\n\n内容: SNSやプレゼン用に「使ってみた」動画素材があると便利\n\n目的: このタスクはプロダクト改善に寄与します。"
gh issue create --title "アクセスログや動線ヒートマップを計測できる仕組み" --body "カテゴリ: 成長・公開準備フェーズ\n\n内容: MVPユーザーの挙動観察が可能に（例：umami、Plausibleなど）\n\n目的: このタスクはプロダクト改善に寄与します。"
gh issue create --title "「お気に入りユーザー」表示機能の実装" --body "カテゴリ: 未来拡張・構想メモ\n\n内容: PostPageにボタンはあるのでその先をつくる\n\n目的: このタスクはプロダクト改善に寄与します。"
gh issue create --title "タグによるフィルタリング" --body "カテゴリ: 未来拡張・構想メモ\n\n内容: ZINE／写真集などで分類できるUXへ\n\n目的: このタスクはプロダクト改善に寄与します。"
gh issue create --title "投稿に「ひとこと」だけでなく外部リンク追加" --body "カテゴリ: 未来拡張・構想メモ\n\n内容: 自分のサイトやInstagramを貼りたいケース向け\n\n目的: このタスクはプロダクト改善に寄与します。"
gh issue create --title "多言語対応の検討" --body "カテゴリ: 未来拡張・構想メモ\n\n内容: 投稿自体は画像中心でも、UIは英語でも親和性が高い\n\n目的: このタスクはプロダクト改善に寄与します。"