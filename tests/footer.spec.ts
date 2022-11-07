import { expect } from "@playwright/test"
import { test } from "../fixtures/catalogFixtures"


test.describe('Проверки футера католога', async()=>{

        test.beforeEach(async({catalogPage})=>{
            await catalogPage.page.goto('https://jpetstore.aspectran.com/account/signonForm')
            await catalogPage.typeUsername('Ilyas')
            await catalogPage.typePassword('1234')
            await catalogPage.clickLoginButton()
        })

        test('Элементы → отображаются корректно', async({catalogPage})=>{
            await expect(catalogPage.logoFooter).toBeVisible()
            await expect(catalogPage.about).toBeVisible()
            await expect(catalogPage.infoText).toBeVisible()
            await expect(catalogPage.getInvoled).toBeVisible()
            await expect(catalogPage.gitHub).toBeVisible()
            await expect(catalogPage.support).toBeVisible()
            await expect(catalogPage.faq).toBeVisible()
            await expect(catalogPage.contactUs).toBeVisible()
            await expect(catalogPage.copyRight).toBeVisible()
            await expect(catalogPage.version).toBeVisible()
        })

        test('Нажать на “About Aspectran” → открывается страница “About Aspectran”', async({catalogPage, context})=>{
            await catalogPage.about.click()
            const [newPage] = await Promise.all([
                context.waitForEvent('page')
            ])
            await expect(newPage).toHaveURL('https://aspectran.com/en/aspectran/')
        })

        test('Нажать на “GitHub” → открывается страница репозиторий “GitHub”', async({catalogPage, context})=>{
            await catalogPage.gitHub.click()
            const [newPage] = await Promise.all([
                context.waitForEvent('page')
            ])
            await expect(newPage).toHaveURL('https://github.com/aspectran')
        })


        test('Нажать на “FAQ” → открывается страница репозиторий “FAQ”', async({catalogPage, context})=>{
            await catalogPage.faq.click()
            const [newPage] = await Promise.all([
                context.waitForEvent('page')
            ])
            await expect(newPage).toHaveURL('https://aspectran.com/en/support/faq/')
        })

        test('Нажать на “Contact Us” → открывается страница репозиторий “Contact Us”', async({catalogPage, context})=>{
            await catalogPage.contactUs.click()
            const [newPage] = await Promise.all([
                context.waitForEvent('page')
            ])
            await expect(newPage).toHaveURL('https://aspectran.com/en/support/contact/')
        })

        test('Нажать на “Powered by Aspectran 7.0.11” → открывается страница репозиторий “Powered by Aspectran 7.0.11”', async({catalogPage, context})=>{
            await catalogPage.version.click()
            const [newPage] = await Promise.all([
                context.waitForEvent('page')
            ])
            await expect(newPage).toHaveURL('https://aspectran.com/')
        })
})
