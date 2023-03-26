# 環境構築
## 開発環境
以下のコマンドを実行し必要なツールを揃える  
`npm install -g esbuild`  
`npm install -g http-server`  
その後rootで  
`source dev.sh`  
を実行すると`http://127.0.0.1:8080`にアクセスできるようになる  
**ホットリロードではないので注意**

## 本番環境
docker使います  
`docker-compose up -d`  
で実行  
`docker-compose down`  
で終了  
