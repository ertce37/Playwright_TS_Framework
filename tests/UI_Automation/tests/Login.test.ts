import {test, expect} from '@playwright/test';
import { LoginPage } from '../Pages/LogInPage';

let  login:LoginPage; 
test.beforeEach(async ({page}) => {
    login = new LoginPage(page);
    await login.goto();
});
test('sign in with success',async({page}) =>{
    await login.signIn()
    expect(await page.title()).not.toBeNull()

})