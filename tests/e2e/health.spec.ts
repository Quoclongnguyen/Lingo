import { expect, test } from "@playwright/test";

test("web app reports a healthy API connection", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Trạng thái phát triển" }),
  ).toBeVisible();
  await expect(page.getByText("Hệ thống đang hoạt động")).toBeVisible();
});
