import React, { useMemo } from 'react'
import Header from '../components/Header'
import { useAppStore } from '../stores/useAppStore'
import DrinkCard from '../components/DrinkCard'

export default function FavoritesPage() {


  const favorites = useAppStore((state)=>state.favorites) 

  const hasFavorites = useMemo(()=>{

    return favorites.length

  },[favorites])

  return (
    <>
        
        <h1 
          className='text-6xl font-bold'
        >
          Favoritos
        </h1>

        {hasFavorites? (
          <div className=" grid grid-cols-2 md:grid-cols-3 gap-5">
        
            {favorites.map((drink)=>(
              <DrinkCard
                key={drink.idDrink}
                drink={drink}
              
              />
            ))}
          
          </div>

        ):(

          <p 
            className='text-center my-10 text-lg'
          >
            No hay favoritos agregados.
          </p>

        )}

        
    </>
  )
}
