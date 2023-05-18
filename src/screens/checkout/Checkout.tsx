import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconButton, List} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {EPath} from '../../shared/models/enums/path.enum';
import {useSelector} from 'react-redux';
import {
  selectBagItemsData,
  selectTotalPrice,
} from '../../redux/slicers/shoppingBagSlice';
import {selectShippingData} from '../../redux/slicers/shippingAddressSlice';
import {selectPayment} from '../../redux/slicers/paymentSlice';
import RNButton from '../../shared/Button';

const Checkout = () => {
  const navigation = useNavigation();
  const totalPrice = useSelector(selectTotalPrice);
  const shippingData = useSelector(selectShippingData);
  const payment = useSelector(selectPayment);
  const bagItems = useSelector(selectBagItemsData);

  return (
    <ScrollView style={styles.root}>
      <View
        style={{
          marginHorizontal: 17,
          height: Dimensions.get('window').height - 50,
        }}>
        <View style={{flex: 1}}>
          <IconButton icon="window-close" onPress={() => navigation.goBack()} />
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <View>
              <List.Section>
                <List.Item
                  title="Delivery address"
                  titleStyle={{fontWeight: 'bold'}}
                  right={() => <List.Icon icon="arrow-right-thin" />}
                  onPress={() =>
                    navigation.navigate(EPath.DELIVERY_ADDRESS as never)
                  }
                  description={
                    shippingData?.addressOne
                      ? `${shippingData?.addressOne}, ${shippingData?.city}-${shippingData?.destinationRegion}`
                      : 'Add a delivery address'
                  }
                />
                <List.Item
                  title="Delivery Method"
                  titleStyle={{fontWeight: 'bold'}}
                  right={() => <List.Icon icon="arrow-right-thin" />}
                  onPress={() =>
                    navigation.navigate(EPath.DELIVERY_METHOD as never)
                  }
                  description={
                    shippingData?.addressOne
                      ? `${bagItems.length} piece(s)`
                      : 'Select a delivery method'
                  }
                  disabled={!shippingData?.addressOne}
                />
                {/* <List.Item
                  title="Payment"
                  titleStyle={{fontWeight: 'bold'}}
                  right={() => <List.Icon icon="arrow-right-thin" />}
                  onPress={() => navigation.navigate(EPath.PAYMENT as never)}
                  description={
                    payment?.cardNumber
                      ? `Visa (**** ${payment?.cardNumber.slice(12)})`
                      : 'Select a payment method'
                  }
                /> */}
              </List.Section>
            </View>
            <View
              style={{
                marginHorizontal: 17,
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Text style={{fontWeight: 'bold', color: 'black'}}>Total:</Text>
              <Text style={{color: 'black'}}>${totalPrice}</Text>
            </View>
          </View>
          <RNButton
            title="Place Order"
            onPress={() => {
              // if (shippingData?.addressOne && payment?.cardNumber) {
              //   navigation.navigate(EPath.SUCCESS('success') as never);
              // }else {}
              // navigation.navigate(EPath.PAYMENT_STATUS, {
              //   type: 'success',
              // } as never);
              navigation.navigate(EPath.PAYMENT as never);
            }}
            buttonStyle={styles.button}
            textStyle={styles.btnText}
            disabled={!shippingData?.addressOne}
            disabledStyles={styles.disabledBtn}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
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
    marginBottom: 20,
  },
  btnText: {
    color: 'white',
  },
  disabledBtn: {
    backgroundColor: '#ededed',
    borderColor: '#ededed',
    textDecorationColor: 'black',
    marginBottom: 20,
  },
});
