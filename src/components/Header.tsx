
import { useEffect, useMemo, useState, type ChangeEvent, type SubmitEvent } from 'react'
import { NavLink, useLocation, type NavLinkRenderProps } from 'react-router-dom'
import { useAppStore } from '../stores/useAppStore'


export default function Header() {


    const [searchFilters, setSearchFilters] = useState({

        ingredient: '',
        category: ''

    })

    const getLinkStyle = ({isActive}:NavLinkRenderProps): string => (isActive ? 'text-orange-500' : 'text-white')

    const {pathname} = useLocation()
    const isHome = useMemo(()=> pathname==='/',[pathname])

    //Recipes
    const fetchCategories = useAppStore((state)=> state.fetchCategories)
    const fetchRecipe = useAppStore((state)=> state.fetchRecipe)
    const categories = useAppStore((state)=>state.categories)

    //Notification

    const displayNotification = useAppStore((state) => state.displayNotificacion)

    useEffect(()=>{

        fetchCategories()
        
    },[])

    const handleChange = (e : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>)=>{

        setSearchFilters({
            ...searchFilters,
            [e.target.name] : e.target.value
        })

    }

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) =>{

        e.preventDefault()

        if(Object.values(searchFilters).includes('')){

            displayNotification({
                text:'Todos los campos son obligatorios',
                error:true,
                show:true
            })
            
            return 

        }


        fetchRecipe(searchFilters)

    }

    return (
        
        <header 
            className={isHome? 'bg-header bg-center bg-cover': 'bg-slate-800'}
        >

            <div className='mx-auto container px-5 py-16'>
    
                <div className='flex justify-between items-center'>

                    <div>

                        <img src="/logo.svg" alt="imagen logotipo" className='w-30'/>
    
                    </div>

                    <nav className='flex gap-5'>

                        <NavLink
                            to="/"
                            className={getLinkStyle}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/favorites"
                            className={getLinkStyle}
                        >
                            Favoritos
                        </NavLink>

                    </nav>

                </div>

                {isHome && (
                    <form 
                        onSubmit={handleSubmit}
                        className='md:w-1/2 2xl:w-1/3 bg-orange-400 my-10 p-10 rounded-lg space-y-4'
                    >
                        <div className='space-y-4'>
                            <label
                                htmlFor="ingredient"
                                className='block text-white font-bold uppercase'
                            >
                                Nombre o Ingrediente
                            </label>

                            <input 
                                type="text" 
                                id='ingredient'
                                name='ingredient'
                                className='p-3 w-full rounded-lg focus:outline-none bg-white'
                                placeholder='Nombre o ingrediente'
                                onChange={handleChange}
                                value={searchFilters.ingredient}
                            />

                        </div>

                        <div className='space-y-4'>
                            <label
                                htmlFor="category"
                                className='block text-white font-bold uppercase'
                            >
                                Categoria
                            </label>

                            <select 
                                name="category" 
                                id="category"
                                className='p-3 w-full rounded-lg focus:outline-none bg-white'
                                onChange={handleChange}
                                value={searchFilters.category}
                            >
                                <option value="">--- Seleccione ---</option>

                                {categories.drinks.map((category)=>(
                                    <option
                                        key={category.strCategory}
                                        value={category.strCategory}
                                    >
                                        {category.strCategory}
                                    </option>
                                ))}

                            </select>

                        </div>

                        <input 
                            type="submit" 
                            value="Buscar Receta" 
                            className='cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold p-3 rounded-lg'
                        />

                    </form>
                )}

            </div>

        </header>

    )
}
