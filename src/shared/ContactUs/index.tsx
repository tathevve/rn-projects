/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {EPath} from '../models/enums/path.enum';

const ContactUs = (): JSX.Element => {
  const navigation = useNavigation();

  return (
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
            onPress={() => navigation.navigate(EPath.ABOUT_US as never)}
          />
          <Text>By Phone</Text>
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
            onPress={() => navigation.navigate(EPath.ABOUT_US as never)}
          />
          <Text>By Email</Text>
        </View>
      </View>
      <Text style={styles.text}>Available Monday to Friday 9am - 6pm GMT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  typesText: {
    fontWeight: '900',
    fontSize: 18,
    fontFamily: 'Mulish',
    letterSpacing: 2,
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

export default ContactUs;
