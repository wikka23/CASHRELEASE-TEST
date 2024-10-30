const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 25000,
  env: {
    url: 'https://dev-cash-release.sunculture.io/',
    username: 'wincasty.kariuki@sunculture.com',
    password: 'B13ss3d@2024',
    loginMessage: 'Welcome to Petty Cash Management System',
    projectName: 'SunCulture'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
