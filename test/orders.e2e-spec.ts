import { test, expect } from "@playwright/test";

test("list orders", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  expect(
    page.getByRole("cell", { name: "Customer-1", exact: true }),
  ).toBeVisible();
  expect(
    page.getByRole("cell", { name: "Customer-10", exact: true }),
  ).toBeVisible();
});

test("paginate orders", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  //Next Page
  await page.getByRole("button", { name: "Próxima página" }).click();

  expect(
    page.getByRole("cell", { name: "Customer-11", exact: true }),
  ).toBeVisible();
  expect(
    page.getByRole("cell", { name: "Customer-20", exact: true }),
  ).toBeVisible();

  //Last Page
  await page.getByRole("button", { name: "Última página" }).click();

  expect(
    page.getByRole("cell", { name: "Customer-51", exact: true }),
  ).toBeVisible();
  expect(
    page.getByRole("cell", { name: "Customer-60", exact: true }),
  ).toBeVisible();

  //Previous Page
  await page.getByRole("button", { name: "Página anterior" }).click();

  expect(
    page.getByRole("cell", { name: "Customer-41", exact: true }),
  ).toBeVisible();
  expect(
    page.getByRole("cell", { name: "Customer-50", exact: true }),
  ).toBeVisible();

  //First Page
  await page.getByRole("button", { name: "Primeira página" }).click();

  expect(
    page.getByRole("cell", { name: "Customer-1", exact: true }),
  ).toBeVisible();
  expect(
    page.getByRole("cell", { name: "Customer-10", exact: true }),
  ).toBeVisible();
});

test("filter by order id", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByPlaceholder("Id do pedido").fill("order-11");
  await page.getByRole("button", { name: "Filtrar" }).click();

  expect(page.getByRole("cell", { name: "order-11" })).toBeVisible();
  await page.waitForTimeout(200);
});

test("filter by customer name", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByPlaceholder("Nome do cliente").fill("Customer-11");
  await page.getByRole("button", { name: "Filtrar" }).click();

  expect(page.getByRole("cell", { name: "Customer-11" })).toBeVisible();
  await page.waitForTimeout(250);
});

test("filter by status", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByRole("combobox").click();
  await page.getByLabel("Pendente").click();
  await page.getByRole("button", { name: "Filtrar" }).click();

  const pendingTableRows = await page
    .getByRole("cell", { name: "Pendente" })
    .all();

  expect(pendingTableRows).toHaveLength(10);

  await page.waitForTimeout(250);
});
