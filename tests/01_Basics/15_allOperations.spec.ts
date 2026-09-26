import { test, expect } from '@playwright/test';

test('Verify all operations', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/practice#page");

    // To enter value into textbox
    await page.getByRole('textbox', { name: 'First name' }).fill('Nitya');
    await page.getByRole('textbox', { name: 'Last name' }).fill('Krushna');

    // to read value from textbox
    const preFilledFirstName = await page.getByRole('textbox', { name: 'First name' }).inputValue();
    console.log("Pre-filled First Name:", preFilledFirstName);

    // to check a radio button is selected or not.
    const maleRadioButton = await page.getByTestId('gender-male').isChecked();
    console.log("Male RadioButton is checked:", maleRadioButton);

    // select a radio button
    await page.getByTestId('gender-male').click();

    // to check a checkbox is selected or not.
    await expect(page.getByTestId('gender-male'), 'Male RadioButton is not checked').toBeChecked();

    // select an option from dropdown
    await page.getByTestId('years-experience').selectOption('4');

    // to check a checkbox is selected or not.
    const protractorCheckbox = await page.getByRole('checkbox', { name: 'Protractor' }).isChecked();
    console.log("Protractor Checkbox is checked:", protractorCheckbox);

    //check a checkbox
    await page.getByRole('checkbox', { name: 'Protractor' }).check();

    // to check a checkbox is selected or not.
    await expect(page.getByRole('checkbox', { name: 'Protractor' }), 'Protractor Checkbox is not checked').toBeChecked();

    // upload a file.
    await page.getByTestId('upload-image').setInputFiles('C:/Users/Nitya Krushna Sahoo/OneDrive/Desktop/IMG_2789.jpg');

    // to check if the uploaded file name is displayed correctly.
    await expect(page.locator('#upload-file-name'), 'Uploaded file name is not displayed').toHaveText('IMG_2789.jpg');



});
