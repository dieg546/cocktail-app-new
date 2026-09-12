import {create} from 'zustand'
import { createRecipeSlice, type RecipesSliceType } from './recipeSlice'
import { devtools } from 'zustand/middleware'
import { favoriteSlice, type favoriteSliceType } from './favoriteSlice'
 
export const useAppStore = create<RecipesSliceType & favoriteSliceType>()(devtools((...a)=>({

    ...createRecipeSlice(...a),
    ...favoriteSlice(...a)

})))
