import { test, expect} from '@playwright/test';


test.describe('Урок 2', async()=>{

    test.beforeEach(async({page})=>{
        await page.goto('https://jpetstore.aspectran.com/account/signonForm')
    })
    test('Проверка урла страницы авторизации', async({page})=>{
        await expect(page).toHaveURL('https://jpetstore.aspectran.com/account/signonForm')
    })

    test('Элементы страницы авторизации', async({page})=>{
        const username = page.locator('[name="username"]')
        const password = page.locator('[name="password"]')
        const loginButton = page.locator('text=Login')
        const panelRegister = page.locator('[class="panel register"]')
        await expect(username).toBeVisible()
        await expect(password).toBeVisible()
        await expect(loginButton).toBeVisible()
        await expect(loginButton).toHaveCSS('color','rgb(254, 254, 254)')
        await expect(loginButton).toHaveCSS('background-color','rgb(81, 97, 105)')
        await expect(panelRegister).toBeVisible()
    })

    test('Ввести валидные данные в поля username и password, нажать на Login → авторизация прошла', async({page})=>{
        const username = page.locator('[name="username"]')
        const password = page.locator('[name="password"]')
        const loginButton = page.locator('text=Login')
        const welcomeContent = page.locator('[id="WelcomeContent"]')
        await username.click()
        await username.press('Control+A')
        await username.press('Backspace')
        await username.type('Ilyas')
        await password.click()
        await password.press('Control+A')
        await password.press('Backspace')
        await password.type('1234')
        await loginButton.click()
        await expect(welcomeContent).toBeVisible()
        await expect(welcomeContent).toHaveText('Welcome Ilyas!')
    })

    test('Ввести невалидные данные в поля username и password, нажать на Login → ошибка, авторизация не прошла', async({page})=>{
        const username = page.locator('[name="username"]')
        const password = page.locator('[name="password"]')
        const loginButton = page.locator('text=Login')
        const errorMessage = page.locator('[class="panel failed"]')
        await username.click()
        await username.press('Control+A')
        await username.press('Backspace')
        await username.type('Ilyas121212')
        await password.click()
        await password.press('Control+A')
        await password.press('Backspace')
        await password.type('1234121212')
        await loginButton.click()
        await expect(errorMessage).toBeVisible()
        await expect(errorMessage).toHaveText('Invalid username or password.  Signon failed.')
    })

    test('Ввести валидные данные в поле username, в password невалидные, нажать на Login → ошибка, авторизация не прошла', async({page})=>{
        const username = page.locator('[name="username"]')
        const password = page.locator('[name="password"]')
        const loginButton = page.locator('text=Login')
        const errorMessage = page.locator('[class="panel failed"]')
        await username.click()
        await username.press('Control+A')
        await username.press('Backspace')
        await username.type('Ilyas')
        await password.click()
        await password.press('Control+A')
        await password.press('Backspace')
        await password.type('1234121212')
        await loginButton.click()
        await expect(errorMessage).toBeVisible()
        await expect(errorMessage).toHaveText('Invalid username or password.  Signon failed.')
    })


    test('Ввести невалидные данные в поле username, в поле password валидные, нажать на Login → ошибка, авторизация не прошла', async({page})=>{
        const username = page.locator('[name="username"]')
        const password = page.locator('[name="password"]')
        const loginButton = page.locator('text=Login')
        const errorMessage = page.locator('[class="panel failed"]')
        await username.click()
        await username.press('Control+A')
        await username.press('Backspace')
        await username.type('Ilyas787878')
        await password.click()
        await password.press('Control+A')
        await password.press('Backspace')
        await password.type('1234')
        await loginButton.click()
        await expect(errorMessage).toBeVisible()
        await expect(errorMessage).toHaveText('Invalid username or password.  Signon failed.')
    })

    test('Не заполнять поля username и password, нажать на Login → ошибка, авторизация не прошла', async({page})=>{
        const username = page.locator('[name="username"]')
        const password = page.locator('[name="password"]')
        const loginButton = page.locator('text=Login')
        const errorMessage = page.locator('[class="panel failed"]')
        await username.click()
        await username.press('Control+A')
        await username.press('Backspace')
        await password.click()
        await password.press('Control+A')
        await password.press('Backspace')
        await loginButton.click()
        await expect(errorMessage).toBeVisible()
        await expect(errorMessage).toHaveText('Invalid username or password.  Signon failed.')
    })

    test('Ввести валидные данные в поле username и не заполнять поле password, нажать на Login → ошибка, авторизация не прошла', async({page})=>{
        const username = page.locator('[name="username"]')
        const password = page.locator('[name="password"]')
        const loginButton = page.locator('text=Login')
        const errorMessage = page.locator('[class="panel failed"]')
        await username.click()
        await username.press('Control+A')
        await username.press('Backspace')
        await username.type('Ilyas')
        await password.click()
        await password.press('Control+A')
        await password.press('Backspace')
        await loginButton.click()
        await expect(errorMessage).toBeVisible()
        await expect(errorMessage).toHaveText('Invalid username or password.  Signon failed.')
    })

    test('Не заполнять поле username и ввести валидные данные в поле password, нажать на Login → ошибка, авторизация не прошла', async({page})=>{
        const username = page.locator('[name="username"]')
        const password = page.locator('[name="password"]')
        const loginButton = page.locator('text=Login')
        const errorMessage = page.locator('[class="panel failed"]')
        await username.click()
        await username.press('Control+A')
        await username.press('Backspace')
        await password.click()
        await password.press('Control+A')
        await password.press('Backspace')
        await loginButton.click()
        await password.type('1234')
        await expect(errorMessage).toBeVisible()
        await expect(errorMessage).toHaveText('Invalid username or password.  Signon failed.')
    })
})

