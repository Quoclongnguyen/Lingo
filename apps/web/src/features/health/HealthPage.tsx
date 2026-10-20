import { useQuery } from "@tanstack/react-query";
import { getHealth } from "./health.api";

export function HealthPage() {
  const health = useQuery({ queryKey: ["health"], queryFn: getHealth });
  const status = health.isPending
    ? "Đang kiểm tra kết nối"
    : health.isError
      ? "Không thể kết nối API"
      : "Hệ thống đang hoạt động";

  return (
    <main className="min-h-svh bg-surface px-4 py-8 text-primary sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-3xl items-center">
        <section
          aria-labelledby="health-title"
          className="w-full border-y border-default py-8 sm:py-12"
        >
          <p className="mb-3 text-sm font-semibold text-brand">Lingo v2</p>
          <h1 id="health-title" className="text-3xl font-bold sm:text-4xl">
            Trạng thái phát triển
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-secondary">
            Trang kiểm tra kết nối giữa ứng dụng web và API trong môi trường
            phát triển cục bộ.
          </p>
          <div className="mt-8 flex items-start gap-4 border border-default bg-panel p-4 sm:p-5">
            <span
              aria-hidden="true"
              className={`mt-1 size-3 shrink-0 rounded-full ${health.isPending ? "bg-warning" : health.isError ? "bg-danger" : "bg-success"}`}
            />
            <div>
              <h2 className="text-base font-semibold">API Lingo</h2>
              <p
                className="mt-1 text-sm text-secondary"
                role="status"
                aria-live="polite"
              >
                {status}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
