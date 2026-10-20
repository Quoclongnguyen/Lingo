import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { HealthPage } from "./HealthPage";

function renderHealthPage() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });

  return render(
    <QueryClientProvider client={queryClient}>
      <HealthPage />
    </QueryClientProvider>,
  );
}

describe("HealthPage", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("shows a loading status while checking the API", () => {
    vi.spyOn(globalThis, "fetch").mockImplementation(
      () => new Promise(() => undefined),
    );

    renderHealthPage();

    expect(screen.getByText("Đang kiểm tra kết nối")).toBeInTheDocument();
  });

  it("shows that the API is available", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ status: "ok", service: "lingo-api" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    );

    renderHealthPage();

    expect(
      await screen.findByText("Hệ thống đang hoạt động"),
    ).toBeInTheDocument();
    expect(screen.getByText("API Lingo")).toBeInTheDocument();
  });

  it("shows an error status when the API is unavailable", async () => {
    vi.spyOn(globalThis, "fetch").mockRejectedValue(new Error("Network error"));

    renderHealthPage();

    expect(
      await screen.findByText("Không thể kết nối API"),
    ).toBeInTheDocument();
  });
});
