import Page from "./page";

// define scraper flow here
export default async browser => {
  const page = new Page(browser);
  const title = await page.title();
  return { title };
};
