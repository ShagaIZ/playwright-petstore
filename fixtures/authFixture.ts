import {test as base} from '@playwright/test'
import { AuthPage } from '../pages/authPage'

export const test = base.extend<{authPage:AuthPage}>({
    authPage: async ({page}, use)=>{
        const authPage = new AuthPage(page)
        await use(authPage)
    }
})