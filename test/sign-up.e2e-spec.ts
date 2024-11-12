import { test, expect } from "@playwright/test";

test("sign up successfully and if click on toast button login, redirects with email filled", async ({
  page,
}) => {
  await page.goto("/signup", { waitUntil: "networkidle" });

  await page.getByLabel("Nome do estabelecimento").fill("Pizza Shop");
  await page.getByLabel("Seu nome").fill("John Doe");
  await page.getByLabel("Seu e-mail").fill("johndoe@example.com");
  await page.getByLabel("Seu celular").fill("(99) 99999-9999");

  const toast = page.getByText("Restaurante cadastrado com sucesso!");

  await page.getByRole("button", { name: "Finalizar cadastro" }).click();

  await expect(toast).toBeVisible();

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.url()).toContain("signin?email=johndoe@example.com");
});

test("sign up error", async ({ page }) => {
  await page.goto("/signup", { waitUntil: "networkidle" });

  await page.getByLabel("Nome do estabelecimento").fill("Any Invalid Name");
  await page.getByLabel("Seu nome").fill("John Doe");
  await page.getByLabel("Seu e-mail").fill("johndoe@example.com");
  await page.getByLabel("Seu celular").fill("(99) 99999-9999");

  const toast = page.getByText(
    "Erro ao cadastrar o restaurante, tente novamente mais tarde.",
  );

  await page.getByRole("button", { name: "Finalizar cadastro" }).click();

  await expect(toast).toBeVisible();
});

test("navigate to sign in page", async ({ page }) => {
  await page.goto("/signup", { waitUntil: "networkidle" });

  await page.getByRole("link", { name: "Já tem conta? Faça login." }).click();

  expect(page.url()).toContain("signin");
});
