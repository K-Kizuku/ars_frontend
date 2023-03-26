# ドキュメント
## 概要
### ファイル構成(3/27 0:57現在)
```
.
 ── src
    ├── framework
    │   ├── core
    │   │   ├── action.ts
    │   │   ├── controller.ts
    │   │   ├── index.ts
    │   │   ├── types.ts
    │   │   └── view.ts
    │   ├── index.ts
    │   └── router
    │       └── index.ts
    └── index.ts
```
- `src/framework`はフレームワークのソースファイルがあるため基本的には触らない．バグ等があれば`K-Kizuku`までお知らせください
- `src/index.ts`も基本的には触らない．別でディレクトリを作ってフロントエンドの開発を進めてください
- フレームワークのimportは`@/framework`で行ってください．`@`が`src/*`のエイリアスになっています．`例) import { App } from "@/framework";`
- 以下に推奨するディレクトリ構成を示します
```
.
── src
   ├── framework
   │   └── ... 
   ├──index.ts
   └── app
       ├──pages
       ├──components
       └──libs
```
- `app/pages`には表示するページを記述するファイルを置きます．1ページ1ファイルです．
- `app/components`にはコンポーネントを記述するファイルを置きます．コンポーネントを組み合わせてページを構成します．
- `app/libs`には汎用性の高い関数等を記述するファイルを置きます．
## 環境構築
### 開発環境
以下のコマンドを実行し必要なツールを揃える  
`npm install -g esbuild`  
`npm install -g http-server`  
その後rootで  
`source dev.sh`  
を実行すると`http://127.0.0.1:8080`にアクセスできるようになる  
**ホットリロードではないので注意**
キャッシュを削除してリロードすると変更が反映されているはずです．

### 本番環境
docker使います  
`docker-compose up -d`  
で実行  
`docker-compose down`  
で終了  
