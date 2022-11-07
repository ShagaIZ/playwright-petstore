import { test as base} from "@playwright/test"
import { HomePage } from "../pages/homePage"

export const test = base.extend<{homePage:HomePage}>({
    homePage: async({page}, use)=>{
        const homePage = new HomePage(page)
        await use(homePage)
    }
})