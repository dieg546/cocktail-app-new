import {create} from 'zustand'
import { createRecipeSlice, type RecipesSliceType } from './recipeSlice'
import { devtools } from 'zustand/middleware'
import { favoriteSlice, type favoriteSliceType } from './favoriteSlice'
import { notificationSlice, type NotificationStateType } from './notificationSlice'
 
export const useAppStore = create<RecipesSliceType & favoriteSliceType & NotificationStateType>()(devtools((...a)=>({

    ...createRecipeSlice(...a),
    ...favoriteSlice(...a), 
    ...notificationSlice(...a)

})))
