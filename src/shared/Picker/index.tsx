import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {listSizesData} from '../models/constants/listSizesData';

interface IRNPickerProps {
  onChangeCB?: (value: any) => void;
  pickerValue?: string;
  disabled?: boolean;
}

const RNPicker = ({
  onChangeCB,
  pickerValue,
  disabled = false,
}: IRNPickerProps) => {
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
        // disabled={findItemDetail.type === 'One Size' ? true : false}
        disabled={disabled}
        onValueChange={value => handleChange(value)}
        value={pickerValue}
        items={listSizesData}
      />
    </>
  );
};

export default RNPicker;
