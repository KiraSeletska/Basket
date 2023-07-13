import classes from "./productCard.module.css";

export const ProductCard = ({
  id,
  title,
  image,
  description,
  addToBascetHandler,
}) => {
  return (
    <div className={classes.cardContainer}>
      <div>{title}</div>
      <img src={image} alt={title} />
      <p>{description}</p>
      <button onClick={addToBascetHandler}>Добавить в корзину</button>
    </div>
  );
};
