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
import {recommendedDataList} from '../../screens/itemDetails/recommendedDataList';

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
          id: 91,
          image: image2,
          description: 'Louis Vuitton',
          price: 1200,
          keyWord: 'dress',
        },
        {
          id: 92,
          image: image3,
          description: 'Prada',
          price: 1200,
          keyWord: 'dress',
        },
        {
          id: 93,
          image: image4,
          description: 'Chanel',
          price: 1200,
          keyWord: 'dress',
        },
        {
          id: 94,
          image: image5,
          description: 'Gucci',
          price: 1200,
          keyWord: 'dress',
        },
        {
          id: 95,
          image: image6,
          description: 'Prada',
          price: 400,
          keyWord: 'dress',
        },
        {
          id: 96,
          image: image7,
          description: 'LV',
          price: 400,
          keyWord: 'dress',
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
          id: 98,
          image: image22,
          description: 'Louis Vuitton',
          price: 1200,
        },
        {
          id: 45,
          image: image23,
          description: 'Gucci',
          price: 210,
        },
        {
          id: 46,
          image: image24,
          description: 'Louis Vuitton',
          price: 1200,
        },
        {
          id: 47,
          image: image25,
          description: 'Chanel',
          price: 210,
        },
        {
          id: 48,
          image: image26,
          description: 'Louis Vuitton',
          price: 1200,
        },
        {
          id: 49,
          image: image27,
          description: 'Versace',
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
          id: 50,
          image: image32,
          description: 'Louis Vuitton',
          price: 1200,
        },
        {
          id: 51,
          image: image33,
          description: 'Gucci',
          price: 1200,
        },
        {
          id: 52,
          image: image34,
          description: 'Prada',
          price: 1200,
        },
        {
          id: 53,
          image: image35,
          description: 'Gucci',
          price: 1200,
        },
        {
          id: 54,
          image: image36,
          description: 'Gucci',
          price: 1200,
        },
        {
          id: 55,
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
          id: 56,
          image: image42,
          description: 'Louis Vuitton',
          price: 1200,
        },
        {
          id: 57,
          image: image43,
          description: 'Prada',
          price: 1200,
        },
        {
          id: 58,
          image: image44,
          description: 'Fendi',
          price: 1200,
        },
        {
          id: 59,
          image: image45,
          description: 'Dior',
          price: 1200,
        },
        {
          id: 60,
          image: image46,
          description: 'Louis Vuitton',
          price: 1200,
        },
        {
          id: 61,
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
          id: 62,
          image: image52,
          description: 'Louis Vuitton',
          price: 1200,
        },
        {
          id: 63,
          image: image53,
          description: 'Prada',
          price: 1200,
        },
        {
          id: 64,
          image: image54,
          description: 'Saint Laurent',
          price: 2000,
        },
        {
          id: 65,
          image: image55,
          description: 'Prada',
          price: 1200,
        },
        {
          id: 66,
          image: image56,
        },
        {
          id: 67,
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
          id: 68,
          image: image62,
          description: 'Gucci',
          price: 1500,
        },
        {
          id: 69,
          image: image63,
          description: 'Louis Vuitton',
          price: 1800,
        },
        {
          id: 70,
          image: image64,
          description: 'Prada',
          price: 2000,
        },
        {
          id: 71,
          image: image65,
          description: 'Chanel',
          price: 2500,
        },
        {
          id: 72,
          image: image66,
          description: 'Dior',
          price: 2200,
        },
        {
          id: 73,
          image: image67,
          description: 'Saint Laurent',
          price: 1900,
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
          id: 74,
          image: image72,
          description: 'Louis Vuitton',
          price: 1800,
        },
        {
          id: 75,
          image: image73,
          description: 'Gucci',
          price: 1500,
        },
        {
          id: 76,
          image: image74,
          description: 'Chanel',
          price: 2500,
        },
        {
          id: 77,
          image: image75,
          description: 'Prada',
          price: 2000,
        },
        {
          id: 78,
          image: image76,
          description: 'Versace',
          price: 2800,
        },
        {
          id: 79,
          image: image77,
          description: 'Dolce & Gabbana',
          price: 2200,
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
          id: 80,
          image: image82,
          description: 'Prada',
          price: 2000,
        },
        {
          id: 81,
          image: image83,
          description: 'Gucci',
          price: 1500,
        },
        {
          id: 82,
          image: image84,
          description: 'Louis Vuitton',
          price: 1800,
        },
        {
          id: 83,
          image: image85,
          description: 'Chanel',
          price: 2500,
        },
        {
          id: 84,
          image: image86,
          description: 'Versace',
          price: 2800,
        },
        {
          id: 85,
          image: image87,
          description: 'Dolce & Gabbana',
          price: 2200,
        },
      ],
    },
    ...recommendedDataList,
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
