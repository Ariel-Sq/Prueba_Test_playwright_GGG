import { test } from "@playwright/test";

test("MicrosoftLogin", async ({ page }) => {
  test.setTimeout(120000);
  await page.goto("https://www.microsoft.com");
  await page.getByPlaceholder("Correo electrónico, teléfono o Skype").click();
  await page
    .getByPlaceholder("Correo electrónico, teléfono o Skype")
    .fill("pepito@hotmail.com");
  await page.getByRole("button", { name: "Siguiente" }).click();
  await page.locator("#i0118").fill("1234");
  await page.getByRole("button", { name: "Iniciar sesión" }).click();
  await page.getByRole("button", { name: "No" }).click();
});
