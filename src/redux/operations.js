import { createAsyncThunk } from "@reduxjs/toolkit";
import getUserInfo from "../api/api";

export const fetchBaseCurrency = createAsyncThunk(
  "currency/fetchBaseCurrency",
  async (crd, thunkApi) => {
    try {
      const data = await getUserInfo(crd);
      return data.results[0].annotations.currency.iso_code;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
/*
export const exchengeCurrency = createAsyncThunk(
  "currency/exchengeCurrency",
  async (crd, thunkApi) => {
    try {
      const data = await getUserInfo(crd);
      return data.results[0].annotations.currency.iso_code;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
*/
