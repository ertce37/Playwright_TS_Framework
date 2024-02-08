import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import dotenv from 'dotenv';
dotenv.config;

let  login:LoginPage; 
test.beforeEach(async ({page}) => {
    login = new LoginPage(page);
    await login.goto();
});
// test('sign in with success',async({page}) =>{
//     await login.signIn(process.env.USERNAME as string, process.env.PASSWORD as string)
//     expect(await page.title()).not.toBeNull()

// })

test("verify left bar tab names",async({page})=>{
    const barMenuNames = []
    await login.signIn("cgrbtl8991@gmail.com","Ertce82@")
    await page.waitForTimeout(3000)

    const barMenus = page.locator('#fuse-vertical-navigation-item-wrapper')

    await page.waitForTimeout(3000)
   
    expect(await barMenus.allTextContents).toEqual(barMenuNames)
})