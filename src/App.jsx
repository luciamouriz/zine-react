
import { Home } from './pages/Home'
import { InfoVideo } from './pages/InfoVideo'
import { Routes, Route } from "react-router-dom";

export const App = () => {
    return (


        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<InfoVideo />} path=":video/:id" />
        </Routes>

    )
}
