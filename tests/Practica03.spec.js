const {test,expect} = require('@playwright/test')

test.only('Browser Context PlayWright test', async ({page})=>
{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const userName = page.locator('#username');
    const userPwd = page.locator('[type="password"]');
    const dropdown = page.locator('select.form-control');
    await dropdown.selectOption('consult');
    await page.locator('.radiotextsty').last().click();
     await page.locator('#okayBtn').click();

    console.log( await page.locator('.radiotextsty').last().isChecked() );
    await expect( page.locator('.radiotextsty').last()).toBeChecked();


    await page.locator("#terms").click();
    await expect( page.locator("#terms") ).toBeChecked();
    await page.locator("#terms").uncheck();
    console.log( await page.locator("#terms").isChecked() );

    //await page.pause();



})
