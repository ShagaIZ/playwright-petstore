import { Page, Locator } from "@playwright/test"
import { AuthPage } from "./authPage"


export class CatalogPage extends AuthPage {
    readonly page: Page
    readonly logoFooter:Locator
    readonly about:Locator
    readonly infoText:Locator
    readonly getInvoled:Locator
    readonly gitHub:Locator
    readonly support:Locator
    readonly faq:Locator
    readonly contactUs: Locator
    readonly copyRight:Locator
    readonly version:Locator


    constructor(page:Page){
        super(page)
        this.page = page
        this.logoFooter = page.locator('[class="logo external"]')
        this.about = page.locator('text="About Aspectran"')
        this.infoText = page.locator('[class="medium-4 large-4 cell"]>>[href="https://aspectran.com/en/aspectran/"]').first()
        this.getInvoled = page.locator('text="Get Involved"')
        this.gitHub = page.locator('[href="https://github.com/aspectran"]')
        this.support = page.locator('text="Support"')
        this.faq = page.locator('[href="https://aspectran.com/en/support/faq/"]')
        this.contactUs = page.locator('[href="https://aspectran.com/en/support/contact/"]')
        this.copyRight = page.locator('[id="subfooter-left"]')
        this.version = page.locator('[id="subfooter-right"]>>[href="https://aspectran.com"]')

    }
}