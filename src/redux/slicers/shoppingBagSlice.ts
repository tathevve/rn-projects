/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const name = 'APP';

const initialState = {
  addedToBagItemsData: [],
  totalPrice: 0,
};

const shoppingBagSlice = createSlice({
  name,
  initialState,
  reducers: {
    setBagItemsData(state, {payload}) {
      state.addedToBagItemsData = payload;
    },
    setItemsTotalPrice(state, {payload}) {
      state.totalPrice = payload;
    },
  },
});

export const {setBagItemsData, setItemsTotalPrice} = shoppingBagSlice.actions;

export const selectBagItemsData = (state: any) =>
  state.shoppingBag.addedToBagItemsData;

  export const selectTotalPrice = (state: any) =>
  state.shoppingBag.totalPrice;

export default shoppingBagSlice.reducer;
