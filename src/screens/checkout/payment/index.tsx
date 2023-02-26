/* eslint-disable react-native/no-inline-styles */
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
// import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import TextInputField from '../../../shared/TextInput/TextInputField';
import RNButton from '../../../shared/Button';
import {useNavigation} from '@react-navigation/native';
import {EPath} from '../../../shared/models/enums/path.enum';
import {requiredField} from '../../../shared/models/validations/Validation';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../../redux';
import {
  selectShippingData,
  setShippingData,
} from '../../../redux/slicers/shippingAddressSlice';
import {IconButton} from 'react-native-paper';
import firstSliderFirst from '../../../../assets/firstSliderFirst.png';

interface IShippingAddress {
  firstName: string;
  lastName: string;
  destinationRegion: string;
  addressOne: string;
  addressTwo?: string;
  addressThree?: string;
  city: string;
  state?: string;
  postalCode: string;
  phone: string | number;
}

const Payment = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const shippingData = useSelector(selectShippingData);
  const methods = useForm<IShippingAddress>({
    mode: 'all',
  });

  const {
    handleSubmit,
    control,
    formState: {errors},
    reset,
  } = methods;

  useEffect(() => {
    if (shippingData) {
      reset({...shippingData});
    }
  }, [reset, shippingData]);

  const handleSubmitAddress = (formData: IShippingAddress) => {
    console.log('formData', formData);
    dispatch(setShippingData(formData));
    navigation.navigate(EPath.CHECKOUT as never);
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <IconButton
          icon="arrow-left-thin"
          // style={{
          //   height: 20,
          // }}
          size={32}
          onPress={() => navigation.goBack()}
        />
        <FormProvider {...methods}>
          <TextInputField
            placeholder="Card Number"
            name="cardNumber"
            labelIsVisible
            secureTextEntry
            control={control}
            rules={{
              required: requiredField(),
              // pattern: emailValidation(),
            }}
            errors={errors}
            props={{maxLength: 100}}
            customInputStyles={styles.input}
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">
            //       <AccountCircle />
            //     </InputAdornment>
            //   ),
            // }}
          />
          <TextInputField
            placeholder="Name on card"
            name="nameOnCard"
            labelIsVisible
            secureTextEntry
            control={control}
            rules={{
              required: requiredField(),
              // pattern: emailValidation(),
            }}
            errors={errors}
            props={{maxLength: 50}}
            customInputStyles={styles.input}
          />
          <View style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
            <TextInputField
              placeholder="Expire Date"
              name="expireDate"
              labelIsVisible
              secureTextEntry
              control={control}
              rules={{
                required: requiredField(),
                // pattern: emailValidation(),
              }}
              errors={errors}
              props={{maxLength: 50}}
              customInputStyles={styles.inputItem}
            />
            {/* <DesktopDatePicker
              label="Expire Date"
              inputFormat="MM/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={params => <TextField {...params} />}
            /> */}
            <TextInputField
              placeholder="CVV"
              name="cvv"
              labelIsVisible
              secureTextEntry
              control={control}
              rules={{
                required: requiredField(),
                // pattern: emailValidation(),
              }}
              errors={errors}
              props={{maxLength: 50}}
              customInputStyles={styles.inputItem}
            />
          </View>
          <View>
            <Image
              style={{width: 200, height: 200}}
              resizeMode="contain"
              source={firstSliderFirst}
            />
          </View>
          <RNButton
            title="Save And Continue"
            onPress={handleSubmit(handleSubmitAddress)}
            buttonStyle={styles.button}
            textStyle={styles.btnText}
          />
        </FormProvider>
        {/* <Image
          resizeMode="contain"
          style={{
            width: '50%',
            height: '90%',
            // position:'absolute'
          }}
          source={Mastercard}
        /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    paddingHorizontal: 17,
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
    marginBottom: 15,
  },
  btnText: {
    color: 'white',
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
  inputText: {
    fontSize: 12,
    color: 'grey',
    marginTop: -25,
  },
  inputItem: {
    width: '50%',
    borderBottomWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingLeft: 15,
    paddingBottom: 0,
    marginBottom: 30,
  },
});

export default Payment;
