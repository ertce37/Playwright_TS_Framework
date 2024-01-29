import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import dotenv from 'dotenv';
dotenv.config;

let  login:LoginPage; 
test.beforeEach(async ({page}) => {
    login = new LoginPage(page);
    await login.goto();
});
test('sign in with success',async({page}) =>{
    await login.signIn(process.env.USERNAME as string, process.env.PASSWORD as string)
    expect(await page.title()).not.toBeNull()

})