// import your pageobject here

// define scraper flow here
export default async browser => {
  const page = browser.url("http://www.google.com");
  const title = await page.getTitle();
  await page.end();
  return { title };
};
