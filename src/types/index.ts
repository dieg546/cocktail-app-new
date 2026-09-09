import {z} from 'zod'
import { CategoriesApiSchema, DrinkByIdApiSchema, RecipeApiSchema, RecipesApiSchema, SearchFilterSchema } from '../utils/recipes-schema'

export type Categories = z.infer<typeof CategoriesApiSchema>

export type SearchFilter = z.infer<typeof SearchFilterSchema>

export type Recipe = z.infer<typeof RecipeApiSchema>

export type RecipesFromApi = z.infer<typeof RecipesApiSchema>

export type DrinkById = z.infer<typeof DrinkByIdApiSchema>