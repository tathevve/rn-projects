/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const name = 'APP';

const initialState = {
  itemData: null,
};

const wishlistSlice = createSlice({
  name,
  initialState,
  reducers: {
    setItemData(state, {payload}) {
      state.itemData = payload;
    },
  },
});

export const {setItemData} = wishlistSlice.actions;

export const selectItemData = (state: any) => state.wishlist.itemData;

export default wishlistSlice.reducer;
