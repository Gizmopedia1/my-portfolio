import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './pages/App/App.jsx'
import './main.scss'
 
ReactDOM.createRoot(document.getElementById("root")).render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
)