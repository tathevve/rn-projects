/* eslint-disable react-native/no-inline-styles */
import {View, Text, Alert, StyleSheet} from 'react-native';
import React from 'react';
import RNButton from '../../shared/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FormProvider, useForm, useWatch} from 'react-hook-form';
import TextInputField from '../../shared/TextInput/TextInputField';
import {
  emailValidation,
  inputMaxLengthLimit,
  inputMinLengthLimit,
  requiredField,
} from '../../shared/models/validations/Validation';
import {useDispatch} from 'react-redux';
import {setUserData} from '../../redux/slicers/loginSlice';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {IRegisterUser} from '../../shared/models/interfaces/user.interface';

const defaultValues: IRegisterUser = {
  email: '',
  password: '',
  passwordConfirm: '',
  name: '',
  surname: '',
};

const Register = (): JSX.Element => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const methods = useForm<IRegisterUser>({
    mode: 'all',
    defaultValues,
  });

  const {handleSubmit, control} = methods;

  const watchPassword = useWatch({
    name: 'password',
    control,
  });

  const userSignup = async (formData: IRegisterUser) => {
    const data = {
      ...formData,
    };

    const userObj = {
      email: data.email,
      password: data.password,
      name: data.name,
    };

    console.log(data, ' data');
    if (!(data.email && data.password)) {
      Alert.alert('warning!', 'ERROR');
    } else {
      try {
        await AsyncStorage.setItem('user', JSON.stringify(userObj));
        await dispatch(setUserData(userObj));
        navigation.navigate('ThesisHome' as never);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      {/* <ActionSheet ref={actionSheetRef}> */}
      {/* <Text>alo</Text> */}
      {/* </ActionSheet> */}

      <View style={styles.headerWrapper}>
        <View style={styles.closeIcon}>
          <IconButton
            icon="close"
            // iconColor={MD3Colors.error50}
            size={25}
            onPress={() => navigation.goBack()}
          />
        </View>
        <Text style={styles.header}> Create an account </Text>
      </View>
      <View style={styles.inputAreas}>
        <FormProvider {...methods}>
          <TextInputField
            placeholder="First Name"
            name="name"
            labelIsVisible
            secureTextEntry
            control={control}
            props={{maxLength: 50}}
            rules={{
              required: requiredField(),
              minLength: inputMinLengthLimit(2),
            }}
          />
          <TextInputField
            placeholder="Last Name"
            name="surname"
            labelIsVisible
            secureTextEntry
            control={control}
            props={{maxLength: 50}}
            rules={{
              required: requiredField(),
              minLength: inputMinLengthLimit(2),
            }}
          />
          <TextInputField
            placeholder="Email"
            name="email"
            labelIsVisible
            secureTextEntry
            control={control}
            rules={{
              required: requiredField(),
              pattern: emailValidation(),
            }}
            props={{maxLength: 100}}
          />
          <TextInputField
            name="password"
            labelIsVisible
            secureTextEntry
            control={control}
            placeholder="Password"
            rules={{
              required: requiredField(),
              minLength: inputMinLengthLimit(8),
              maxLength: inputMaxLengthLimit(13),
            }}
          />
          <TextInputField
            labelIsVisible
            secureTextEntry
            control={control}
            placeholder="Password confirmation"
            isPassword
            name="passwordConfirm"
            rules={{
              required: requiredField(),
              validate: (value: string) =>
                value === watchPassword || 'password_is_not_match',
            }}
          />

          <Text style={{marginVertical: 25, color: 'black'}}>
            By registering you agree with our Terms & Conditions and Privacy
            Policy
          </Text>

          <RNButton title="Register" onPress={handleSubmit(userSignup)} />
        </FormProvider>
      </View>
      <RNButton
        title="Already have an account?"
        onPress={() => navigation.navigate('SignIn' as never)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputAreas: {},
  text: {
    marginBottom: 15,
  },
  headerWrapper: {
    // width: '100%',
    borderBottomWidth: 4,
    borderBottomColor: 'white',
    paddingBottom: 5,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-around',
  },
  header: {
    fontSize: 25,
    width: '70%',
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Times New Roman',
  },
  closeIcon: {
    width: '20%',
  },
});

export default Register;
