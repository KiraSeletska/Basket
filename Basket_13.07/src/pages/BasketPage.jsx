import { useDispatch, useSelector } from "react-redux";
import { ProductInBasket } from "../components/ProductInBasket";
import {
  cleanBasket,
  countTotalPrice,
  countTotalProducts,
  deletPropductFromBasket,
  addQuantityToProduct,
  deletQuantityToProduct
} from "../redux/basketSlice";


export const getRandomID = () => {
  const min = 0;
  const max = 1679615;
  let int = Math.floor(Math.random() * (max - min + 1)) + min;
  return int.toString(36);
};

export const BasketPage = () => {
  const totalPrice = useSelector((state) => state.basket.totalPrice);
  const totalProducts = useSelector((state) => state.basket.products)
const totalPropucts = useSelector((state) => state.basket.totalProducts)
  const dispatch = useDispatch();

  const cleatBascetHandler = () => {
    dispatch(cleanBasket());
    dispatch(countTotalPrice());
    dispatch(countTotalProducts());
  };

  const addQuantityPropductToBascet = (id) => {
    dispatch(addQuantityToProduct(id));
    dispatch(countTotalProducts());
    dispatch(countTotalPrice())
  };
  const decreaseQuantityPropduct = (id) => {
    dispatch(deletQuantityToProduct(id));
    dispatch(countTotalProducts());
    dispatch(countTotalPrice())
  };

  const deletProduct = (id) => {
    dispatch(deletPropductFromBasket(id));
    dispatch(countTotalPrice());
    dispatch(countTotalProducts());
  };


//deletProduct={() => deletProduct(product.id)}
//  decreasePropduct={() => decreaseQuantityPropduct(product.id)}
  return (
    <div>
      <div>
        {totalProducts  && totalProducts.map((product) => (
          <ProductInBasket
            key={getRandomID()}
            {...product}
            addPropductToBascet={() => addQuantityPropductToBascet(product.id)}
            decreasePropduct={() => decreaseQuantityPropduct(product.id)}
            deletProduct={()=>{deletProduct(product.id)}}
          />
        ))}
      </div>
      <p>Всего товаров в корзине  {totalPropucts}</p> 
      <h2> на сумму: {totalPrice}</h2>{" "}
      <button onClick={() => cleatBascetHandler()}>Очистить корзину</button>
    </div>
  );
};
