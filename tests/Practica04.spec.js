const {test,expect} = require('@playwright/test');
const {LoginPage} = require('../pagesobjects/LoginPage');
const {DashboardPage} = require('../pagesobjects/DashboardPage');


test.only('Client App Login', async ({page})=>
{

    /*
    const productName = "ZARA COAT 3";
    const products = page.locator(".card-body");

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("practicando01@test.com");
    await page.locator("#userPassword").type("Abc12345");
    await page.locator("[value='Login']").click();
    //await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log("titles: "+ titles); 

    const count = await products.count();

    console.log("tamano: "+count); 
    for (let i= 0; i< count; i++) {

        if(await products.nth(i).locator("b").textContent() === productName )
        {
            products.nth(i).locator("text= Add To Cart").click();
            console.log("producto agregado"); 
            break;      
        }
    }

    await page.pause();

    */

    //**********************PAGE OBJECT**********************/

    const email = "practicando01@test.com";
    const password = "Abc12345";
    const productName = "ZARA COAT 3";

    const loginpage = new LoginPage(page);
    await loginpage.goUrl();
    await loginpage.validLogin(email, password);

    const dashboardpage = new DashboardPage(page);
    await dashboardpage.searchProductAddCart(productName);
    await dashboardpage.navigateToCart();
    await page.pause();
                

})
