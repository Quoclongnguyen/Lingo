## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, use the installed graphify skill or instructions before doing anything else.

Rules:

- When graphify-out/graph.json exists, run `graphify query "<question>"` before your first grep, search or source-file read for a codebase question, and put this rule in every subagent prompt that explores code. Read raw files only for lines the graph or an earlier read already located. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
- A committed graphify-out/graph.json is rewritten whole on every build, so a large diff to it in a pull request is expected. Do not flag it as churn or suggest skipping the graph rebuild or its hooks.

## Lingo v2

- Monorepo pnpm: `apps/web` (React/Vite) và `apps/api` (NestJS).
- UI và nội dung learner phải dùng tiếng Việt.
- Giữ đúng stack và phạm vi milestone đã duyệt; không tự thêm nghiệp vụ.
- Không thay đổi Prisma schema/migration khi chưa được duyệt.
- Không tạo `packages/shared` cho đến khi có nhu cầu chia sẻ thực tế.

### Commands

- Dùng `cmd /c pnpm ...` trên Windows vì PowerShell chặn shim `.ps1`.
- `cmd /c pnpm dev`, `build`, `lint`, `typecheck`, `test`.
- API health: `GET /api/v1/health`; web mặc định: `http://localhost:5173`.

### Engineering rules

- TDD cho hành vi mới và bug fix.
- TanStack Query cho server state; Zustand chỉ cho client state dùng chung.
- Chỉ tạo NestJS module khi milestone có use case.
- Giữ API dưới `/api/v1`.
- Không in secrets hoặc commit `.env`.
- Sau thay đổi, chạy lint, typecheck, test và build phù hợp.
