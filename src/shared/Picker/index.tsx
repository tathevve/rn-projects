import React from 'react';
import {StyleProp, TextStyle, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {listSizesData} from '../models/constants/listSizesData';

interface IRNPickerProps {
  onChangeCB?: (value: any) => void;
  pickerValue?: string;
  disabled?: boolean;
  customStyles?: StyleProp<TextStyle>;
  placeholder?: string;
  placeholderColor?: string;
}

const RNPicker = ({
  onChangeCB,
  pickerValue,
  disabled = false,
  customStyles,
  placeholder = 'Select your size',
  placeholderColor = 'black',
}: IRNPickerProps) => {
  const handleChange = (value: any) => {
    onChangeCB?.(value);
  };

  return (
    <View style={customStyles}>
      <RNPickerSelect
        placeholder={{
          label: placeholder,
          color: placeholderColor,
        }}
        // disabled={findItemDetail.type === 'One Size' ? true : false}
        disabled={disabled}
        onValueChange={value => handleChange(value)}
        value={pickerValue}
        items={listSizesData}
      />
    </View>
  );
};

export default RNPicker;
