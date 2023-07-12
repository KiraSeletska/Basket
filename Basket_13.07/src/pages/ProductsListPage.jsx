import { NavLink, useParams } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard'
import classes from './productsListPage.module.css'
import { useGetProductsByCategoryQuery } from '../redux/apiSlice'

export const ProductsListPage = () => {
  const { id } = useParams()
  const { data, error, isLoading } = useGetProductsByCategoryQuery(id);
  return (
    <div>
      {error ? (<h1>{error}</h1> ): null}
      { isLoading ? (<h1>LOADING...</h1>) : (
          <div className={classes.productsContainer}>
            {data &&
              data.map((el) => (
                <NavLink key={el.id} to={`/products/${el.id}`}>
                  <ProductCard {...el} />
                </NavLink>
              ))}
          </div>)

        }
    </div>
  )
}
