const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Configurar un tiempo de espera más largo si es necesario
  //page.setDefaultTimeout(150000);

  try {
    await page.goto("https://www.microsoft.com");
    console.log("login");
    await page.getByPlaceholder("Correo electrónico, teléfono o Skype").click();
    await page
      .getByPlaceholder("Correo electrónico, teléfono o Skype")
      .fill("pepito@hotmail.com");
    await page.getByRole("button", { name: "Siguiente" }).click();
    await page.locator("#i0118").fill("1234");
    console.log("contraseña");
    await page.getByRole("button", { name: "Iniciar sesión" }).click();
    console.log("inicio de sesion");
    await page.getByRole("button", { name: "No" }).click();
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await browser.close();
  }
})();
