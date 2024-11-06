import { createSlice } from "@reduxjs/toolkit";


// In your slice file (e.g., sidebarAddProductSlice.ts)


export const sidebarAddProductSlice = createSlice({
    name: 'sidebar',
    initialState: { isModalOpen: false },
    reducers: {
    show: state => {
        state.isModalOpen = true;
    },
      hide: state => {
        state.isModalOpen = false;
    }
  },
});

// Export the action creators
export const { show, hide } = sidebarAddProductSlice.actions;

export default sidebarAddProductSlice.reducer;
