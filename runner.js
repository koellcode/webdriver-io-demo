import { remote } from "webdriverio";

import google from "./pages/google";
const pages = [google];

const options = {
  desiredCapabilities: {
    browserName: "chrome"
  }
};

export async function run() {
  for (const page of pages) {
    const browser = remote(options).init();
    const result = await page(browser);
    console.log(result);
  }
}
