import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { FormProvider, useForm } from 'react-hook-form';
import TextInputField from '../../../shared/TextInput/TextInputField';
import {
  inputMaxLengthLimit,
  inputMinLengthLimit,
  requiredField,
} from '../../../shared/models/validations/Validation';
import RNButton from '../../../shared/Button';

const DeleteAccount = () => {
  const navigation = useNavigation();
  const methods = useForm<any>({
    mode: 'all',
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = methods;

  const deleteAccountHandler = () => {
    
  }

  return (
    <View style={styles.root}>
      <View style={styles.rootContainer}>
        <IconButton
          icon="arrow-left-thin"
          size={32}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.typesText}>Request To Delete</Text>
        <FormProvider {...methods}>
          <TextInputField
            name="firstName"
            labelIsVisible
            control={control}
            isPassword
            placeholder="First Name"
            rules={{
              required: requiredField(),
              minLength: inputMinLengthLimit(8),
              maxLength: inputMaxLengthLimit(13),
            }}
            customInputStyles={styles.input}
            customPasswordStyles={styles.passwordIcon}
          />
          <TextInputField
            name="lastName"
            labelIsVisible
            control={control}
            isPassword
            placeholder="Last Name"
            rules={{
              required: requiredField(),
              minLength: inputMinLengthLimit(8),
              maxLength: inputMaxLengthLimit(13),
            }}
            customInputStyles={styles.input}
            customPasswordStyles={styles.passwordIcon}
          />
          <TextInputField
            name="email"
            labelIsVisible
            control={control}
            isPassword
            placeholder="Email"
            rules={{  
              required: requiredField(),
              minLength: inputMinLengthLimit(8),
              maxLength: inputMaxLengthLimit(13),
            }}
            customInputStyles={styles.input}
            customPasswordStyles={styles.passwordIconSecond}
          />
          <RNButton
            title="Submit"
            onPress={() => deleteAccountHandler()}
            buttonStyle={styles.button}
            textStyle={styles.btnText}
          />
        </FormProvider>
      </View>
    </View>
  );
};

export default DeleteAccount;

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    height: Dimensions?.get('window').height,
  },
  rootContainer: {
    zIndex: 2,
    marginHorizontal: 17,
    fontFamily: 'Mulish',
    paddingRight: 10,
    width: '90%',
  },
  typesText: {
    fontWeight: '900',
    fontSize: 18,
    fontFamily: 'Mulish',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  input: {
    marginBottom: 30,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingLeft: 15,
    paddingBottom: 0,
  },
  passwordIcon: {
    position: 'absolute',
    right: 20,
    top: 95,
  },
  passwordIconSecond: {
    position: 'absolute',
    right: 20,
    top: 162,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '100%',
    height: 35,
    marginTop: 35,
    borderStyle: 'solid',
    color: 'black',
    marginBottom: 15,
  },
  btnText: {
    color: 'white',
  },
});
