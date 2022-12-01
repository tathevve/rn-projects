import {Dimensions, Text, View} from 'react-native';
import React from 'react';
import {IconButton, List} from 'react-native-paper';
import {useNavigation, useRoute} from '@react-navigation/native';

interface IRouteParams {
  totalPrice: number;
}

const Checkout = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as IRouteParams;

  return (
    <View style={{backgroundColor: 'white'}}>
      <View
        style={{marginHorizontal: 17, height: Dimensions.get('screen').height}}>
        <View style={{height: Dimensions.get('screen').height}}>
          <IconButton icon="window-close" onPress={() => navigation.goBack()} />
          <View
            style={{
              height: Dimensions.get('screen').height,
              justifyContent: 'space-between',
            }}>
            <View style={{height: '50%'}}>
              <List.Section>
                <List.Item
                  title="Delivery address"
                  titleStyle={{fontWeight: 'bold'}}
                  right={() => <List.Icon icon="arrow-right-thin" />}
                  onPress={() => console.log('aaa')}
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
                height: '50%',
                marginHorizontal: 17,
                justifyContent: 'space-between',
                // backgroundColor: 'red',
                flexDirection: 'row',
              }}>
              <Text style={{fontWeight: 'bold', color: 'black'}}>Total:</Text>
              <Text style={{color: 'black'}}>${params.totalPrice}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Checkout;
