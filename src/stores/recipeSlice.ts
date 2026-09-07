import type { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeService"
import type { Categories, SearchFilter } from "../types"

// type Category = {}

export type RecipesSliceType = {

    categories: Categories,
    fetchCategories: () => Promise<void>
    fetchRecipe: (searchFilters : SearchFilter) => Promise<void>

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
    },

    fetchRecipe: async (searchFilters)=>{

        // const recipeFromApi=

        // console.log(searchFilters)

        const fetchRecipes = await getRecipes(searchFilters)

        console.log('ZOD VALIDATED ', fetchRecipes)

    }

})