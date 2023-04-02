/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Dimensions, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import BrandNames from './BrandNames';

const windowHeight = Dimensions.get('window').height;

const BrandsRoute = (): JSX.Element => {
  return (
    <ScrollView
      contentContainerStyle={{backgroundColor: 'white', height: windowHeight}}>
      <View
        style={{
          marginLeft: 17,
          marginRight: 17,
        }}>
        <View style={styles.typesOfSections}>
          <Text style={styles.typesText}>WOMEN</Text>
        </View>

        <Text>YOUR GO-TO BRANDS</Text>

        <View style={{alignItems: 'center', marginTop: 25}}>
          <BrandNames
            brandName="THERE WAS ONE"
            imagePath={require('../../../../assets/brands_2.png')}
          />
          <BrandNames
            brandName="Dion Lee"
            imagePath={require('../../../../assets/brands_2.png')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default BrandsRoute;

const styles = StyleSheet.create({
    typesOfSections: {
        marginTop: 25,
        marginBottom:13,
    },
    typesText: {
        fontWeight: '900',
        fontSize: 18,
        fontFamily: 'Mulish',
        letterSpacing: 2,
        textTransform:'uppercase',
    },
})