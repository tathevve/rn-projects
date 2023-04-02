/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const name = 'APP';

const initialState = {
  paymentData: null,
};

const paymentSlice = createSlice({
  name,
  initialState,
  reducers: {
    setPayment(state, {payload}) {
      state.paymentData = payload;
    },
  },
});

export const {setPayment} = paymentSlice.actions;

export const selectPayment = (state: any) => state.payment.paymentData;

export default paymentSlice.reducer;
