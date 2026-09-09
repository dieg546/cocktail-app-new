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

export const RecipeApiSchema = z.object({

    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string()


})

export const RecipesApiSchema = z.object({

    drinks: z.array(
        RecipeApiSchema
    )

})

export const DrinkByIdApiSchema = z.object({
    
    idDrink: z.string(),
    strDrink: z.string(),
    strInstructions: z.string(),
    strInstructionsES: z.string(),
    strDrinkThumb: z.string(),
    strIngredient1: z.string().nullable(), 
    strIngredient2: z.string().nullable(),
    strIngredient3: z.string().nullable(),
    strIngredient4: z.string().nullable(),
    strIngredient5: z.string().nullable(),
    strMeasure1: z.string().nullable(),
    strMeasure2: z.string().nullable(),
    strMeasure3: z.string().nullable(),
    strMeasure4: z.string().nullable(),
    strMeasure5: z.string().nullable()

})