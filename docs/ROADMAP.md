# Lingo v2 - Roadmap

## Milestone 0 - Bootstrap

- [x] Khởi tạo Git và pnpm workspace.
- [x] Scaffold React/Vite và NestJS.
- [x] Cấu hình Docker Compose cho PostgreSQL.
- [x] API health check và frontend health page.
- [x] Thiết lập lint, format, unit/component/E2E test cơ bản.
- [ ] Đánh giá schema và ERD cũ.
- [ ] Tạo Prisma schema và migration đầu tiên.
- [ ] Chạy PostgreSQL cục bộ bằng Docker Desktop.
- [x] Hoàn thiện AGENTS.md.

## Milestone 1 - Identity & Curriculum Foundation

- Email/password với Argon2.
- Access token ngắn hạn và refresh token trong HttpOnly cookie.
- Tự đăng ký học viên; seed tài khoản Admin.
- Language -> Level -> Course -> Lesson -> Activity.

## Milestone 2 - Vocabulary

- Hoạt động học từ vựng.
- Từ đã học và từ đã lưu.
- Tìm kiếm và lọc cơ bản.

## Milestone 3 - Grammar & Quiz

- Nội dung ngữ pháp.
- Bài tập thực hành và quiz.
- Chấm điểm và lưu kết quả.

## Milestone 4 - Review & Progress

- Deterministic spaced review.
- Từ đến hạn ôn.
- Lịch sử, streak và tiến độ.

## Milestone 5 - Admin MVP

- CRUD và sắp xếp nội dung.
- Preview, publish và archive.
- Media metadata và danh sách học viên.

## Milestone 6 - Hardening & Release

- Accessibility và responsive QA.
- Security review, E2E và backup.
- Chọn và cấu hình production deployment.
