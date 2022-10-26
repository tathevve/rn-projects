/* eslint-disable react-native/no-inline-styles */
import {View, StyleSheet} from 'react-native';
import React from 'react';
import {IconButton, Text} from 'react-native-paper';
import RNButton from '../../../shared/Button';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {selectUserData, setUserData} from '../../../redux/slicers/loginSlice';
import {useState, useCallback} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {List} from 'react-native-paper';
import {IUser} from '../../../shared/models/interfaces/user.interface';
import {selectLocation} from '../../../redux/slicers/app';

const AccountRoute = (): JSX.Element => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loggedUserData = useSelector(selectUserData);
  const [data, setData] = useState<IUser | null>(null);
  const locationData = useSelector(selectLocation);

  console.log(loggedUserData, 'loggedUserData');
  console.log(locationData, 'location');

  useFocusEffect(
    useCallback(() => {
      setData(loggedUserData);
      return () => setData(null);
    }, [loggedUserData]),
  );

  console.log(data, 'data');

  const signOut = (): void => {
    setData(null);
    dispatch(setUserData(null));
  };

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View
        style={{
          display: 'flex',
          marginLeft: 17,
          marginRight: 17,
        }}>
        <View>
          <View>
            <View>
              <Text style={styles.typesText}>{data?.name ?? 'Me'}</Text>
            </View>
            {!data?.name ? (
              <View>
                <View>
                  <Text style={styles.text}>LET’S GET PERSONAL</Text>
                </View>
                <View>
                  <Text style={styles.text}>
                    Access your Bag & Wishlist on any of your devices
                  </Text>
                </View>
                <View>
                  <RNButton
                    title="Register"
                    onPress={() => {
                      navigation.navigate('Register' as never);
                    }}
                    buttonStyle={styles.button}
                  />
                  <RNButton
                    title="Sign In"
                    onPress={() => {
                      navigation.navigate('SignIn' as never);
                    }}
                    buttonStyle={styles.button}
                  />
                </View>
              </View>
            ) : (
              <View>
                <View>
                  <List.Section>
                    <List.Subheader style={styles.sectionHeader}>
                      My Account
                    </List.Subheader>
                    <List.Item
                      title="Orders"
                      right={() => <List.Icon icon="arrow-right-thin" />}
                      onPress={() => console.log('aaa')}
                    />

                    <List.Item
                      title="Details & Password"
                      right={() => <List.Icon icon="arrow-right-thin" />}
                      onPress={() => console.log('aaa')}
                    />
                    <List.Item
                      title="Refer a friend"
                      right={() => <List.Icon icon="arrow-right-thin" />}
                      onPress={() => console.log('aaa')}
                    />
                  </List.Section>
                </View>
              </View>
            )}
          </View>
          <View>
            {/* <View>
              <List.Section>
                <List.Subheader style={styles.sectionHeader}>
                  My Location
                </List.Subheader>
                <List.Item
                  title="Armenia (USD)"
                  style={{height: 60}}
                  left={() => (
                    <Image
                      style={{marginTop: 18}}
                      source={require('../../../../assets/Armenia.png')}
                    />
                  )}
                  right={() => <List.Icon icon="arrow-right-thin" />}
                  onPress={() => console.log('aaa')}
                />
              </List.Section>
            </View> */}
            <View>
              <Text style={styles.text}>
                This location defines your language and currency
              </Text>
            </View>
          </View>
          {data?.name ? (
            <View>
              <List.Section>
                <List.Subheader style={styles.sectionHeader}>
                  Orders
                </List.Subheader>
                <List.Item
                  title="About Us"
                  right={() => <List.Icon icon="arrow-right-thin" />}
                  onPress={() => console.log('aaa')}
                />
                <List.Item
                  title="Terms & Conditions"
                  right={() => <List.Icon icon="arrow-right-thin" />}
                  onPress={() => console.log('aaa')}
                />
                <List.Item
                  title="Privacy Policy"
                  right={() => <List.Icon icon="arrow-right-thin" />}
                  onPress={() => console.log('aaa')}
                />
              </List.Section>
            </View>
          ) : null}
          <View
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <Text style={styles.sectionHeader}>Contact us</Text>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                flexDirection: 'row',
                marginTop: 7,
                marginBottom: 13,
              }}>
              <View
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  width: '50%',
                }}>
                <IconButton
                  icon="phone-outline"
                  // iconColor={MD3Colors.error50}
                  size={25}
                  onPress={() => console.log('phone')}
                />
                <Text>phone</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '50%',
                }}>
                <IconButton
                  icon="email-outline"
                  // iconColor={MD3Colors.error50}
                  size={25}
                  onPress={() => console.log('email')}
                />
                <Text>email</Text>
              </View>
            </View>
            <Text style={styles.text}>
              Available Monday to Friday 9am - 6pm GMT
            </Text>
          </View>
          {data?.name ? (
            <View>
              <Text style={styles.textStyle}>Not {data?.name}?</Text>
              <RNButton
                title="Sign Out"
                onPress={signOut}
                buttonStyle={styles.button}
              />
            </View>
          ) : null}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  typesText: {
    fontWeight: '900',
    fontSize: 18,
    fontFamily: 'Mulish',
    letterSpacing: 3,
    textTransform: 'uppercase',
  },

  text: {
    marginBottom: 15,
  },
  sectionHeader: {
    fontWeight: '900',
    fontSize: 17,
    fontFamily: 'Mulish',
  },
  textStyle: {
    marginBottom: 15,
    fontWeight: '900',
    textAlign: 'center',
    fontSize: 17,
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
});

export default AccountRoute;
