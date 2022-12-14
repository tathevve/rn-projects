import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconButton, List} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {EPath} from '../../shared/models/enums/path.enum';
import {useSelector} from 'react-redux';
import {selectTotalPrice} from '../../redux/slicers/shoppingBagSlice';

const Checkout = () => {
  const navigation = useNavigation();
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <View style={styles.root}>
      <View
        style={{
          marginHorizontal: 17,
          height: Dimensions.get('window').height - 120,
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
                  description="Add a delivery address"
                />

                <List.Item
                  title="Delivery Method"
                  titleStyle={{fontWeight: 'bold'}}
                  right={() => <List.Icon icon="arrow-right-thin" />}
                  onPress={() => console.log('aaa')}
                  description="Select a delivery method"
                />
                <List.Item
                  title="Payment"
                  titleStyle={{fontWeight: 'bold'}}
                  right={() => <List.Icon icon="arrow-right-thin" />}
                  onPress={() => console.log('aaa')}
                  description="Select a payment method"
                />
              </List.Section>
            </View>
            <View
              style={{
                marginHorizontal: 17,
                justifyContent: 'space-between',
                // backgroundColor: 'red',
                flexDirection: 'row',
              }}>
              <Text style={{fontWeight: 'bold', color: 'black'}}>Total:</Text>
              <Text style={{color: 'black'}}>${totalPrice}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
  },
});
