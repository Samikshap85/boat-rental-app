const { Given, When, Then } = require('@cucumber/cucumber')

const { HomePage } = require('../pages/homepage');

const homePage = new HomePage();

Given('a user has navigated to the home page to select date', async function () {
    await homePage.navigate()
});

Then('date selector should have default value', async function () {
    await homePage.checkDate()
});