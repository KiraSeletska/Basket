import { NavLink } from 'react-router-dom'
import classes from './header.module.css'
import { useSelector } from 'react-redux'

export const Header = () => {
  const totalProducts = useSelector((state) => state.basket.products)
  const totalPrice = useSelector((state) => state.basket.totalPrice)
const showBasket = () => {
  console.log(totalProducts)
  console.log(totalPrice)
}
/*     <p>{totalProducts ? totalProducts.length : 0}</p>  */
  return (
    <header className={classes.headerContainer}>
      <nav>
        <ul>
          <li>
            <NavLink to="/categories">Категории</NavLink>
          </li>
          <li>
            <NavLink to="/basket">Корзина</NavLink>
          </li>
          <button onClick={()=>showBasket()}>STATe of bascet</button>
     
        </ul>
      </nav>
    </header>
  )
}
