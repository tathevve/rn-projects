import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import TextInputField from '../../../shared/TextInput/TextInputField';
import RNButton from '../../../shared/Button';
import {useNavigation} from '@react-navigation/native';
import {EPath} from '../../../shared/models/enums/path.enum';
import {
  onlyNumbers,
  requiredField,
} from '../../../shared/models/validations/Validation';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../../redux';
import {
  selectShippingData,
  setShippingData,
} from '../../../redux/slicers/shippingAddressSlice';
import {IconButton} from 'react-native-paper';

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

const DeliveryAddress = () => {
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
            placeholder="First Name"
            name="firstName"
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
          />
          <TextInputField
            placeholder="Last Name"
            name="lastName"
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
          />
          <TextInputField
            placeholder="Destination/Region"
            name="destinationRegion"
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
          />
          <TextInputField
            placeholder="Address line 1"
            name="addressOne"
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
          />
          <TextInputField
            placeholder="Address line 2(optional)"
            name="addressTwo"
            labelIsVisible
            secureTextEntry
            control={control}
            props={{maxLength: 100}}
            customInputStyles={styles.input}
          />
          <TextInputField
            placeholder="Address line 3(optional)"
            name="addressThree"
            labelIsVisible
            secureTextEntry
            control={control}
            errors={errors}
            props={{maxLength: 100}}
            customInputStyles={styles.input}
          />
          <TextInputField
            placeholder="City"
            name="city"
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
          />
          <TextInputField
            placeholder="State(optional)"
            name="state"
            labelIsVisible
            secureTextEntry
            control={control}
            errors={errors}
            props={{maxLength: 100}}
            customInputStyles={styles.input}
          />
          <TextInputField
            placeholder="Postal Code"
            name="postalCode"
            labelIsVisible
            secureTextEntry
            control={control}
            rules={{
              required: requiredField(),
            }}
            errors={errors}
            props={{maxLength: 100}}
            customInputStyles={styles.input}
          />
          <TextInputField
            placeholder="Phone"
            name="phone"
            labelIsVisible
            secureTextEntry
            control={control}
            rules={{
              required: requiredField(),
              validate: (value: string) => onlyNumbers(value),
            }}
            errors={errors}
            props={{maxLength: 100}}
            customInputStyles={styles.input}
          />
          <Text style={styles.inputText}>
            We'll only contact you by phone if there's a problem with your order
          </Text>
          <RNButton
            title="Save And Continue"
            onPress={handleSubmit(handleSubmitAddress)}
            buttonStyle={styles.button}
            textStyle={styles.btnText}
          />
        </FormProvider>
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
});

export default DeliveryAddress;
