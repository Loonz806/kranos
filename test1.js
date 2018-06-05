import { Selector } from "testcafe"; // first import testcafe selectors

fixture`Kranos`.page`http://0.0.0.0:3000`; // declare the fixture // specify the start page

// then create a test and place your code there
test("My first test", async t => {
  await t
    .typeText("#name", "John Smith")
    .click("#submit")

    // Use the assertion to check if the actual header text is equal to the expected one
    .expect(Selector("#greeting").innerText)
    .eql("Hello John Smith");
});
