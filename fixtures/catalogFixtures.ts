import { test as base} from "@playwright/test"
import { CatalogPage } from "../pages/catalogPage"

export const test = base.extend<{catalogPage:CatalogPage}>({
    catalogPage: async({page}, use)=>{
        const catalogPage = new CatalogPage(page)
        await use(catalogPage)
    }
})