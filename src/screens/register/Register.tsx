/* eslint-disable react-native/no-inline-styles */
import {View, Text, Alert, StyleSheet} from 'react-native';
import React from 'react';
import RNButton from '../../shared/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FormProvider, useForm} from 'react-hook-form';
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
import {EPath} from '../../shared/models/enums/path.enum';

const defaultValues: IRegisterUser = {
  email: '',
  password: '',
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

  // const watchPassword = useWatch({
  //   name: 'password',
  //   control,
  // });

  const userSignup = async (formData: IRegisterUser) => {
    const data = {
      ...formData,
    };

    const userObj = {
      email: data.email,
      password: data.password,
      name: data.name,
      surname: data.surname
    };

    if (!(data.email && data.password)) {
      Alert.alert('warning!', 'ERROR');
    } else {
      try {
        await AsyncStorage.setItem('user', JSON.stringify(userObj));
        await dispatch(setUserData(userObj));
        navigation.navigate(EPath.PARENTHOME as never);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={{marginHorizontal: 17}}>
        <View style={styles.headerWrapper}>
          <View style={{marginBottom: 35}}>
            <IconButton
              icon="arrow-left-thin"
              // iconColor={MD3Colors.error50}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: 30,
                width: 30,
                zIndex: 2,
              }}
              onPress={() => navigation.goBack()}
            />
          </View>
          <Text style={styles.header}> Create an account </Text>
        </View>
        <View>
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
              customInputStyles={styles.input}
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
              customInputStyles={styles.input}
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
              customInputStyles={styles.input}
            />
            <TextInputField
              name="password"
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
            {/* <TextInputField
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
          /> */}

            <Text style={{marginVertical: 25, color: 'black'}}>
              By registering you agree with our Terms & Conditions and Privacy
              Policy
            </Text>

            <RNButton
              title="Register"
              onPress={handleSubmit(userSignup)}
              buttonStyle={styles.button}
            />
          </FormProvider>
        </View>
        <RNButton
          title="Already have an account?"
          onPress={() => navigation.navigate(EPath.SIGNIN as never)}
          buttonStyle={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  passwordIcon: {
    position: 'absolute',
    right: 20,
    top: 255,
  },
});

export default Register;
