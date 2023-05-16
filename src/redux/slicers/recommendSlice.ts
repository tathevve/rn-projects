import {createSlice, nanoid} from '@reduxjs/toolkit';
import image1 from '../../../assets/photos_without_duplicates/dresses_1_120.png';
import image2 from '../../../assets/photos_without_duplicates/dresses_2_15.png';
import image3 from '../../../assets/photos_without_duplicates/dresses_1_61.png';
import image4 from '../../../assets/photos_without_duplicates/dresses_1_62.png';
import image5 from '../../../assets/photos_without_duplicates/dresses_2_26.png';
import image6 from '../../../assets/photos_without_duplicates/dresses_2_97.png';
import image7 from '../../../assets/photos_without_duplicates/dresses_2_107.png';

import image21 from '../../../assets/photos_without_duplicates/activewear_1_24.png';
import image22 from '../../../assets/photos_without_duplicates/two_piece_outfit_2_66.png';
import image23 from '../../../assets/photos_without_duplicates/activewear_1_53.png';
import image24 from '../../../assets/photos_without_duplicates/intimates_1_53.png';
import image25 from '../../../assets/photos_without_duplicates/tops_1_35.png';
import image26 from '../../../assets/photos_without_duplicates/tops_2_72.png';
import image27 from '../../../assets/photos_without_duplicates/tops_2_65.png';

import image31 from '../../../assets/photos_without_duplicates/sweatshirts_2_62.png';
import image32 from '../../../assets/photos_without_duplicates/sweatshirts_1_76.png';
import image33 from '../../../assets/photos_without_duplicates/sweatshirts_1_65.png';
import image34 from '../../../assets/photos_without_duplicates/sweatshirts_2_82.png';
import image35 from '../../../assets/photos_without_duplicates/sweatshirts_2_57.png';
import image36 from '../../../assets/photos_without_duplicates/sweatshirts_1_28.png';
import image37 from '../../../assets/photos_without_duplicates/sweatshirts_1_43.png';

import image41 from '../../../assets/photos_without_duplicates/denim_2_34.png';
import image42 from '../../../assets/photos_without_duplicates/denim_1_77.png';
import image43 from '../../../assets/photos_without_duplicates/denim_1_39.png';
import image44 from '../../../assets/photos_without_duplicates/denim_1_26.png';
import image45 from '../../../assets/photos_without_duplicates/denim_1_25.png';
import image46 from '../../../assets/photos_without_duplicates/denim_2_71.png';
import image47 from '../../../assets/photos_without_duplicates/denim_1_33.png';

import image51 from '../../../assets/photos_without_duplicates/dresses_1_97.png';
import image52 from '../../../assets/photos_without_duplicates/dresses_1_79.png';
import image53 from '../../../assets/photos_without_duplicates/dresses_1_60.png';
import image54 from '../../../assets/photos_without_duplicates/dresses_1_63.png';
import image55 from '../../../assets/photos_without_duplicates/dresses_2_33.png';
import image56 from '../../../assets/photos_without_duplicates/dresses_1_80.png';
import image57 from '../../../assets/photos_without_duplicates/dresses_2_67.png';

import image61 from '../../../assets/photos_without_duplicates/two_piece_outfit_2_38.png';
import image62 from '../../../assets/photos_without_duplicates/two_piece_outfit_2_40.png';
import image63 from '../../../assets/photos_without_duplicates/two_piece_outfit_1_16.png';
import image64 from '../../../assets/photos_without_duplicates/two_piece_outfit_1_23.png';
import image65 from '../../../assets/photos_without_duplicates/two_piece_outfit_2_16.png';
import image66 from '../../../assets/photos_without_duplicates/two_piece_outfit_2_37.png';
import image67 from '../../../assets/photos_without_duplicates/two_piece_outfit_2_111.png';

import image71 from '../../../assets/photos_without_duplicates/maternity_1_53.png';
import image72 from '../../../assets/photos_without_duplicates/maternity_1_112.png';
import image73 from '../../../assets/photos_without_duplicates/maternity_2_118.png';
import image74 from '../../../assets/photos_without_duplicates/maternity_1_107.png';
import image75 from '../../../assets/photos_without_duplicates/sleep_and_lounge_2_22.png';
import image76 from '../../../assets/photos_without_duplicates/two_piece_outfit_1_105.png';
import image77 from '../../../assets/photos_without_duplicates/sleep_and_lounge_1_53.png';

