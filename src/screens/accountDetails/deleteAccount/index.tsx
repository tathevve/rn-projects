import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
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
import {selectUserData, setUserData} from '../../../redux/slicers/loginSlice';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useToast} from 'react-native-toast-notifications';
import {EPath} from '../../../shared/models/enums/path.enum';

const DeleteAccount = () => {
  const navigation = useNavigation();
  const user = useSelector(selectUserData);
  const dispatch = useDispatch();
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

  const deleteAccountHandler = async (formData: any) => {
    const data = {
      ...formData,
    };
    if (data?.password === data?.passwordEntry) {
      await AsyncStorage.removeItem('user');
      await dispatch(setUserData({}));
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

  useEffect(() => {
    if (user) {
      reset({...user});
      //   reset({...user});
    }
  }, [reset, user]);
  console.log(user, 'user');

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
            name="name"
            labelIsVisible
            control={control}
            placeholder="First Name"
            rules={{
              required: requiredField(),
            }}
            customInputStyles={styles.input}
          />
          <TextInputField
            name="email"
            labelIsVisible
            control={control}
            placeholder="Email"
            rules={{
              required: requiredField(),
            }}
            customInputStyles={styles.input}
          />
          <TextInputField
            name="passwordEntry"
            labelIsVisible
            control={control}
            isPassword
            secureTextEntry
            placeholder="Password"
            rules={{
              required: requiredField(),
              minLength: inputMinLengthLimit(8),
              maxLength: inputMaxLengthLimit(13),
            }}
            customInputStyles={styles.input}
            customPasswordStyles={styles.passwordIcon}
          />
          <RNButton
            title="Submit"
            onPress={handleSubmit(deleteAccountHandler)}
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
    top: 227,
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
