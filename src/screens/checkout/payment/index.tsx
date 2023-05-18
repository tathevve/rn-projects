import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
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
import {selectShippingData} from '../../../redux/slicers/shippingAddressSlice';
import {IconButton} from 'react-native-paper';
import Mastercard from '../../../../assets/Mastercard.png';
import Visa from '../../../../assets/Visa.png';
import GooglePay from '../../../../assets/GooglePay.png';
import ApplePay from '../../../../assets/ApplePay.png';
import Line from '../../../shared/Line';
import {selectPayment, setPayment} from '../../../redux/slicers/paymentSlice';

interface IPayment {
  cardNumber: number | string;
  nameOnCard: string;
  expireDate: string;
  cvv: number;
}

const Payment = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const shippingData = useSelector(selectShippingData);
  const payment = useSelector(selectPayment);
  const methods = useForm<IPayment>({
    mode: 'all',
  });

  const {
    handleSubmit,
    control,
    formState: {errors},
    reset,
  } = methods;

  useEffect(() => {
    if (payment) {
      reset({...payment});
    }
  }, [reset, payment]);

  const handleSubmitPayment = (formData: IPayment) => {
    dispatch(setPayment(formData));
    // navigation.navigate(EPath.CHECKOUT as never);
    navigation.navigate(EPath.PAYMENT_STATUS, {
      type: 'success',
    } as never);
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <IconButton
          icon="arrow-left-thin"
          size={32}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.typesOfSections}>
          <Text style={styles.typesText}>
            Pay with card
            <View>
              <Line />
            </View>
          </Text>
        </View>
        <FormProvider {...methods}>
          <Text style={styles.cardDetailsText}>Card details</Text>
          <TextInputField
            placeholder="Card Number"
            name="cardNumber"
            labelIsVisible
            secureTextEntry
            control={control}
            rules={{
              required: requiredField(),
              validate: (value: string) => onlyNumbers(value),
            }}
            errors={errors}
            props={{maxLength: 16}}
            customInputStyles={styles.input}
          />
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{width: 90, height: 80}}
              resizeMode="contain"
              source={Mastercard}
            />
            <Image
              style={{width: 90, height: 80}}
              resizeMode="contain"
              source={Visa}
            />
            <Image
              style={{width: 90, height: 80}}
              resizeMode="contain"
              source={GooglePay}
            />
            <Image
              style={{width: 90, height: 80}}
              resizeMode="contain"
              source={ApplePay}
            />
          </View>
          <TextInputField
            placeholder="Name on card"
            name="nameOnCard"
            labelIsVisible
            secureTextEntry
            control={control}
            rules={{
              required: requiredField(),
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
              }}
              // errors={errors}
              props={{maxLength: 50}}
              customInputStyles={styles.inputItem}
            />

            <TextInputField
              placeholder="CVV"
              name="cvv"
              labelIsVisible
              secureTextEntry
              control={control}
              rules={{
                required: requiredField(),
                validate: (value: string) => onlyNumbers(value),
              }}
              // errors={errors}
              props={{maxLength: 3}}
              customInputStyles={styles.inputItem}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <IconButton size={20} icon="alert-circle-outline" />
            <Text style={{fontSize: 12, marginTop: 10}}>
              Your CVV is the last 3 digits in the signature strip on the back
              of your card
            </Text>
          </View>
          <Line />
          <View style={styles.billingSection}>
            <Text style={styles.textStyle}>Billing Address</Text>
            <View>
              <Text>{shippingData?.addressOne}</Text>
              {shippingData?.addressTwo ? (
                <Text>{shippingData?.addressTwo}</Text>
              ) : null}

              <Text>
                {shippingData?.city} - {shippingData?.destinationRegion}
              </Text>
              <RNButton
                title="Edit"
                onPress={() =>
                  navigation.navigate(EPath.DELIVERY_ADDRESS as never)
                }
                buttonStyle={styles.editButton}
              />
            </View>
            <Line />
          </View>
          <RNButton
            title="Save And Continue"
            onPress={handleSubmit(handleSubmitPayment)}
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
  typesOfSections: {
    marginTop: 25,
    marginBottom: 13,
  },
  typesText: {
    fontWeight: '900',
    fontSize: 18,
    fontFamily: 'Mulish',
    letterSpacing: 2,
  },
  cardDetailsText: {
    fontWeight: '900',
    fontSize: 15,
    fontFamily: 'Mulish',
    letterSpacing: 2,
    marginBottom: 17,
    marginTop: 20,
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
  editButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '20%',
    height: 35,
    marginTop: 10,
    borderStyle: 'solid',
    marginBottom: 15,
  },
  btnText: {
    color: 'white',
  },
  textStyle: {
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 15,
  },
  input: {
    marginBottom: 10,
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
    marginBottom: 10,
  },
  billingSection: {
    marginTop: 35,
  },
});

export default Payment;
