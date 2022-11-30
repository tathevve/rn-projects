/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';
import image1 from '../../../assets/firstSliderFirst.png';
import image2 from '../../../assets/firstSliderSecond.png';
import image3 from '../../../assets/firstSliderThird.png';
import image4 from '../../../assets/firstSliderForth.png';
import { EItemType } from '../../shared/models/enums/itemType.enum';
import { ESize } from '../../shared/models/enums/size.enum';
const name = 'APP';

const initialState = {
  items: [
    {
      id: 1,
      season: 'New Season',
      brand: 'Heritage',
      price: 400,
      count: 0,
      description: 'Ring-Chain Bracelet "Vaspurakan"',
      image: image1,
      type: EItemType.CLOTHING,
      size:ESize.ONE_SIZE,
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
      price: 200,
      count: 0,
      description: 'Earrings' + '\n' + '"Hethum I"',
      image: image2,
      type: EItemType.CLOTHING,
      size:ESize.ONE_SIZE,
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
      price: 100,
      count: 0,
      description: 'Ring “Berd”',
      image: image3,
      type: EItemType.ONE_SIZE,
      size:ESize.ONE_SIZE,
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
      price: 300,
      count: 0,
      type: EItemType.ONE_SIZE,
      size:ESize.ONE_SIZE,
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
