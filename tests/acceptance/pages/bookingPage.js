const { expect } = require('@playwright/test')

class BookingPage {
    constructor() {
        //locators

        this.packages = '#packages';
        this.name = '#name';
        this.contact = '#contact';
        this.ticket = '#ticket';
        this.bookingTime = '#time';
        this.submit = '#submit';

    }

    async checkPackagesExist() {
        const text = await page.innerText(this.packages);
        expect(text).not.toHaveLength(0);
    }

    async fillDetails() {
        await page.fill(this.name, "Samiksha");
        await page.fill(this.contact, "98000000");
        await page.fill(this.ticket, "3");
        await page.type(this.bookingTime, "03:21PM");
        await page.click(this.submit);
    }
}


module.exports = { BookingPage };