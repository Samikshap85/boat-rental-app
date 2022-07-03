const { Given, When, Then } = require('@cucumber/cucumber');
const { _android } = require('@playwright/test');

const { HomePage } = require('../pages/homepage')
const { BookingPage } = require('../pages/bookingpage')
const homePage = new HomePage();
const bookingPage = new BookingPage();

Given('a user has navigated to the homepage to check availability', async function () {
    await homePage.navigate()
});

When('the user selects date to book a boat and click check availability', async function () {
    await homePage.selectDate()
    await homePage.checkAvailability()
});

Then('bookingpage should be displayed on the webUI along with the package information', async function () {
    await bookingPage.checkPackagesExist()
});