test.describe('Урок 3', async()=>{

    test('Кнопки навигации', async({page})=>{
        await page.goto('https://jpetstore.aspectran.com/catalog/')
        const fish = page.locator('text=Fish').nth(0)
        const dogs = page.locator('text=Dogs').nth(0)
        const reptiles = page.locator('text=Reptiles').nth(0)
        const cats = page.locator('text=Cats').nth(0)
        const birds = page.locator('text=Birds').nth(0)
        await expect(fish).toBeVisible()
        await expect(dogs).toBeVisible()
        await expect(reptiles).toBeVisible()
        await expect(cats).toBeVisible()
        await expect(birds).toBeVisible()
    })

    test('Тайтл бар и ссылки навигации', async({page})=>{
        await page.goto('https://jpetstore.aspectran.com/catalog/')
        const quiclinks = page.locator('#QuickLinks')
        const titleBar = page.locator('.grid-x').nth(0)
        await expect(quiclinks).toBeVisible()
        await expect(titleBar).toBeVisible()  
    })

    test('Доп фильтрация локаторов', async({page})=>{
        await page.goto('https://jpetstore.aspectran.com/account/signonForm')
        const loginButton = page.locator('[class="button"]', {hasText:'Login'})
        const panel = page.locator('#Signon', {has: page.locator('.panel')})
        await expect(loginButton).toBeVisible()
        await expect(panel).toBeVisible()  
        await page.goto('https://jpetstore.aspectran.com/catalog/')
        const header = page.locator('[id="Header"]>>[id="Menu"]')
        await expect(header).toBeVisible()
    })
})

test.describe('Урок 4', async()=>{

    test.beforeEach(async({page})=>{
        await page.goto('https://jpetstore.aspectran.com/account/signonForm')
        const username = page.locator('[name="username"]')
        const password = page.locator('[name="password"]')
        const loginButton = page.locator('text=Login')
        await username.click()
        await username.press('Control+A')
        await username.press('Backspace')
        await username.type('Ilyas')
        await password.click()
        await password.press('Control+A')
        await password.press('Backspace')
        await password.type('1234')
        await loginButton.click()
    })
    
    test('Цвета блока Pet Favorites -> отображаются корректно', async({page})=>{
        const title = page.locator('text=Pet Favorites')
        const infoText = page.locator('text=Shop for more of your favorite pets here.')
        const angelfish = page.locator('text=Angelfish')
        const tigerShark = page.locator('text=Tiger Shark')
        const koi = page.locator('text=Koi')
        const goldfish = page.locator('text=Goldfish')
        await expect(title).toHaveCSS('color', 'rgb(10, 10, 10)')
        await expect(title).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
        await expect(infoText).toHaveCSS('color', 'rgb(10, 10, 10)')
        await expect(infoText).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
        await expect(angelfish).toHaveCSS('color', 'rgb(0, 136, 204)')
        await expect(angelfish).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
        await expect(tigerShark).toHaveCSS('color', 'rgb(0, 136, 204)')
        await expect(tigerShark).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
        await expect(koi).toHaveCSS('color', 'rgb(0, 136, 204)')
        await expect(koi).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
        await expect(goldfish).toHaveCSS('color', 'rgb(0, 136, 204)')
        await expect(goldfish).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')   
    })

    test('Цвета блока навигации -> отображаются корректно', async({page})=>{
        const myOrders = page.locator('text=My Orders')
        const myAccount = page.locator('text=My Account')
        const signOut = page.locator('text=Sign Out')
        const questions = page.locator('text=?')
        await expect(myOrders).toHaveCSS('color', 'rgb(234, 172, 0)')
        await expect(myOrders).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
        await expect(myAccount).toHaveCSS('color', 'rgb(234, 172, 0)')
        await expect(myAccount).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
        await expect(signOut).toHaveCSS('color', 'rgb(234, 172, 0)')
        await expect(signOut).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
        await expect(questions).toHaveCSS('color', 'rgb(234, 172, 0)')
        await expect(questions).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
    })
})