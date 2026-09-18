import type { StateCreator } from "zustand";
import type { DrinkById, Recipe } from "../types";

export type favoriteSliceType={

    favorites : DrinkById[],
    addToFavorites: (drink: DrinkById) => void,
    removeFromFavorites: (id: Recipe['idDrink']) => void
    loadFromLocalStorage: () => void

}

export const favoriteSlice : StateCreator<favoriteSliceType> = (set,get)=>({


    favorites:[],

    addToFavorites:(drink)=>{

        console.log("Agregando a favoritos ", drink)

        set({
            favorites : [...get().favorites,drink]
        })

        localStorage.setItem('favorites', JSON.stringify(get().favorites))

    },

    removeFromFavorites:(id)=>{

        console.log("Quitando de Favoritos ",id)

        const newFavorites = get().favorites.filter((favorite)=> favorite.idDrink !== id)

        set({
            favorites: newFavorites
        })

        localStorage.setItem('favorites', JSON.stringify(newFavorites))

    },

    loadFromLocalStorage: ()=>{

        const favoritesLocal = localStorage.getItem('favorites')
        
        if(favoritesLocal){

            set({
                favorites: JSON.parse(favoritesLocal)
            })

        }

    }

})