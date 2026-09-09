import axios from "axios"
import { CategoriesApiSchema, DrinkByIdApiSchema, RecipesApiSchema } from "../utils/recipes-schema"
import type { Recipe, SearchFilter } from "../types"

export async function getCategories() {
    
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

    const {data} = await axios(url)

    const result = CategoriesApiSchema.safeParse(data)

    if(result.success){

        return result.data

    }

}

export async function getRecipes(searchFilters : SearchFilter) {
    
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchFilters.category}&i=${searchFilters.ingredient}`

    const {data} = await axios(url)

    const result = RecipesApiSchema.safeParse(data)

    console.log(result)

    if(result.success){

        return result.data

    }


}

export async function getDrinkById(id: Recipe['idDrink']) {

    const url=`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`

    const {data} = await axios(url)

    const result = DrinkByIdApiSchema.safeParse(data.drinks[0])

    console.log('CONSULTANDO API BY ID ',result)
}