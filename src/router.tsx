import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./views/Dashboard"
import FavoritesPage from "./views/Favorites"
import Layout from "./layouts/Layout"

export default function AppRouter() {
  return (
    
    <BrowserRouter>

        <Routes>

            <Route
                Component={Layout}
            >
                <Route  
                    path="/"
                    Component={Dashboard}
                />

                <Route 
                    path="/favorites"
                    Component={FavoritesPage}
                />
            </Route>
            

        </Routes>

    </BrowserRouter>

  )
}
