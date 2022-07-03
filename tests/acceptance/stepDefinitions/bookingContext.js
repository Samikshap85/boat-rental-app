const { Given, When, Then } = require('@cucumber/cucumber')

const { BookingDetails } = require('../pages/bookingDetails');
const { BookingPage } = require('../pages/bookingpage');
const { HomePage } = require('../pages/homepage');

const bookingDetails = new BookingDetails()
const bookingPage = new BookingPage()
const homePage = new HomePage()

Given('a user has navigated to the home page to book a rental', async function () {
    await homePage.navigate()
});

When('a user click check availability and fill the booking page and click on submit button', async function () {
    await homePage.checkAvailability()
    await bookingPage.fillDetails()
});

Then('booking details page must be displayed', async function () {
    await bookingDetails.checkBooking()
});