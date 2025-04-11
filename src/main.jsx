import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './features/Pages/About'
import NotFoundPage from './features/Pages/NotFoundPage'
import Product from './features/Pages/Product'
import {Provider} from 'react-redux'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { store } from './store.js'

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
      }
    ]
  },{
    path:'*',
    element:<NotFoundPage/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
