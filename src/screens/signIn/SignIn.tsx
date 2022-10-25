/* eslint-disable react-native/no-inline-styles */
import {View, Text, Alert, StyleSheet} from 'react-native';
import React from 'react';
import RNButton from '../../shared/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TextInputField from '../../shared/TextInput/TextInputField';
import {
  emailValidation,
  inputMaxLengthLimit,
  inputMinLengthLimit,
  requiredField,
} from '../../shared/models/validations/Validation';
import {FormProvider, useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setUserData} from '../../redux/slicers/loginSlice';
import {IRegisterUser} from '../../shared/models/interfaces/user.interface';

interface IUserForm {
  email: string;
  password: string;
}

const defaultValues = {
  email: '',
  password: '',
};

const SignIn = (): JSX.Element => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const methods = useForm<IUserForm>({
    mode: 'all',
    defaultValues,
  });

  const {handleSubmit, control} = methods;

  const signIn = async (formData: IUserForm) => {
    try {
      const data = {...formData};
      console.log(data, 'data sign in');

      let user: string | null = await AsyncStorage.getItem('user');
      if (user) {
        let parsed: IRegisterUser = JSON.parse(user);
        console.log(parsed, 'parsed');
        if (data.email === parsed.email) {
          console.log(
            data.email,
            '   data.email    ',
            parsed.email,
            '   parsed.email   ',
          );
          dispatch(setUserData(parsed));
          Alert.alert('Success!', 'Logged in successfully');
          navigation.navigate('ThesisHome' as never);
        } else {
          console.log(
            data.email,
            '   data.email    ',
            parsed.email,
            '   parsed.emailf   ',
          );
        }
      }
    } catch (error: any) {
      Alert.alert(error);
    }
  };

  return (
    <View>
      {/* <ActionSheet ref={actionSheetRef}> */}
      {/* <Text>alo</Text> */}
      {/* </ActionSheet> */}

      <View>
        <Text style={{fontSize: 20}}> Sign In </Text>
      </View>
      <View>
        <FormProvider {...methods}>
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
            customInputStyles={styles.input}
          />
          <TextInputField
            placeholder="Password"
            name="password"
            labelIsVisible
            secureTextEntry
            control={control}
            isPassword
            rules={{
              required: requiredField(),
              minLength: inputMinLengthLimit(8),
              maxLength: inputMaxLengthLimit(13),
            }}
            customInputStyles={styles.input}
          />
          <RNButton
            title="Sign In"
            onPress={handleSubmit(signIn)}
            buttonStyle={styles.button}
          />
        </FormProvider>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
  input: {
    marginBottom: 30,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingLeft: 15,
  },
});

export default SignIn;
