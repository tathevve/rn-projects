import {StyleProp, TextStyle} from 'react-native';

export interface IItem {
  id?: number;
  season?: string;
  brand?: string;
  price: string | number;
  description?: string;
  count: number;
  image?: any | string;
  imagesArray?: Array<any | string>;
  isHearted?: boolean;
  type: string;
  size?: string;
}

export interface IItemProps {
  item: IItem | null;
  customStyles?: StyleProp<TextStyle> | any;
  showHeartIcon?: boolean;
}
