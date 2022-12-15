
import { Home } from './pages/Home'
import { Video } from './pages/Video'
import requests from './requests'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Video />} path="/video/:id" />
            </Routes>
        </BrowserRouter>

    )
}
