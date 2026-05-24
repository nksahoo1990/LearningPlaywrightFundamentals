import { test, expect } from '@playwright/test';

test('Verification of number of links', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const rows = page.locator("//table[@name='BookTable']/tbody/tr");
    const rowCount = await rows.count();

    // const rowsCount = await page.locator("//table[@name='BookTable']/tbody/tr").count();
    console.log(`Number of rows found: ${rowCount}`);

    // const columnsCount = await page.locator("//table[@name='BookTable']/tbody/tr[2]/td").count();
    // console.log(`Number of columns found: ${columnsCount}`);


    for (let i = 0; i < rowCount; i++) {
        const cells = rows.nth(i).locator('td');
        const cellCount = await cells.count();

        for (let j = 0; j < cellCount; j++) {
            const text = await cells.nth(j).textContent();
            //console.log(`Row ${i}, Col ${j}: ${text}`);
            if (text === 'Animesh') {
                console.log(`Found 'Animesh' in Row ${i}, Col ${j}`);
                console.log(`Course enrolled by 'Animesh' is :`, await cells.nth(j - 1).textContent());
            }
        }
    }



    // for (let i = 0; i < rowsCount; i++) {
    //     for (let j = 0; j <= columnsCount; j++) {
    //         const cellText = await page.locator("//table[@name='BookTable']/tbody/tr[i]/td[j]").textContent();
    //         if (cellText === 'Animesh') {
    //             console.log(`Found 'Animesh' in Row ${i}, Column ${j}`);
    //         }
    //     }
    // }

});

