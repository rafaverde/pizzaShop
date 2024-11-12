import { test, expect } from "@playwright/test";

test("display monthly revenue amount metrics", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("R$ 200,49")).toBeVisible();
  await expect(page.getByText("-1% em relação ao mês passado")).toBeVisible();
});

test("display monthly orders amount metrics", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("201", { exact: true })).toBeVisible();
  await expect(page.getByText("+10% em relação ao mês passado")).toBeVisible();
});

test("display daily orders amount metrics", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("20", { exact: true })).toBeVisible();
  await expect(page.getByText("-5% em relação a ontem")).toBeVisible();
});

test("display monthly canceled orders amount metrics", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByText("5", { exact: true })).toBeVisible();
  await expect(page.getByText("-10% em relação ao mês passado")).toBeVisible();
});
