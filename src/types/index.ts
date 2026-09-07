import {z} from 'zod'
import { CategoriesApiSchema, RecipesApiSchema, SearchFilterSchema } from '../utils/recipes-schema'

export type Categories = z.infer<typeof CategoriesApiSchema>

export type SearchFilter = z.infer<typeof SearchFilterSchema>

export type RecipeFromApi = z.infer<typeof RecipesApiSchema>