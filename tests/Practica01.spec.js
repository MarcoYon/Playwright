//const {test,expect} = require('@playwright/test')
const {test,expect} = require('@playwright/test')


test('First PlayWright test', async function(){

    //-------------- PlayWright code --------------
})

test.only('Browser Context PlayWright test', async ({browser})=>
{

    
    const context= await browser.newContext();
    const page= await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());

    const userName = page.locator('#username');
    const userPwd = page.locator('[type="password"]');
    const signIn = page.locator('#signInBtn');
    await userName.fill('rahulshettyacademy');
    await userPwd.fill('learning');
    await signIn.click();

    //console.log( await page.locator('[style*="block"]').textContent());
    //await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    //console.log( await page.locator(".card-body a").textContent() );

    console.log( await page.locator(".card-body a").first().textContent() );
    console.log( await page.locator(".card-body a").nth(1).textContent() );

    const allTitles = await page.locator(".card-body a").allTextContents();
    console.log( allTitles );


})


test('Page PlayWright test', async ({page})=>
{
    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");


})
    

