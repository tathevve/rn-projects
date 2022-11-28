import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux';
import {
  selectBagItemsData,
  selectTotalPrice,
  setBagItemsData,
  setItemsTotalPrice,
} from '../../redux/slicers/shoppingBagSlice';
import {IItem} from '../models/interfaces/item.interface';

const useAddedToBagHook = () => {
  const dispatch = useDispatch<AppDispatch>();
  const totalPrice = useSelector(selectTotalPrice);
  const bagItems = useSelector(selectBagItemsData);

  const addedToBagItemsHandler = (
    item: IItem,
    sizeValue: string,
    bagItemsCB?: () => void,
  ) => {
    bagItemsCB?.();
    let totalOf = totalPrice + item.price;
    const findedData = bagItems.find((i: IItem) => i.id === item.id);
    if (findedData) {
      const updatedList = bagItems.map((i: IItem) => {
        if (findedData.id === i.id && findedData.size === sizeValue) {
          return {
            ...i,
            count: findedData.count + 1,
            size: sizeValue,
          };
        } else {
          return {
            ...i,
          };
        }
      });
      dispatch(setBagItemsData(updatedList));
    } else {
      dispatch(
        setBagItemsData([...bagItems, {...item, count: 1, size: sizeValue}]),
      );
    }
    dispatch(setItemsTotalPrice(totalOf));
  };

  return addedToBagItemsHandler;
};

export default useAddedToBagHook;
