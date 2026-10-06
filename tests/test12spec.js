import { test, expect } from "@playwright/test";

test("Testataan tehtävän 1 tyylit", async ({ page }) => {
  await page.goto(`file://${process.cwd()}/index.html`);
  await page.setViewportSize({ width: 1000, height: 1000 });

  let e =  page.locator('h1');

  expect(e).toHaveText(/basic/);

});