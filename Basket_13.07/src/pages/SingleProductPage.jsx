import { useParams } from "react-router-dom";
import classes from "./singleProductPage.module.css";
import { useGetProductsByProductQuery } from "../redux/apiSlice";
import {
  addProductToBasket,
  countTotalPrice,
  addQuantityToProduct,
} from "../redux/basketSlice";
import { useDispatch, useSelector } from "react-redux";

export const SingleProductPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductsByProductQuery(id);

  const dispatch = useDispatch();

  const totalProducts = useSelector((state) => state.basket.products);

  const addProductToBasketHandler = (product, idEl) => {
    const newPproduct = { ...product, quantity: 1 };

    if (totalProducts.length <= 0) {
      dispatch(addProductToBasket(newPproduct));
      dispatch(countTotalPrice());
      return;
    }

if (totalProducts.find((el) => el.id === idEl) === undefined){
  dispatch(addProductToBasket(newPproduct))
  dispatch(countTotalPrice());
  console.log('Не нашло, добавляю')
} else {
  dispatch(addQuantityToProduct(idEl))
  dispatch(countTotalPrice());
}
  
  };

  return (
    <div>
      {isLoading ? (
        <h1>LOADING...</h1>
      ) : (
        <div className={classes.container}>
          <img src={data.image} />п
          <div>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <p>Price: {data.price}</p>

            <button onClick={() => addProductToBasketHandler(data, data.id)}>
              Добавить в корзину
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
