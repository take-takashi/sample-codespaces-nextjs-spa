# sample-codespaces-nextjs-spa

Codespaces を使って Next.js を用いた SPA 作成テスト

## dir setup

```
mkdir backend
mkdir document
mkdir frontend
mkdir infra
```

## frontend setup

```
cd frontend/
npx create-next-app nextapp --ts --use-npm
cd nextapp/
npm i -D prettier eslint-config-prettier
```

### 構築の参考

- [【2022 年】Next.js + TypeScript + ESLint + Prettier の構成でサクッと環境構築する](https://zenn.dev/hungry_goat/articles/b7ea123eeaaa44)
