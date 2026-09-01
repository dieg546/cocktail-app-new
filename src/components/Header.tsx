
import { useEffect, useMemo } from 'react'
import { NavLink, useLocation, type NavLinkRenderProps } from 'react-router-dom'
import { useAppStore } from '../stores/useAppStore'


export default function Header() {


    const getLinkStyle = ({isActive}:NavLinkRenderProps): string => (isActive ? 'text-orange-500' : 'text-white')

    const {pathname} = useLocation()
    const isHome = useMemo(()=> pathname==='/',[pathname])

    const fetchCategories = useAppStore((state)=> state.fetchCategories)

    const categories = useAppStore((state)=>state.categories)
    console.log('HERE',categories)
    useEffect(()=>{

        fetchCategories()
        
    },[])

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
                        action=""
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
                            >
                                <option value="">--- Seleccione ---</option>

                                {categories.drinks.map((category)=>(
                                    <option
                                        key={category.strCategory}
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
