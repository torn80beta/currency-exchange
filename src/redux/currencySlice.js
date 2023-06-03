import { createSlice } from "@reduxjs/toolkit";
import { fetchBaseCurrency } from "./operations";

const currencySlice = createSlice({
  // Ім'я слайсу
  name: "currency",
  // Початковий стан редюсера слайсу
  initialState: {
    baseCurrency: "",
    isLoading: false,
    error: null,
  },
  reducers: {
    addBaseCurrency(state, action) {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: {
    [fetchBaseCurrency.fulfilled](state, action) {
      state.baseCurrency = action.payload;
    },
  },
});

// Редюсер слайсу
export const currencyReducer = currencySlice.reducer;
export const { addBaseCurrency } = currencySlice.actions;
