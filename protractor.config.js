exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",
  specs: ["spec/todo-spec.js"],
  multiCapabilities: [
    {
      browserName: "firefox"
    },
    {
      browserName: "chrome"
    }
  ]
};
