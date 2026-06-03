# 顔ルーレット

「目」「眉」「口」をランダムに組み合わせて、お絵描きのお題を生成するWebアプリ。

**公開URL**: https://kyoruni.github.io/kao-roulette/

## 使い方

「回す」ボタンを押すと、3つのパーツがランダムに選ばれる。出たお題を元に顔のイラストを描いて遊ぶ。

## 開発

```bash
npm install
npm run dev      # 開発サーバ起動 (http://localhost:5173/)
npm run build    # 本番ビルド (型チェック + dist 生成)
npm run preview  # 本番ビルドのプレビュー
```

## 技術スタック

- [Vite](https://vite.dev/) — ビルドツール
- TypeScript — ロジックを型付きで実装
- GitHub Pages — ホスティング (`main` への push で自動デプロイ)
