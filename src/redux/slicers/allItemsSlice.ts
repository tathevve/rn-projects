/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';
import image1 from '../../../assets/firstSliderFirst.png';
import image2 from '../../../assets/firstSliderSecond.png';
import image3 from '../../../assets/firstSliderThird.png';
import image4 from '../../../assets/firstSliderForth.png';
const name = 'APP';

const initialState = {
  items: [
    {
      id: 1,
      season: 'New Season',
      brand: 'Heritage',
      price: '$335.00',
      description: 'Ring-Chain Bracelet "Vaspurakan"',
      image: image1,
      isHearted: false,
      imagesArray: [
        {
          id: 1,
          image: image1,
        },
        {
          id: 2,
          image: image2,
        },
        {
          id: 3,
          image: image3,
        },
        {
          id: 4,
          image: image4,
        },
      ],
    },
    {
      id: 2,
      season: '',
      brand: 'Pregomesh',
      price: '$115.00',
      description: 'Earrings' + '\n' + '"Hethum I"',
      image: image2,
      isHearted: false,
      imagesArray: [
        {
          id: 1,
          image: image1,
        },
        {
          id: 2,
          image: image2,
        },
        {
          id: 3,
          image: image3,
        },
        {
          id: 4,
          image: image4,
        },
      ],
    },
    {
      id: 3,
      season: 'New Season',
      brand: 'Heritage',
      price: '$110.00',
      description: 'Ring “Berd”',
      image: image3,
      isHearted: false,
      imagesArray: [
        {
          id: 1,
          image: image1,
        },
        {
          id: 2,
          image: image2,
        },
        {
          id: 3,
          image: image3,
        },
        {
          id: 4,
          image: image4,
        },
      ],
    },
    {
      id: 4,
      season: 'New Season',
      brand: 'Heritage',
      price: '$290.00',
      description: 'Stack Bracelet "Vaspurakan"',
      image: image4,
      isHearted: false,
      imagesArray: [
        {
          id: 1,
          image: image1,
        },
        {
          id: 2,
          image: image2,
        },
        {
          id: 3,
          image: image3,
        },
        {
          id: 4,
          image: image4,
        },
      ],
    },
  ],
};

const allItemsSlice = createSlice({
  name,
  initialState,
  reducers: {
    setItems(state, {payload}) {
      state.items = payload;
    },
  },
});

export const {setItems} = allItemsSlice.actions;

export const selectItems = (state: any) => state.allItems.items;

export default allItemsSlice.reducer;
