import { test, expect } from "@playwright/test";
import { aw } from "vitest/dist/chunks/reporters.anwo7Y6a.js";

test("sign in successfully", async ({ page }) => {
  await page.goto("/signin", { waitUntil: "networkidle" });

  await page.getByLabel("Seu e-mail").fill("johndoe@example.com");

  await page.getByRole("button", { name: "Acessar Painel" }).click();

  const toast = page.getByText(
    "Enviamos um link de autenticação para seu email.",
  );

  expect(toast).toBeVisible();

  await page.waitForTimeout(1000);
});

test("sign in with wrong credentials", async ({ page }) => {
  await page.goto("/signin", { waitUntil: "networkidle" });

  await page.getByLabel("Seu e-mail").fill("wrong@example.com");

  await page.getByRole("button", { name: "Acessar Painel" }).click();

  const toast = page.getByText("Credenciais inválidas!");

  expect(toast).toBeVisible();

  await page.waitForTimeout(1000);
});

test("navigate to register restaurant page", async ({ page }) => {
  await page.goto("/signin", { waitUntil: "networkidle" });

  await page.getByRole("link", { name: "Novo estabelecimento" }).click();

  expect(page.url()).toContain("signup");
});
