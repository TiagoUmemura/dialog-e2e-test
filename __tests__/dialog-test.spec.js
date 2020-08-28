describe("Dialog e2e", () => {
  beforeAll(async () => {
    await page.goto("https://play.google.com/");
  });

  it('should click "Pepsco" text on page', async () => {
    await page.type("#gbqfq", "pepapp");
    await page.click("#gbqfb");
    await page.waitForFunction(
      'document.querySelector("body").innerText.includes("PEPapp - PepsiCo")'
    );
    await page.click(
      'document.querySelector("body").innerText.includes("PEPapp - PepsiCo")'
    );
  });
});
