FROM node:16-alpine AS builder

RUN apk add --no-cache git python3 make g++ && \
    npm install -g esbuild && \
    npm install -g http-server

WORKDIR /test

COPY package*.json ./
COPY . ./

RUN esbuild --bundle --minify --outdir=dist --watch ./src/**/*.ts


FROM node:16-alpine

WORKDIR /test

COPY --from=builder /test .

RUN npm install --only=production 

EXPOSE 8080

CMD ["npx", "http-server", "."]
