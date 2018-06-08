const webdriverio = require("webdriverio");

const options = {
  desiredCapabilities: {
    browserName: "firefox"
  }
};

webdriverio
  .remote(options)
  .init()
  .url("https://www.google.com")
  .getTitle()
  .then(title => {
    console.log(`Title was: ${title}`);
  })
  .end()
  .catch(err => {
    console.log(err);
  });
