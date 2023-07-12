import { NavLink } from 'react-router-dom'
import classes from './header.module.css'
import { useSelector } from 'react-redux'

export const Header = () => {
  const totalProducts = useSelector((state) => state.basket.products)

const showBasket = () => {
  console.log(totalProducts)
}

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
          <p>{totalProducts ? totalProducts.length : 0}</p> 
        </ul>
      </nav>
    </header>
  )
}
