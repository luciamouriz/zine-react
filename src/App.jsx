
import { Home } from './pages/Home'
import { InfoVideo } from './pages/InfoVideo'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
    return (

        
            <Routes>
                <Route exact element={<Home />} path="/" />
                <Route element={<InfoVideo />} path=":video/:id" />
            </Routes>
        

    )
}
