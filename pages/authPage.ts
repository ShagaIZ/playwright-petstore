import {Locator, Page} from '@playwright/test'

export class AuthPage {
    readonly page:Page
    readonly username: Locator
    readonly password:Locator
    readonly loginButton: Locator
    readonly panelRegister: Locator
    readonly welcomeContent: Locator
    readonly errorMessage: Locator
    
    constructor(page:Page){
         this.page = page
         this.username = page.locator('[name="username"]')
         this.password = page.locator('[name="password"]')
         this.loginButton = page.locator('text=Login')
         this.panelRegister = page.locator('[class="panel register"]')
         this.welcomeContent = page.locator('[id="WelcomeContent"]')
         this.errorMessage = page.locator('[class="panel failed"]')
    }

    async clickUsernameField(){
        await this.username.click()
    }

    async clearAndTypeUsernameField(username:string){
        await this.username.press('Control+A')
        await this.username.press('Backspace')
        await this.username.type(username)
    }

    async clickPasswordField(){
        await this.password.click()
    }

    async clearAndTypePasswordField(password:string){
        await this.password.press('Control+A')
        await this.password.press('Backspace')
        await this.password.type(password)
    }
    
    async typeUsername(username: string){
        await this.clickUsernameField()
        await  this.clearAndTypeUsernameField(username)
    }

    async typePassword(password:string){
        await this.clickPasswordField()
       await  this.clearAndTypePasswordField(password)
    }

    async clickLoginButton(){
        await this.loginButton.click()
    }
}