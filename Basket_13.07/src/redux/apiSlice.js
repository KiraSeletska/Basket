import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const sliceApi = createApi({
    //обращается к этому редьюсеру
    reducerPath: 'products',
    // основная часть запроса - неизменяемая
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/products/" }),
    //http://localhost:3333
    // вторая часть запроса - динамическая
    endpoints: (builder) => ({
        getAllCategories: builder.query({//query - get
            query: () => 'categories/'
            ///categories/all
        }),
        getProductsByCategory: builder.query({
            query: (category) => `category/${category}/`,
        }),
        getProductsByProduct: builder.query({
            query: (id) => `${id}`,
        }),
    })
})

export const { useGetAllCategoriesQuery, 
    useGetProductsByCategoryQuery, 
    useGetProductsByProductQuery } = sliceApi; 

