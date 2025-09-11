const {test, expect} = require("@playwright/test");

test.describe('new', () => {
    test('new', async ({ page }) => {
        console.log("Hello cathy");
    })
});