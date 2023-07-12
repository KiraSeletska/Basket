import styles from "./ProductInBasket.module.css";

export const ProductInBasket = ({
  image,
  title,
  price,
  quantity,
  addPropductToBascet,
  decreasePropduct,
  deletProduct,
}) => {
  return (
    <div className={styles.productContainer}>
      <img src={image} />
      <p>{title}</p>
      <p> Товаров в корзине: {quantity}</p>
      <p> Цена за единицу: {price}</p>
      <p> Товаров на сумму: {price * quantity}</p>
      <button onClick={addPropductToBascet}>+</button>
      <button onClick={decreasePropduct}>-</button>
      <button onClick={deletProduct}>X</button>
    </div>
  );
};
