# Lingo v2

Ứng dụng web học ngoại ngữ dành cho người Việt Nam. Repository sử dụng pnpm workspace với React/Vite cho frontend và NestJS cho backend.

## Yêu cầu

- Node.js 24 trở lên
- pnpm 12.14.0 qua Corepack
- Docker Desktop (để chạy PostgreSQL cục bộ)

## Bắt đầu

```bash
pnpm install
docker compose up -d postgres
pnpm dev
```

Web chạy tại `http://localhost:5173`. API health check chạy tại `http://localhost:3000/api/v1/health`.

## Kiểm tra chất lượng

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm format:check
```

## Cấu trúc

```text
apps/web   React, Vite, TypeScript
apps/api   NestJS, TypeScript
docs       Tài liệu sản phẩm và kiến trúc
```

Schema Prisma và migration đầu tiên sẽ được bổ sung sau khi schema Lingo cũ và ERD được đánh giá.
