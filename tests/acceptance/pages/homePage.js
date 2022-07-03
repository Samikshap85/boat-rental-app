const { expect } = require('@playwright/test')

class HomePage {
    constructor() {
        //locators
        this.dateSelector = '#dateSelector';
        this.availabilityButton = '#availabilityButton';
        this.weatherStatus = '#weatherStatus';
    }

    async navigate() {
        await page.goto('http://localhost:3000');
    }

    // async addItemcheckTodoList(item) {
    //     await page.fill(this.todoInput, item);
    //     await page.click(this.todoButton);
    // }

    async checkWeather() {
        const text = await page.innerText(this.weatherStatus);
        expect(text).not.toHaveLength(0);
    }

    async selectDate() {
        await page.fill(this.dateSelector, "2022-08-01")
    }

    async checkDate() {
        const text = await page.inputValue(this.dateSelector);
        const today = new Date().toISOString().split("T")[0]
        expect(text).toBe(today);
    }

    async checkAvailability() {
        await page.click(this.availabilityButton)
    }
}

module.exports = { HomePage };