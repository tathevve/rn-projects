/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const name = 'APP';

const initialState = {
  addedToBagItemsData: [],
};

const shoppingBagSlice = createSlice({
  name,
  initialState,
  reducers: {
    setBagItemsData(state, {payload}) {
      state.addedToBagItemsData = payload;
    },
  },
});

export const {setBagItemsData} = shoppingBagSlice.actions;

export const selectBagItemsData = (state: any) => state.shoppingBag.addedToBagItemsData;

export default shoppingBagSlice.reducer;
