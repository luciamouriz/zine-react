import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import "./styles/style.scss";
import "./assets/fonts/stylefonts.css";
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
        <App />
        <ScrollToTop />
    </BrowserRouter>

)
