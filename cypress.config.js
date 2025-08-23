const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      require("./cypress/support/reporter")(on);
    },
    specPattern: "cypress/e2e/**/*.cy.js",
    baseUrl: "http://localhost:4200",
    reporter: "mocha",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
    },
  },
};
