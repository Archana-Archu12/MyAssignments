import test from "@playwright/test";

test("To Open the Create a Lead application using basic Xpath",async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("//input[@id='username']").fill("Demosalesmanager")
    await page.locator("//input[@id='password']").fill("crmsfa")
    await page.locator("//input[contains(@class,'decorativeSubmi')]").click
    await page.locator("//a[text()='CRM/SFA']").click
    await page.locator("//a[text()='Leads']").click
    await page.locator("(//input[contains(@name,'companyNam')])[1]").fill("testleaf")
    await page.locator("(//input[contains(@name,'firstName')])[1]").fill("first")
    await page.locator("(//input[contains(@name,'lastName')])[1]").fill("last")
    await page.locator("//input[@id='ext-gen515']").fill("12")
    await page.locator("//input[@id='ext-gen519']").fill("123456789")
    await page.locator("(//input[@name='primaryEmail'])[1]").fill("archana@gmail.com")
    await page.locator("//button[text()='Create Lead']").click


})