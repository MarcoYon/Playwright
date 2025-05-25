const {test,expect} = require('@playwright/test');
const {POManager} = require('../pagesobjects/POManager');
//const {LoginPage} = require('../pagesobjects/LoginPage');
//const {DashboardPage} = require('../pagesobjects/DashboardPage');


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

    const poManager = new POManager(page);

    const email = "practicando01@test.com";
    const password = "Abc12345";
    const productName = "ZARA COAT 3";

    const loginpage = poManager.getLoginPage();
    await loginpage.goUrl();
    await loginpage.validLogin(email, password);

    const dashboardpage = poManager.getDashboardPage();
    await dashboardpage.searchProductAddCart(productName);
    await dashboardpage.navigateToCart();

    //----------------- Agregando al  Carrito de Compras (Sin Page object)
    await page.locator("div li").first().waitFor(); //espera hasta que se muestre el elemento, en este caso los productos

    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible(); //isVisible no tiene espera automatica
    expect(bool).toBeTruthy();

    await page.locator("text=Checkout").click();
    await page.locator("[placeholder*='Country']").pressSequentially("ind");
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    const optionsSelect = await dropdown.locator("button").count();

    for (let i = 0; i< optionsSelect; i++) {
        const text = await dropdown.locator("button").nth(i).textContent();

        if(text.trim() === "India") 
        {
            await dropdown.locator("button").nth(i).click();
        }

    }

    //----------------- Agregando al  Carrito de Compras - END




    await page.pause();
                

})
