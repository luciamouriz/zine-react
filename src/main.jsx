import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import "./styles/style.scss";
import "./assets/fonts/stylefonts.css";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter basename="/zine-react">
            <App />
        </BrowserRouter>
    </React.StrictMode>
)
