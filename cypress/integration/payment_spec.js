const { default: cy } = require("date-fns/esm/locale/cy/index.js");

describe("payment", () => {
  it("user can make payment", () => {
    // login
    cy.visit("/");
    // check account balance
    // click on pay button
    // search for user
    // add amount and note and click pay
    // return to transactions
    // go to personal payments
    // click on payment
    // verify if payment was made
    // verify if payment amount was deducted
  });
});
