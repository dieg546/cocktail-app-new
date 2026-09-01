import { z } from 'zod'

export const CategoriesApiSchema = z.object({

    drinks: z.array(
        z.object({
            strCategory: z.string()
        })
    )

})