import type { StateCreator } from "zustand"
import { getCategories, getDrinkById, getRecipes } from "../services/RecipeService"
import type { Categories, Recipe, RecipesFromApi, SearchFilter } from "../types"

// type Category = {}

export type RecipesSliceType = {

    categories: Categories,
    Recipes: RecipesFromApi,
    fetchCategories: () => Promise<void>,
    fetchRecipe: (searchFilters : SearchFilter) => Promise<void>,
    fetchDrinkById: (id: Recipe['idDrink']) => Promise<void>

}

export const createRecipeSlice : StateCreator<RecipesSliceType> = (set)=>({

    categories: {
        drinks:[]
    },

    Recipes:{
        drinks: []
    },

    fetchCategories: async ()=>{

        const categoriesFromApi = await getCategories()
        set({

            categories: categoriesFromApi

        })
    },

    fetchRecipe: async (searchFilters)=>{

        const fetchRecipes = await getRecipes(searchFilters)

        console.log('ZOD VALIDATED ', fetchRecipes)

        set({
            Recipes: fetchRecipes
        })

    },

    fetchDrinkById: async(id)=>{

        const fetchDrink = await getDrinkById(id)

    }

})