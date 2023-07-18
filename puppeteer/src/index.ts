import puppeteer from "puppeteer-core";

const cwd = process.cwd();

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    // executablePath: "google-chrome-stable",
    channel: "chrome",
  });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto("https://developer.chrome.com/");

  await page.screenshot({ path: cwd + "/tmp/screenshot.webp" });

  await browser.close();
})();
