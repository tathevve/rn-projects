import {StyleProp, TextStyle} from 'react-native';

export interface IItem {
  id?: number;
  season?: string;
  brand?: string;
  price?: string | number;
  description?: string;
  count?: number;
  image?: any | string;
  imagesArray?: Array<any | string>;
  isHearted?: boolean;
  showHeartIcon?: boolean;
  customItemStyles?: StyleProp<TextStyle> | any;
  type: string;
  size?: string;
}
