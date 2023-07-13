import { NavLink, useParams } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard'
import classes from './productsListPage.module.css'
import { useGetProductsByCategoryQuery } from '../redux/apiSlice'
import { useDispatch, useSelector } from 'react-redux'
import {
  addProductToBasket,
  countTotalPrice,
  addQuantityToProduct,
  countTotalProducts,
} from "../redux/basketSlice";

export const ProductsListPage = () => {
  const { id } = useParams()
  const { data, error, isLoading } = useGetProductsByCategoryQuery(id);
  const totalProducts = useSelector((state) => state.basket.products);
  const dispatch = useDispatch()

  const addToBascetHandler = (event, el) => {
event.preventDefault()
console.log(el.id)
const newPproduct = { ...el, quantity: 1 };

if (totalProducts.length <= 0) {
  dispatch(addProductToBasket(newPproduct));
  dispatch(countTotalPrice());
  dispatch(countTotalProducts());
  return;
}

if (totalProducts.find(({id}) => id === el.id) === undefined) {
  dispatch(addProductToBasket(newPproduct));
  dispatch(countTotalPrice());
  dispatch(countTotalProducts());
  console.log('1')
} else {
  dispatch(addQuantityToProduct(el.id));
  dispatch(countTotalPrice());
  dispatch(countTotalProducts());
  console.log('2')
}

}
  
  return (
    <div>
      {error ? (<h1>{error}</h1> ): null}
      { isLoading ? (<h1>LOADING...</h1>) : (
          <div className={classes.productsContainer}>
            {data &&
              data.map((el) => (
                <NavLink key={el.id} to={`/products/${el.id}`}>
                  <ProductCard {...el} 
                  addToBascetHandler={(event)=>
                  addToBascetHandler(event, el)}
                  />
                </NavLink>
              ))}
          </div>)

        }
    </div>
  )
}
