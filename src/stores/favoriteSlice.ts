import type { StateCreator } from "zustand";
import type { DrinkById, Recipe } from "../types";

export type favoriteSliceType={

    favorites : DrinkById[],
    addToFavorites: (drink: DrinkById) => void,
    removeFromFavorites: (id: Recipe['idDrink']) => void

}

export const favoriteSlice : StateCreator<favoriteSliceType> = (set,get)=>({


    favorites:[],

    addToFavorites:(drink)=>{

        console.log("Agregando a favoritos ", drink)

        set({
            favorites : [...get().favorites,drink]
        })

    },

    removeFromFavorites:(id)=>{

        console.log("Quitando de Favoritos ",id)

        const newFavorites = get().favorites.filter((favorite)=> favorite.idDrink !== id)

        set({
            favorites: newFavorites
        })

    }

})