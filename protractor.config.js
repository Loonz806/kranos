exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",
  specs: ["spec/todo-spec.js"],
  onPrepare() {
    browser.ignoreSynchronization = true;
  },
  multiCapabilities: [
    {
      browserName: "firefox"
    },
    {
      browserName: "chrome"
    }
  ]
};
