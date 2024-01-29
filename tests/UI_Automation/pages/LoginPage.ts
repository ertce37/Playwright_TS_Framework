import { Locator,Page} from "@playwright/test";
import pkg from "../../../package.json";
export class LoginPage{
    readonly page : Page;
    readonly signInBtn : Locator;
    readonly usernameTxt : Locator;
    readonly passwordTxt : Locator;

    constructor(page : Page){   
        this.page = page;
        this.signInBtn = this.page.locator('.ng-tns-c176-5 ng-star-inserted');
        this.usernameTxt = this.page.locator('#email');
        this.passwordTxt = this.page.locator('#password');

    
}
async goto() {
    await this.page.goto(pkg.baseUrl);
  }
async signIn(username: string , password: string){
    await this.usernameTxt.fill(username)
    await this.passwordTxt.fill(password)
    //await this.signInBtn.click();
    await this.page.keyboard.press('Enter')
}
}