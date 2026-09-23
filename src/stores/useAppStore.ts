import {create} from 'zustand'
import { createRecipeSlice, type RecipesSliceType } from './recipeSlice'
import { devtools } from 'zustand/middleware'
import { favoriteSlice, type favoriteSliceType } from './favoriteSlice'
import { notificationSlice, type NotificationStateType } from './notificationSlice'
import { GenerativeAI, type GenerativeAISliceType } from './GenerativeSlice'
 
export const useAppStore = create<RecipesSliceType & favoriteSliceType & NotificationStateType & GenerativeAISliceType>()(devtools((...a)=>({

    ...createRecipeSlice(...a),
    ...favoriteSlice(...a), 
    ...notificationSlice(...a), 
    ...GenerativeAI(...a)

})))
