import { createSlice } from "@reduxjs/toolkit";
import dataProduct from "../../../../public/api/data.json"


export interface ProductState {
  data: unknown;
}

const initialState: ProductState = {
    data:[]
};


export const ProductSlice = createSlice({
    name: "ProductState",
  initialState,
  reducers: {
    courses: (state) => {
      state.data = dataProduct.products.filter((i) => i.category === "main courses");
    },
    drinks: (state) => {
      state.data = dataProduct.products.filter((i) => i.category === "drinks");
    },
  },
});


// Action creators are generated for each case reducer function
export const {  courses} = ProductSlice.actions;

export default ProductSlice.reducer;
