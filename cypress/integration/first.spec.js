const cy = require("cypress");

describe("Form test", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it.only("Accepts input", () => {
    const typedText = "Han Solo";
    cy
      .get("#name")
      .type(typedText)
      .should("have.value", typedText);
  });
});
