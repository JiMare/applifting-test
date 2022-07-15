import { Then, When } from "cypress-cucumber-preprocessor/steps";

When("I open the application", () => {
  cy.visit("/");
});

Then("I can see navbar with logo", () => {
  cy.url().should("contain", "applifting-exercise.netlify.app");
  cy.get("#navbar").should("be.visible");
});