import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
  categories: string[];
}

const initialState: CategoryState = {
  categories: [],
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<string>) => {
      if (!state.categories.includes(action.payload)) {
        state.categories.push(action.payload);
      }
    },
  },
});

export const { addCategory } = categorySlice.actions;
export default categorySlice.reducer;
