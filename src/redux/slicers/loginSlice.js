import { createSlice } from '@reduxjs/toolkit';

const name = 'APP';

const initialState = {
  userData: null,
//   LoginInfo:
//     [
//       {
//         id: Math.random(),
//         name: "",
//         major: "",
//         grade:"",
//         startDate: null,
//         endDate: null,
//         description: "",

//       }
//     ]

};


const loginSlice = createSlice({
  name,
  initialState,
  reducers: {
    setUserData(state, {payload}) {
      state.userData = payload;
    }
  },

});

export const { setUserData } = loginSlice.actions;


export const selectUserData = (state) => state.login.userData;


export default loginSlice.reducer;

