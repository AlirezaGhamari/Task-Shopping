import { createSlice } from "@reduxjs/toolkit";
import dataProduct from "../../../../public/api/data.json"


interface ProductItem {
	category: string;
}

export interface ProductState {
  data: ProductItem[];
  names: ProductItem[];

}

const initialState: ProductState = {
    data: [],
    names: dataProduct.products.map(i => ({ category: i.category, nameProduct: i.nameProduct,id:i.id }))
};


export const ProductSlice = createSlice({
    name: "ProductState",
  initialState,
  reducers: {
   add: (state, { payload }: { payload: ProductItem | ProductItem[] }) => {
     if (Array.isArray(payload)) {
       state.data.push(...payload);
     } else {
       state.data.push(payload);
     }
    },
    courses: (state) => {
      state.data = dataProduct.products.filter((i) => i.category === "main courses");
      
    },
    drinks: (state) => {
      state.data = dataProduct.products.filter((i) => i.category === "drinks");
    },
    other: (state) => {
      state.data = dataProduct.products.filter((i) => i.category === "other");
    },
  
  },
});


// Action creators are generated for each case reducer function
export const {  courses,drinks} = ProductSlice.actions;

export default ProductSlice.reducer;
