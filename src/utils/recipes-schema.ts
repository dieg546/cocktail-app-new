import { z } from 'zod'

export const CategoriesApiSchema = z.object({

    drinks: z.array(
        z.object({
            strCategory: z.string()
        })
    )

})

export const SearchFilterSchema = z.object({

    ingredient: z.string(),
    category: z.string()

})

export const RecipesApiSchema = z.object({

    drinks: z.array(
        z.object({
            idDrink: z.string(),
            strDrink: z.string(),
            strDrinkThumb: z.string()
        })
    )

})