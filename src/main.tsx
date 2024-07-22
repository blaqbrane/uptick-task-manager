import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppReduxProvider from './provider/redux-app-provider/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <AppReduxProvider>
     <App />
    </AppReduxProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
