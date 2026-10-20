# Lingo v2 - Architecture

## Kiến trúc tổng quan

Lingo v2 là modular monolith trong một pnpm workspace. Frontend và backend được triển khai độc lập nhưng dùng chung repository.

```text
Browser -> React/Vite -> REST /api/v1 -> NestJS -> Prisma -> PostgreSQL
```

## Workspace

```text
apps/
  web/    React, React Router, TanStack Query, Zustand, Tailwind CSS v4
  api/    NestJS, Prisma, adapter-pg, PostgreSQL
docs/     Product, architecture, decisions và roadmap
```

`packages/shared` chỉ được tạo khi xuất hiện nhu cầu chia sẻ code thực tế.

## Frontend

- Mobile-first cho Learner, desktop-first cho Admin.
- TanStack Query quản lý server state.
- Zustand chỉ dùng cho client state có phạm vi toàn ứng dụng.
- URL quản lý filter, pagination và state cần chia sẻ.
- Light mode mặc định; dark mode dựa trên theme của hệ thống trong Bootstrap.

## Backend

- REST API dưới `/api/v1`.
- Chỉ tạo module khi có use case trong milestone hiện tại.
- DTO chịu trách nhiệm validation tại API boundary.
- Prisma được sử dụng trực tiếp trong data-access layer, không thêm abstraction chung khi chưa cần.

## Dữ liệu

PostgreSQL chạy cục bộ qua Docker Compose. Schema nghiệp vụ và migration đầu tiên chưa được chốt; cần đánh giá schema/ERD của Lingo cũ trước.

## Kiểm thử

- Unit tests cho logic thuần và controller/service.
- Integration/E2E tests cho API boundary.
- Component tests cho trạng thái giao diện.
- Playwright dành cho các luồng quan trọng qua trình duyệt.
