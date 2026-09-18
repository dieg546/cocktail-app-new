import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import DrinkCard from "../components/DrinkCard";


export default function Dashboard() {


  const Recipes = useAppStore((state)=> state.Recipes)

  const hasRecipes = useMemo(()=>Recipes.drinks.length > 0,[Recipes])

  return (
    <>


        {hasRecipes ? (
          <div className=" grid grid-cols-2 md:grid-cols-3 gap-5">

            {Recipes.drinks.map((drink)=>(
              <DrinkCard
                key={drink.idDrink}
                drink={drink}
              />
            ))}
          
          </div>

        ):(

          <div
            className="my-10 text-center text-gray-600 text-2xl"
          >
            Al parecer no hay nada, usa el formulario.
          </div>

        )}


    </>
  )
}
