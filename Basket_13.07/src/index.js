import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { CategoriesListPage } from './pages/CategoriesListPage'
import { ProductsListPage } from './pages/ProductsListPage'
import { BasketPage } from './pages/BasketPage'
import './index.css'
import { SingleProductPage } from './pages/SingleProductPage'
import { store } from './redux/store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/categories',
        element: <CategoriesListPage />,
      },
      {
        path: '/categories/:id',
        element: <ProductsListPage />,
      },
      {
        path: '/products/:id',
        element: <SingleProductPage />,
      },
      {
        path: '/basket',
        element: <BasketPage />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
        </RouterProvider>
      </Provider>
  </React.StrictMode>
)