import image81 from '../../../assets/photos_without_duplicates/outwear_2_68.png';
import image82 from '../../../assets/photos_without_duplicates/outwear_1_68.png';
import image83 from '../../../assets/photos_without_duplicates/outwear_2_23.png';
import image84 from '../../../assets/photos_without_duplicates/outwear_1_34.png';
import image85 from '../../../assets/photos_without_duplicates/outwear_2_71.png';
import image86 from '../../../assets/photos_without_duplicates/outwear_2_100.png';
import image87 from '../../../assets/photos_without_duplicates/outwear_1_107.png';
import {EItemType} from '../../shared/models/enums/itemType.enum';
import {ESize} from '../../shared/models/enums/size.enum';

const name = 'APP';

const initialState = {
  item: [
    {
      id: 1,
      season: 'New Season',
      brand: 'Heritage',
      price: 400,
      count: 0,
      keyWord: 'dress',
      description: 'Ring-Chain Bracelet "Vaspurakan"',
      image: image1,
      type: EItemType.CLOTHING,
      size: ESize.ONE_SIZE,
      isHearted: false,
      imagesArray: [
        {
          id: nanoid(),
          image: image2,
          description: 'Louis Vuitton',
          price: 1200,
        },
        {
          id: nanoid(),
          image: image3,
          description: 'Prada',
          price: 1200,
        },
        {
          id: nanoid(),
          image: image4,
          description: 'Chanel',
          price: 1200,
        },
        {
          id: nanoid(),
          image: image5,
          description: 'Gucci',
          price: 1200,
        },
        {
          id: nanoid(),
          image: image6,
          description: 'Earrings' + '\n' + '"Hethum I"',
          price: 400,
        },
        {
          id: nanoid(),
          image: image7,
          description: 'Earrings' + '\n' + '"Hethum I"',
          price: 400,
        },
      ],
    },
    {
      id: 2,
      season: '',
      brand: 'Pregomesh',
      price: 200,
      count: 0,
      keyWord: 'top',
      description: 'Earrings' + '\n' + '"Hethum I"',
      image: image21,
      type: EItemType.CLOTHING,
      size: ESize.ONE_SIZE,
      isHearted: false,
      imagesArray: [
        {
          id: nanoid(),
          image: image22,
          description: 'Louis Vuitton',
          price: 1200,
        },
        {
          id: nanoid(),
          image: image23,
          description: 'Ring-Chain Bracelet "Vaspurakan"',
          price: 210,
        },
        {
          id: nanoid(),
          image: image24,
          description: 'Louis Vuitton',
          price: 1200,
        },
        {
          id: nanoid(),
          image: image25,
          description: 'Ring-Chain Bracelet "Vaspurakan"',
          price: 210,
        },
        {
          id: nanoid(),
          image: image26,
          description: 'Louis Vuitton',
          price: 1200,
        },
        {
          id: nanoid(),
          image: image27,
          description: 'Ring-Chain Bracelet "Vaspurakan"',
          price: 210,
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
      keyWord: 'sweater',
      image: image31,
      type: EItemType.ONE_SIZE,
      size: ESize.ONE_SIZE,
      isHearted: false,
      imagesArray: [
        {
          id: nanoid(),
          image: image32,
          description: 'Louis Vuitton',
          price: 1200,
        },
        {
          id: nanoid(),
          image: image33,
          description: 'Gucci',
          price: 1200,
        },
        {
          id: nanoid(),
          image: image34,
        },
        {
          id: nanoid(),
          image: image35,
          description: 'Gucci',
          price: 1200,
        },
        {
          id: nanoid(),
          image: image36,
          description: 'Gucci',
          price: 1200,
        },
        {
          id: nanoid(),
          image: image37,
          description: 'Louis Vuitton',
          price: 1200,
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
      size: ESize.ONE_SIZE,
      keyWord: 'jeans',
      description: 'Stack Bracelet "Vaspurakan"',
      image: image41,
      isHearted: false,
      imagesArray: [
        {
          id: nanoid(),
          image: image42,
          description: 'Louis Vuitton',
          price: 1200,
        },
        {
          id: nanoid(),
          image: image43,
          description: 'Prada',
          price: 1200,
        },
        {
          id: nanoid(),
          image: image44,
          description: 'Fendi',
          price: 1200,
        },
        {
          id: nanoid(),
          image: image45,
          description: 'Dior',
          price: 1200,
        },
        {
          id: nanoid(),
          image: image46,
          description: 'Louis Vuitton',
          price: 1200,
        },
        {
          id: nanoid(),
          image: image47,
          description: 'Louis Vuitton',
          price: 1200,
        },
      ],
    },
    {
      id: 5,
      season: 'New Season',
      brand: 'Heritage',
      price: 3000,
      count: 0,
      type: EItemType.ONE_SIZE,
      size: ESize.ONE_SIZE,
      keyWord: 'long dress',
      description: 'Stack Bracelet "Vaspurakan"',
      image: image51,
      isHearted: false,
      imagesArray: [
        {
          id: nanoid(),
          image: image52,
          description: 'Louis Vuitton',
          price: 1200,
        },
        {
          id: nanoid(),
          image: image53,
          description: 'Prada',
          price: 1200,
        },
        {
          id: nanoid(),
          image: image54,
          description: 'Saint Laurent',
          price: 2000,
        },
        {
          id: nanoid(),
          image: image55,
          description: 'Prada',
          price: 1200,
        },
        {
          id: nanoid(),
          image: image56,
        },
        {
          id: nanoid(),
          image: image57,
          description: 'Saint Laurent',
          price: 2000,
        },
      ],
    },
    {
      id: 6,
      season: 'New Season',
      brand: 'Heritage',
      price: 3000,
      count: 0,
      type: EItemType.ONE_SIZE,
      size: ESize.ONE_SIZE,
      keyWord: 'two piece clothes',
      description: 'Stack Bracelet "Vaspurakan"',
      image: image61,
      isHearted: false,
      imagesArray: [
        {
          id: nanoid(),
          image: image62,
        },
        {
          id: nanoid(),
          image: image63,
        },
        {
          id: nanoid(),
          image: image64,
        },
        {
          id: nanoid(),
          image: image65,
        },
        {
          id: nanoid(),
          image: image66,
        },
        {
          id: nanoid(),
          image: image67,
        },
      ],
    },
    {
      id: 7,
      season: 'New Season',
      brand: 'Heritage',
      price: 3000,
      count: 0,
      type: EItemType.ONE_SIZE,
      size: ESize.ONE_SIZE,
      keyWord: 'white dress',
      description: 'Stack Bracelet "Vaspurakan"',
      image: image71,
      isHearted: false,
      imagesArray: [
        {
          id: nanoid(),
          image: image72,
        },
        {
          id: nanoid(),
          image: image73,
        },
        {
          id: nanoid(),
          image: image74,
        },
        {
          id: nanoid(),
          image: image75,
        },
        {
          id: nanoid(),
          image: image76,
        },
        {
          id: nanoid(),
          image: image77,
        },
      ],
    },
    {
      id: 8,
      season: 'New Season',
      brand: 'Heritage',
      price: 3000,
      count: 0,
      type: EItemType.ONE_SIZE,
      size: ESize.ONE_SIZE,
      keyWord: 'coat',
      description: 'Stack Bracelet "Vaspurakan"',
      image: image81,
      isHearted: false,
      imagesArray: [
        {
          id: nanoid(),
          image: image82,
        },
        {
          id: nanoid(),
          image: image83,
        },
        {
          id: nanoid(),
          image: image84,
        },
        {
          id: nanoid(),
          image: image85,
        },
        {
          id: nanoid(),
          image: image86,
        },
        {
          id: nanoid(),
          image: image87,
        },
      ],
    },
  ],
};

const recommendSlice = createSlice({
  name,
  initialState,
  reducers: {
    setItem(state, {payload}) {
      state.item = payload;
    },
  },
});

export const {setItem} = recommendSlice.actions;

export const selectRecommendItems = (state: any) => state.recommendItems.item;

export default recommendSlice.reducer;
