const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9ekjha',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: "Projeto do curso de Cypress",
      reportPageTitle: "Projeto do curso de Cypress"
    },
    baseUrl: 'https://automationpratice.com.br/',
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
