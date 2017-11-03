import { remote } from "webdriverio";

const options = {
  desiredCapabilities: {
    browserName: "chrome"
  }
};

remote(options)
  .init()
  .url("http://www.google.com")
  .getTitle()
  .then(title => {
    console.log(`Title was: ${title}`);
  })
  .end();
