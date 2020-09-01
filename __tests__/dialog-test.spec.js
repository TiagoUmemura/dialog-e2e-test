const clickDivByText = async (page, text) => {
  const linkHandlers = await page.$x(`//div[contains(text(), ${text})]`);

  if (linkHandlers.length > 0) {
    await linkHandlers[0].click();
  } else {
    throw new Error(`Div not found: ${text}`);
  }
};

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
    await clickDivByText(page, "PEPapp");
    await page.waitForFunction(
      'document.querySelector("body").innerText.includes("PEPapp - PepsiCo")'
    );
    expect(page.url()).toContain("br.com.eusoupepsico");
    await page.waitForXPath('//div[@jsname="xBmnf"]', { visible: false });
  });
});
