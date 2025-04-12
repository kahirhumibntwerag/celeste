import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './features/Pages/About'
import NotFoundPage from './features/Pages/NotFoundPage'
import Product from './features/Pages/Product'
import {Provider} from 'react-redux'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './features/Pages/Home'
import Collections from './features/Pages/Collections'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App acts as layout
    children: [
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'product/:productId',
        element: <Product />
      },
      {
        path: '/',
        element: <Home />
      }
      ,
      {
        path: 'collections/:category',
        element: <Collections />
      }
    ]
  },{
    path:'*',
    element:<NotFoundPage/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
