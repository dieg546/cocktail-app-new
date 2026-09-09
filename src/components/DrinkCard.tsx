import type { MouseEvent } from "react"
import type { Recipe } from "../types"
import { useAppStore } from "../stores/useAppStore"

type DrinkCardTypesProps={

    drink: Recipe

}

export default function DrinkCard({drink}: DrinkCardTypesProps) {

    const fetchDrinkById = useAppStore((state)=> state.fetchDrinkById)

    const getDrink = (id: Recipe['idDrink'])=>{
        
        fetchDrinkById(id)

    }

    return (

        <div className="shadow-lg rounded-lg p-2">

            <div className="overflow-hidden">

                <img 
                    src={drink.strDrinkThumb} 
                    alt={drink.strDrink} 
                    className="hover:scale-125 transition-transform hover:rotate-2"
                />

            </div>

            <div className=" p-5 ">
                <h2 
                    className=" text-2xl truncate text-black font-bold"
                >
                    {drink.strDrink}
                </h2>

                <button

                    type="button"
                    className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg rounded-sm
                    cursor-pointer"
                    onClick={()=>getDrink(drink.idDrink)}
                >
                    Añadir a favoritos
                </button>
            </div>

        </div>
    )
}
