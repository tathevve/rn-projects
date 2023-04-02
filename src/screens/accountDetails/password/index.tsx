import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {FormProvider, useForm} from 'react-hook-form';
import TextInputField from '../../../shared/TextInput/TextInputField';
import {
  inputMaxLengthLimit,
  inputMinLengthLimit,
  requiredField,
} from '../../../shared/models/validations/Validation';
import RNButton from '../../../shared/Button';

const Password = () => {
  const navigation = useNavigation();
  const methods = useForm<any>({
    mode: 'all',
  });

  const {
    handleSubmit,
    control,
    formState: {errors},
    reset,
  } = methods;

  return (
    <View style={styles.root}>
      <View style={styles.rootContainer}>
        <IconButton
          icon="arrow-left-thin"
          size={32}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.typesText}>Details & Password</Text>
        <FormProvider {...methods}>
          <TextInputField
            name="Current password"
            labelIsVisible
            secureTextEntry
            control={control}
            isPassword
            placeholder="Password"
            rules={{
              required: requiredField(),
              minLength: inputMinLengthLimit(8),
              maxLength: inputMaxLengthLimit(13),
            }}
            customInputStyles={styles.input}
            customPasswordStyles={styles.passwordIcon}
          />
          <TextInputField
            name="newPassword"
            labelIsVisible
            secureTextEntry
            control={control}
            isPassword
            placeholder="New password"
            rules={{
              required: requiredField(),
              minLength: inputMinLengthLimit(8),
              maxLength: inputMaxLengthLimit(13),
            }}
            customInputStyles={styles.input}
            customPasswordStyles={styles.passwordIconSecond}
          />
          <RNButton
            title="Confirm new password"
            onPress={() => {}}
            buttonStyle={styles.button}
            textStyle={styles.btnText}
          />
        </FormProvider>
      </View>
    </View>
  );
};

export default Password;

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
