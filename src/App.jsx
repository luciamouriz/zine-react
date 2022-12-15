
import { Home } from './pages/Home'
import { InfoVideo } from './pages/InfoVideo'
import requests from './requests'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<InfoVideo />} path=":video/:id" />
            </Routes>
        </BrowserRouter>

    )
}
