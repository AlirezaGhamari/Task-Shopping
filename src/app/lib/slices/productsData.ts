import { createSlice } from "@reduxjs/toolkit";
import dataProduct from "../../../../public/api/data.json"


interface ProductItem {
	category: string;
}

export interface ProductState {
  data: ProductItem[];
}

const initialState: ProductState = {
    data:[]
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
  
  },
});


// Action creators are generated for each case reducer function
export const {  courses} = ProductSlice.actions;

export default ProductSlice.reducer;
