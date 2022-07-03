const { Given, When, Then } = require('@cucumber/cucumber')

const { HomePage } = require('../pages/homepage');

const homePage = new HomePage();

Given('a user has navigated to the home page to check weather', async function () {
    await homePage.navigate()
});

Then('the weather should be displayed properly', async function () {
    await homePage.checkWeather()
});