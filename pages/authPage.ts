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
}