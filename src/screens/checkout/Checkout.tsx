import {View} from 'react-native';
import React from 'react';
import {IconButton, List} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Checkout = () => {
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={{marginHorizontal: 17}}>
        <View>
          <IconButton
            icon="window-close"
            // iconColor={MD3Colors.error50}
            // style={{
            // //   position: 'absolute',
            // //   top: 0,
            // //   left: 0,
            // //   height: 30,
            // //   width: 30,
            // //   zIndex: 2,
            // }}
            onPress={() => navigation.goBack()}
          />
          <View>
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
        </View>
      </View>
    </View>
  );
};

export default Checkout;
