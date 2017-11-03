import { remote } from "webdriverio";

import google from "./pages/google";
const pages = [google];

const options = {
  desiredCapabilities: {
    browserName: "chrome"
  }
};

export async function run() {
  for (const scrape of pages) {
    const browser = remote(options).init();
    const result = await scrape(browser);
    await browser.end();
    console.log(result);
  }
}
