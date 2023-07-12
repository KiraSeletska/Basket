import { NavLink } from 'react-router-dom'
import classes from './categoriesListPage.module.css'
import { useGetAllCategoriesQuery } from '../redux/apiSlice'

export const CategoriesListPage = () => {
const {data, isLoading, error} = useGetAllCategoriesQuery()
//console.log( data )
//IsLoading ? <div>LOADIN <div> : ...
  return (
    <>
    { isLoading ? <div> LOADIN </div> : 
      <div className={classes.container}>
        {data &&
          data.map((el, index) => (
            <NavLink key={index} to={`/categories/${el}`}>
              <div className={classes.categoryContainer}>{el}</div>
            </NavLink>
          ))}
      </div>}
    </>
  )
}
