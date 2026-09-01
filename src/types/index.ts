import {z} from 'zod'
import { CategoriesApiSchema } from '../utils/recipes-schema'

export type Categories = z.infer<typeof CategoriesApiSchema>