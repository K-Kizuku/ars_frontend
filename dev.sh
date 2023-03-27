cp -r -T ./public -t=./dist/  & 
esbuild --bundle --minify --outdir=dist --watch ./src/**/*.ts &
npx http-server .