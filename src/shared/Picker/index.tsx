import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {listSizesData} from '../models/constants/listSizesData';

interface IRNPickerProps {
  onChangeCB?: (value: any) => void;
}

const RNPicker = ({onChangeCB}: IRNPickerProps) => {
  const handleChange = (value: any) => {
    onChangeCB?.(value);
    console.log(value, 'changeValue');
  };

  return (
    <>
      <RNPickerSelect
        placeholder={{
          label: 'Select your size',
        }}
        style={{}}
        // disabled={findItemDetail.type === 'One Size' ? true : false}
        // disabled={disableHandler()}
        onValueChange={value => handleChange(value)}
        items={listSizesData}
      />
    </>
  );
};

export default RNPicker;
