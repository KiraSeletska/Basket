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

export const BasketPage = () => {
  const totalPrice = useSelector((state) => state.basket.totalPrice);
  const totalProducts = useSelector((state) => state.basket.products)
const totalPropuctsPrice = useSelector((state) => state.basket.totalProducts)
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


   {/*deletProduct={() => deletProduct(product.id)}*/}
  return (
    <div>
      <div>
        {totalProducts  && totalProducts.map((product) => (
          <ProductInBasket
            key={product.id}
            {...product}
            addPropductToBascet={() => addQuantityPropductToBascet(product.id)}
            decreasePropduct={() => decreaseQuantityPropduct(product.id)}
           
          />
        ))}
      </div>
      <p>Всего товаров в корзине: {totalPropuctsPrice}</p> 
      <h2> {totalPrice}</h2>{" "}
      <button onClick={() => cleatBascetHandler()}>Очистить корзину</button>
    </div>
  );
};
