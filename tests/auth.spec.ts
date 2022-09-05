import {expect} from "@playwright/test"
import {test} from '../fixtures/authFixture'

test.describe('Общие проверки', async()=>{

    test.beforeEach(async({authPage})=>{
        await authPage.page.goto('https://jpetstore.aspectran.com/account/signonForm')
    })
    test('Проверка урла страницы авторизации', async({authPage})=>{
        await expect(authPage.page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')
    })

    test('Элементы страницы авторизации', async({authPage})=>{
        await expect(authPage.username).toBeVisible()
        await expect(authPage.password).toBeVisible()
        await expect(authPage.loginButton).toBeVisible()
        await expect(authPage.loginButton).toHaveCSS('color','rgb(254, 254, 254)')
        await expect(authPage.loginButton).toHaveCSS('background-color','rgb(81, 97, 105)')
        await expect(authPage.panelRegister).toBeVisible()
    })

    test('Ввести валидные данные в поля username и password, нажать на Login → авторизация прошла', async({authPage})=>{
        await authPage.username.click()
        await authPage.username.press('Control+A')
        await authPage.username.press('Backspace')
        await authPage.username.type('Ilyas')
        await authPage.password.click()
        await authPage.password.press('Control+A')
        await authPage.password.press('Backspace')
        await authPage.password.type('1234')
        await authPage.loginButton.click()
        await expect(authPage.welcomeContent).toBeVisible()
        await expect(authPage.welcomeContent).toHaveText('Welcome Ilyas!')
    })

    test('Ввести невалидные данные в поля username и password, нажать на Login → ошибка, авторизация не прошла', async({authPage})=>{  
        await authPage.username.click()
        await authPage.username.press('Control+A')
        await authPage.username.press('Backspace')
        await authPage.username.type('Ilyas121212')
        await authPage.password.click()
        await authPage.password.press('Control+A')
        await authPage.password.press('Backspace')
        await authPage.password.type('1234121212')
        await authPage.loginButton.click()
        await expect(authPage.errorMessage).toBeVisible()
        await expect(authPage.errorMessage).toHaveText('Invalid username or password.  Signon failed.')
    })

    test('Ввести валидные данные в поле username, в password невалидные, нажать на Login → ошибка, авторизация не прошла', async({authPage})=>{ 
        await authPage.username.click()
        await authPage.username.press('Control+A')
        await authPage.username.press('Backspace')
        await authPage.username.type('Ilyas')
        await authPage.password.click()
        await authPage.password.press('Control+A')
        await authPage.password.press('Backspace')
        await authPage.password.type('1234121212')
        await authPage.loginButton.click()
        await expect(authPage.errorMessage).toBeVisible()
        await expect(authPage.errorMessage).toHaveText('Invalid username or password.  Signon failed.')
    })

    test('Ввести невалидные данные в поле username, в поле password валидные, нажать на Login → ошибка, авторизация не прошла', async({authPage})=>{
        await authPage.username.click()
        await authPage.username.press('Control+A')
        await authPage.username.press('Backspace')
        await authPage.username.type('Ilyas787878')
        await authPage.password.click()
        await authPage.password.press('Control+A')
        await authPage.password.press('Backspace')
        await authPage.password.type('1234')
        await authPage.loginButton.click()
        await expect(authPage.errorMessage).toBeVisible()
        await expect(authPage.errorMessage).toHaveText('Invalid username or password.  Signon failed.')
    })

    test('Не заполнять поля username и password, нажать на Login → ошибка, авторизация не прошла', async({authPage})=>{
        await authPage.username.click()
        await authPage.username.press('Control+A')
        await authPage.username.press('Backspace')
        await authPage.password.click()
        await authPage.password.press('Control+A')
        await authPage.password.press('Backspace')
        await authPage.loginButton.click()
        await expect(authPage.errorMessage).toBeVisible()
        await expect(authPage.errorMessage).toHaveText('Invalid username or password.  Signon failed.')
    })

    test('Ввести валидные данные в поле username и не заполнять поле password, нажать на Login → ошибка, авторизация не прошла', async({authPage})=>{
        await authPage.username.click()
        await authPage.username.press('Control+A')
        await authPage.username.press('Backspace')
        await authPage.username.type('Ilyas')
        await authPage.password.click()
        await authPage.password.press('Control+A')
        await authPage.password.press('Backspace')
        await authPage.loginButton.click()
        await expect(authPage.errorMessage).toBeVisible()
        await expect(authPage.errorMessage).toHaveText('Invalid username or password.  Signon failed.')
    })

    test('Не заполнять поле username и ввести валидные данные в поле password, нажать на Login → ошибка, авторизация не прошла', async({authPage})=>{
        await authPage.username.click()
        await authPage.username.press('Control+A')
        await authPage.username.press('Backspace')
        await authPage.password.click()
        await authPage.password.press('Control+A')
        await authPage.password.press('Backspace')
        await authPage.loginButton.click()
        await authPage.password.type('1234')
        await expect(authPage.errorMessage).toBeVisible()
        await expect(authPage.errorMessage).toHaveText('Invalid username or password.  Signon failed.')
    })
})