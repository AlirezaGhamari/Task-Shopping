import { createSlice } from "@reduxjs/toolkit";


export interface SidbarAddProductState {
    isModalOpen: boolean;
}

const initialState: SidbarAddProductState = {
    isModalOpen: false
};


export const sidebarAddProductSlice = createSlice({
    name: "sidebarAddProduct",
  initialState,
  reducers: {
      show: (state) => {
          state.isModalOpen = !state.isModalOpen;
          return state;
        },
    },

});


// Action creators are generated for each case reducer function
export const { show } = sidebarAddProductSlice.actions;

export default sidebarAddProductSlice.reducer;
