const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  let profileUrl = 'https://github.com/otterai'; // Apna GitHub Profile

  for (let i = 0; i < 100; i++) { // 100 views bhejenge
    await page.goto(profileUrl, { waitUntil: 'networkidle2' });
    console.log(`View ${i + 1} sent`);
  }

  await browser.close();
})();
