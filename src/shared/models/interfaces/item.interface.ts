export interface IItem {
  id?: number;
  season?: string;
  brand?: string;
  price?: string | number;
  description?: string;
  image?: any | string;
  imagesArray?: Array<any | string>;
  isHearted?: boolean;
}
