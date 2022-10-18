import React, {memo, useState} from 'react';
import {
  Control,
  Controller,
  FieldValues,
  FormState,
  DeepMap,
  DeepPartial,
  FieldError,
} from 'react-hook-form';
import {StyleProp, StyleSheet, Text, TextInput, TextStyle} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

interface ITextInputField {
  name: string;
  control: Control<FieldValues, object> | any;
  rules?: any;
  placeholder?: string;
  customInputStyles?: StyleProp<TextStyle>;
  customValue?: string;
  changeHandler?: (value: any) => void | any;
  keyboardType?: string;
  isPassword?: boolean;
  secureTextEntry?: boolean;
  errors?: FormState<DeepMap<DeepPartial<FieldValues>, FieldError>> | any;
  errorMessage?: string;
  errorMessageStyles?: StyleProp<TextStyle>;
  editable?: boolean;
  labelIsVisible?: boolean;
  selectTextOnFocus?: boolean;
  props?: any;
}

const TextInputField = ({
  name,
  rules,
  control,
  placeholder,
  customInputStyles,
  errorMessage = '',
  errorMessageStyles,
  props,
  customValue,
  changeHandler,
  secureTextEntry = false,
  isPassword = false,
  keyboardType = 'default',
  errors,
  editable = true,
  labelIsVisible = true,
  selectTextOnFocus = false,
}: ITextInputField) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const handlePasswordToggle = (): void => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      {labelIsVisible ? <Text>{placeholder}</Text> : null}
      <Controller
        name={name}
        rules={rules}
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={customInputStyles}
            onBlur={onBlur}
            onChangeText={changeHandler || onChange}
            value={customValue || value}
            placeholder={placeholder}
            editable={editable}
            secureTextEntry={
              secureTextEntry && isPassword && !isPasswordVisible
            }
            keyboardType={keyboardType}
            selectTextOnFocus={selectTextOnFocus}
            {...props}
          />
        )}
      />
      {errors && (errors[name] || errorMessage) ? (
        <Text style={[styles.errorMessage, errorMessageStyles]}>
          {errorMessage ? errorMessage : errors[name]?.message}
        </Text>
      ) : null}
      {isPassword && (
        <Ionicon
          name={!isPasswordVisible ? 'md-eye-off' : 'md-eye'}
          style={styles.passwordIcon}
          size={20}
          onPress={handlePasswordToggle}
        />
      )}
    </>
  );
};

export default memo(TextInputField);

const styles = StyleSheet.create({
  errorMessage: {
    marginTop: -10,
    color: 'red',
    fontSize: 15,
    marginBottom: 10,
  },
  passwordIcon: {
    position: 'absolute',
    right: 20,
    top: 40,
  },
});
