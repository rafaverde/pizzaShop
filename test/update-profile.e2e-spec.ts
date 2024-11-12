import { test, expect } from "@playwright/test";

test("update profile successfully", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "John Doe's Pizza" }).click();
  await page.getByRole("menuitem", { name: "Perfil da loja" }).click();

  await page.getByLabel("Nome").fill("Valverde's Pizza");
  await page.getByLabel("Descrição").fill("E2E Test Description");

  await page.getByRole("button", { name: "Salvar" }).click();
  await page.waitForLoadState("networkidle");

  const toast = page.getByText("Perfil atualizado com sucesso!");
  await expect(toast).toBeVisible();

  await page.getByRole("button", { name: "Close" }).click();

  await expect(
    page.getByRole("button", { name: "Valverde's Pizza" }),
  ).toBeVisible();
});

test("update profile with error", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "John Doe's Pizza" }).click();
  await page.getByRole("menuitem", { name: "Perfil da loja" }).click();

  await page.getByLabel("Nome").fill("Any Invalid Name");
  await page.getByLabel("Descrição").fill("E2E Test Description");

  await page.getByRole("button", { name: "Salvar" }).click();
  await page.waitForLoadState("networkidle");

  const toast = page.getByText("Falha ao atualizar perfil, tente novamente.");

  await expect(toast).toBeVisible();
});
