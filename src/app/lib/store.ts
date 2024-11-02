import { configureStore } from "@reduxjs/toolkit";
import { sidebarAddProductSlice } from "./slices/sidbarAddProduct";
import { ProductSlice } from "./slices/productsData";

export const makeStore = () => {
  return configureStore({
    reducer: {
      sidebarAddProduct: sidebarAddProductSlice.reducer,
      ProductState :ProductSlice.reducer
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
