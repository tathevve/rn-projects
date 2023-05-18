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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useToast} from 'react-native-toast-notifications';
import {EPath} from '../../../shared/models/enums/path.enum';

const Password = () => {
  const navigation = useNavigation();
  const toast = useToast();

  const methods = useForm<any>({
    mode: 'all',
  });

  const {
    handleSubmit,
    control,
    formState: {errors},
    reset,
  } = methods;

  const passChangeHandler = async (formData: any) => {
    const data = {...formData};

    const getUser: string | null = await AsyncStorage.getItem('user');
    const user = JSON.parse(getUser);
    console.log(user?.password, 'aa');
    console.log(data?.password, 'aass');
    if (user?.password === data?.password) {
      const newUser = {password: data?.newPassword};
      AsyncStorage.setItem('user', JSON.stringify(user), () => {
        AsyncStorage.mergeItem('user', JSON.stringify(newUser), () => {
          AsyncStorage.getItem('user', (err, result) => {
            console.log(result, err);
          });
        });
      });
      toast.show('Password changed', {
        type: 'success',
        placement: 'top',
        duration: 4000,
        animationType: 'slide-in',
      });
      navigation.navigate(EPath.ACCOUNT as never);
    } else {
      toast.show('Incorrect password', {
        type: 'danger',
        placement: 'top',
        duration: 4000,
        animationType: 'slide-in',
      });
    }
  };

  const deleteHandler = async (formData: any) => {
    const data = {...formData};
    const user = JSON.parse(getUser);
    const response = await fetch('http://10.0.2.2:5000/changepassword', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: user.email,
        current_password: user.password,
        new_password: data.newPassword,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      toast.show(data.message, {
        type: 'success',
        placement: 'top',
        duration: 4000,
        animationType: 'slide-in',
      });
    } else {
      toast.show('An error occurred: ' + response.status, {
        type: 'danger',
        placement: 'top',
        duration: 4000,
        animationType: 'slide-in',
      });
      throw new Error('Error: ' + response.status);
    }
  };

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
            name="password"
            labelIsVisible
            secureTextEntry
            control={control}
            isPassword
            placeholder="Current Password"
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
            onPress={handleSubmit(passChangeHandler)}
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
