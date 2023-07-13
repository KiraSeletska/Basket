import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
  totalProducts: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProductToBasket: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    cleanBasket: (state) => {
      state.products = [];
    },
    countTotalPrice: (state) => {
     // console.log('я не работаю')
      
      state.totalPrice = state.products.reduce((acc, el) => {
      return el.price * el.quantity + acc;
      }, 0);
    },
    countTotalProducts: (state) => {
      state.totalProducts = state.products.reduce((acc, el) => {
        return el.quantity + acc;
        }, 0);
     
    },
    
    deletPropductFromBasket: (state, action) => {
      state.products = [
        ...state.products.filter((el) => el.id !== action.payload),
      ];
    },
    addQuantityToProduct: (state, action) => {
      state.products = [
        ...state.products.map((el) => {
          if (el.id === action.payload) {
            //console.log("1");
            return { ...el, quantity: el.quantity + 1 };
          } else {
          //  console.log("2");
            return el;
          }
        }),
      ];
    },
    deletQuantityToProduct: (state, action) => {
      state.products = [
        ...state.products.map((el) => {
          if (el.id === action.payload) {
            return { ...el, quantity: el.quantity - 1 };
          }
          return el;
        }),
      ];
    },
  },
});

export const {
  addProductToBasket,
  cleanBasket,
  countTotalPrice,
  countTotalProducts,
  deletPropductFromBasket,
  addQuantityToProduct,
  deletQuantityToProduct,
} = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
