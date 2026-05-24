import { type Locator, type Page } from '@playwright/test';

export class TtacartCheckoutPage {
    readonly page: Page;
    readonly textboxFirstName: Locator;
    readonly textboxLastName: Locator;
    readonly textboxZipPostalCode: Locator;
    readonly buttonContinue: Locator;

    constructor(page: Page) {
        this.page = page;
        this.textboxFirstName = page.getByRole("textbox", { name: "First Name" }).or(page.getByTestId("firstName")).or(page.locator("#first-name"));
        this.textboxLastName = page.getByRole("textbox", { name: "Last Name" }).or(page.getByTestId("lastName")).or(page.locator("#last-name"));
        this.textboxZipPostalCode = page.getByRole("textbox", { name: "Zip/Postal Code" }).or(page.getByTestId("postalCode")).or(page.locator("#postal-code"));
        this.buttonContinue = page.getByRole("button", { name: "Continue" }).or(page.getByTestId("continue")).or(page.locator("#continue-btn"));
    }

    async fillCheckoutPage() {
        await this.textboxFirstName.fill("Nitya Krushna");
        await this.textboxLastName.fill("Sahoo");
        await this.textboxZipPostalCode.fill("560012");
        await this.buttonContinue.click();
    }


}