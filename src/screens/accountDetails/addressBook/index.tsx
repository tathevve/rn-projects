import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import RNButton from '../../../shared/Button';
import {EPath} from '../../../shared/models/enums/path.enum';
import {selectShippingData} from '../../../redux/slicers/shippingAddressSlice';
import {selectUserData} from '../../../redux/slicers/loginSlice';

const AddressBook = () => {
  const navigation = useNavigation();
  const shippingData = useSelector(selectShippingData);
  const user = useSelector(selectUserData);

  return (
    <View>
      <View style={styles.root}>
        {shippingData?.addressOne ? (
          <View style={styles.billingSection}>
            <Text style={styles.textStyle}>
              {user.name} {user.surname}
            </Text>
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
          </View>
        ) : (
          <>
            <View style={styles.noActiveOrderSection}>
              <Text style={styles.boldText}>Nothing to see here</Text>
              <Text style={styles.description}>
                There is no shipping address. Please, return and continue to
                shop.
              </Text>
              <RNButton
                title="Shop Now"
                onPress={() => navigation.navigate(EPath.ALLITEMS as never)}
                buttonStyle={styles.editButton}
              />
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default AddressBook;

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    paddingHorizontal: 17,
    height: '100%',
  },
  billingSection: {
    marginTop: 35,
  },
  textStyle: {
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 15,
  },
  editButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '30%',
    height: 35,
    marginTop: 10,
    borderStyle: 'solid',
    marginBottom: 15,
  },
  noActiveOrderSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 13,
  },
  boldText: {
    fontWeight: '900',
    fontSize: 23,
    fontFamily: 'Mulish',
    color: 'black',
  },
  description: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
});
