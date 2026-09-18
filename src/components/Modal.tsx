import { Dialog, Transition } from '@headlessui/react';
import { Fragment, type JSX } from 'react';
import { useAppStore } from '../stores/useAppStore';
import type { DrinkById } from '../types';

export default function Modal() {
    
    //RecipeSlice
    const modal = useAppStore((state) => state.modal)  
    const closeModal = useAppStore((state)=>state.closeModal)  
    const drink = useAppStore((state)=>state.drink)

    //FavoriteSlice
    const favorites = useAppStore((state)=> state.favorites) 
    const addToFavorites = useAppStore((state)=> state.addToFavorites)
    const removeFromFavorites = useAppStore((state)=>state.removeFromFavorites)

    //NotificationSlice

    const displayNotification = useAppStore((state)=> state.displayNotificacion)
    const notification = useAppStore((state)=> state.notification)
    
    const existsInFavorites = favorites.some( favorite => favorite.idDrink === drink.idDrink)

    const renderIngredients = ()=>{

        const ingridients: JSX.Element[] = []

        for (let index = 1; index <= 6; index++) {
            
            const ingridient = drink[`strIngredient${index}` as keyof DrinkById]
            const measure = drink[`strMeasure${index}` as keyof DrinkById]

            if(ingridient && measure){

                ingridients.push(
                    <li key={index}>
                        {ingridient} - {measure}
                    </li>
                )

            }

        }

        return ingridients

    }


    return (
        <>
        <Transition appear show={modal} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => closeModal()}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black/70" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                        <Dialog.Title as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                            {drink.strDrink}
                        </Dialog.Title>

                        <img 
                            src={drink.strDrinkThumb} 
                            alt={`imagen de ${drink.strDrink}`} 
                            className='mx-auto w-86 '
                        />

                        <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                            Ingredientes y Cantidades
                        </Dialog.Title>

                        {renderIngredients()}

                        <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                            Instrucciones
                        </Dialog.Title>

                        <p className='my-10'>{drink.strInstructionsES}</p>

                        <div className='flex gap-5'>

                            <button
                                type='button'
                                className='w-full rounded bg-gray-600 p-3 font-bold 
                                uppercase text-white shadow hover:bg-gray-500 cursor-pointer'
                                onClick={closeModal}
                            >
                                Cerrar
                            </button>

                            {existsInFavorites ? (
                                <button
                                    type='button'
                                    className='w-full rounded bg-amber-600 p-3 font-bold 
                                    uppercase text-white shadow hover:bg-amber-800 cursor-pointer'
                                    onClick={()=>{
                                        removeFromFavorites(drink.idDrink) 
                                        closeModal()
                                        displayNotification(
                                            {text:'Se ha quitado de favoritos',error:false, show: true}
                                        )
                                    }}
                                >
                                    Quitar de favoritos
                                </button>
                            ):(
                                <button
                                    type='button'
                                    className='w-full rounded bg-amber-600 p-3 font-bold 
                                    uppercase text-white shadow hover:bg-amber-800 cursor-pointer'
                                    onClick={()=>{
                                        addToFavorites(drink)
                                        closeModal()
                                        displayNotification(
                                            {text:'Se ha agregado a favoritos',error: false ,show:true}
                                        )
                                    }}
                                >
                                    Agregar a favoritos
                                </button>
                            )}

                        </div>

                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
            </Dialog>
        </Transition>
        </>
    )
}