import type { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"
import type { Categories } from "../types"

// type Category = {}

export type RecipesSliceType = {

    categories: Categories,
    fetchCategories: () => Promise<void>

}

export const createRecipeSlice : StateCreator<RecipesSliceType> = (set)=>({

    categories: {
        drinks:[]
    },

    fetchCategories: async ()=>{

        const categoriesFromApi = await getCategories()
        set({

            categories: categoriesFromApi

        })
    }

})