import test, { expect } from "@playwright/test";
import path from 'path';
import fs from "fs";

test("Uploadfiles",async({page})=>{
await page.goto('https://the-internet.herokuapp.com/upload')
await page.locator(".dz-hidden-input").setInputFiles(path.join(__dirname,'../../uploadfile/pic.jpeg'))
await expect(page.getByText("pic.jpeg")).toHaveText("pic.jpeg")

})


test("downloadfiles",async({page})=>{
await page.goto('https://the-internet.herokuapp.com/download')
const down= page.waitForEvent('download')
page.locator("//a[text()='file.json']").click()
const downloadfile= await down
await downloadfile.saveAs(path.join(__dirname, "../../uploadfile", downloadfile.suggestedFilename()))
await expect(fs.existsSync("C:\\Users\\hp\\Playwright 1\\uploadfile")).toBeTruthy()
})
