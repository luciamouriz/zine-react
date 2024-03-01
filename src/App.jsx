
import { Home } from './pages/Home';
import { InfoVideo } from './pages/InfoVideo';
import { RouterProvider } from "react-router";
import { createBrowserRouter, createHashRouter, Navigate } from 'react-router-dom';
import { Routes, Route, useLocation } from 'react-router-dom'

export const App = () => {

    /* const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        
        {
            path: "/:video/:id",
            element: <InfoVideo />
        }
        
    ], { basename: "/zine-react" }); */

    return (

      
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/:video/:id" element={<InfoVideo />} />
            </Routes>




    )

}
