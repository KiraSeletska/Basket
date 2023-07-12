import { ProductsList } from './pages/ProductsListPage'
import { SingleProduct } from './pages/SingleProductPage'
import { Header } from './components/Header'
import { CategoriesListPage } from './pages/CategoriesListPage'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
