/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const name = 'APP';

const initialState = {
  shippingData: null,
};

const shippingAddressSlice = createSlice({
  name,
  initialState,
  reducers: {
    setShippingData(state, {payload}) {
      state.shippingData = payload;
    },
  },
});

export const {setShippingData} = shippingAddressSlice.actions;

export const selectShippingData = (state: any) => state.shippingAddress.shippingData;

export default shippingAddressSlice.reducer;
