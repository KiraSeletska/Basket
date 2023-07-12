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
  const returnedValue = useSelector((state) => state.basket.products);
  const totalPrice = useSelector((state) => state.basket.totalPrice);

  const dispatch = useDispatch();

  const cleatBascetHandler = () => {
    dispatch(cleanBasket());
    dispatch(countTotalPrice());
    dispatch(countTotalProducts());
  };

  const addQuantityPropductToBascet = (id) => {
    dispatch( addQuantityToProduct(id));
  };
  const decreaseQuantityPropduct = (id) => {
    dispatch( deletQuantityToProduct(id));
  };

  const deletProduct = (id) => {
    dispatch(deletPropductFromBasket(id));
    dispatch(countTotalPrice());
  };
  return (
    <div>
      <div>
        {returnedValue && returnedValue.map((product) => (
          <ProductInBasket
            key={product.id}
            {...product}
            addPropductToBascet={() => addQuantityPropductToBascet(product.id)}
            decreasePropduct={() => decreaseQuantityPropduct(product.id)}
            deletProduct={() => deletProduct(product.id)}
          />
        ))}
      </div>
      <h2> {totalPrice}</h2>{" "}
      <button onClick={() => cleatBascetHandler()}>Очистить корзину</button>
    </div>
  );
};
