import classes from './productCard.module.css'

export const ProductCard = ({ title, image, description }) => {

  
  return (
    <div className={classes.cardContainer}>
      <div>{title}</div>
      <img src={image} alt={title} />
      <button>Добавить в корзину</button>
    </div>
  )
}
