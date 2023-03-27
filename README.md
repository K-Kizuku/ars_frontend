# ドキュメント
## 概要
### ファイル構成(3/27 5:40現在)
```
.
├── Dockerfile
├── README.md
├── dev.sh
├── docker-compose.yml
├── index.html
├── package.json
├── src
│   ├── app
│   │   ├── components
│   │   ├── libs
│   │   └── pages
│   │       └── home.ts
│   ├── framework
│   │   ├── core
│   │   │   ├── action.ts
│   │   │   ├── controller.ts
│   │   │   ├── index.ts
│   │   │   ├── types.ts
│   │   │   └── view.ts
│   │   ├── hooks
│   │   ├── index.ts
│   │   └── router
│   │       ├── index.ts
│   │       └── router.ts
│   └── index.ts
└── tsconfig.json
```
- `src/framework`はフレームワークのソースファイルがあるため基本的には触らない．バグ等があれば`K-Kizuku`までお知らせください
- `src/index.ts`も基本的には触らない．別でディレクトリを作ってフロントエンドの開発を進めてください
- フレームワークのimportは`@/framework`で行ってください．`@`が`src/*`のエイリアスになっています．  
  `例) import { App } from "@/framework";`
- 以下に推奨するディレクトリ構成を示します
```
.
── src
   ├── framework
   │   └── ... 
   ├──index.ts
   ├──app.ts
   └── app
       ├──pages
       ├──components
       └──libs
```
- `app.ts`に全ページで共通となる処理の記述を行います．
- `app/pages`には表示するページを記述するファイルを置きます．1ページ1ファイルです．
- `app/components`にはコンポーネントを記述するファイルを置きます．コンポーネントを組み合わせてページを構成します．
- `app/libs`には汎用性の高い関数等を記述するファイルを置きます．
### APIリファレンス
#### ルーティング
1. `PagesInfo`のオブジェクトを作成する．なお，`PagesInfo`は以下のようなtypeである．keyがpathで`例) /home`，valueが表示したいページのコンポーネントである．
```
type PagesInfo = {
  [path: string]: NodeType;
};
```
2. Appに引数として渡すviewの返り値の要素をラップするように`routerDOM()`を置く．なお，`routerDOM()`は1つの引数をとりその型は`PageInfo`である．ヘッダー，フッター等はこの中に含まないようにする．
3. 各ページに`Link()`コンポーネントを設置する.`Link()`コンポーネントは第一引数がLinkの子要素となるコンポーネント，第二引数がそのコンポーネントを押した際に遷移するページのパスである．

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
`dist`ディレクトリが作成されますが気にしなくて大丈夫です．逆に中身を変更したりしないでください．

### 本番環境
docker使います  
`docker-compose up -d`  
で実行  
`docker-compose down`  
で終了  
