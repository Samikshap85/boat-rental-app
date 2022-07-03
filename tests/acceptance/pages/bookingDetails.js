const { expect } = require('@playwright/test')

class BookingDetails {
    constructor() {
        //locators

        this.successful = '#successful';
        this.name = '#bookingName';
        this.contact = '#bookingContact';
        this.ticketNo = '#ticketNo';
        this.bookingTime = '#bookingTime'
    }

    async checkBooking() {
        const name = await page.innerText(this.name);
        expect(name).toBe("Samiksha");
        const contact = await page.innerText(this.contact);
        expect(contact).toBe("98000000");
    }
}


module.exports = { BookingDetails };