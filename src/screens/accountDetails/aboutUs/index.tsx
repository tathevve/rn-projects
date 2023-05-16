import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import ContactUs from '../../../shared/ContactUs';
import {windowHeight, windowWidth} from '../../bottomPages/home/HomeRoute';

const AboutUs = () => {
  return (
    <ScrollView>
      <View style={styles.root}>
        <View>
          <Text style={styles.heroHeader}>our mission</Text>
          <Text style={styles.heroText}>
            Welcome to Theia, an online shop that takes inspiration from the
            powerful Greek goddess of sight and vision. Our mission is to
            empower women to feel confident, beautiful, and strong by offering
            high-quality products that enhance their natural beauty.
            <Text>
              Our slogan,
              <Text style={{fontWeight: 'bold'}}>
                "Feel yourself a goddess,"
              </Text>
              reflects our commitment to helping women embrace their inner
              goddess and feel confident and beautiful in their own skin.
            </Text>
          </Text>
        </View>
        <Text style={styles.about}>about</Text>

        <View style={styles.logo}>
          <Image
            style={{width: windowWidth, height: windowHeight / 3}}
            resizeMode="contain"
            source={require('../../../../assets/about1.jpg')}
          />
          <Text>
            At Theia, we offer a wide range of products, including makeup,
            skincare, hair care, and accessories.
          </Text>
        </View>

        <View style={styles.logo}>
          <Image
            style={{width: windowWidth, height: windowHeight / 2}}
            resizeMode="contain"
            source={require('../../../../assets/about3.jpeg')}
          />
          <Text>
            Off-White and Chicalo Bulls create capsule collection in tribute to
            Virgil Abloh for Theia Beat 008
          </Text>
        </View>

        <View style={styles.logo}>
          <Image
            style={{width: windowWidth, height: windowHeight / 2}}
            resizeMode="contain"
            source={require('../../../../assets/about2.jpg')}
          />
          <Text>
            We carefully curate our selection to ensure that every product we
            offer is of the highest quality and meets our customers' needs.{' '}
          </Text>
        </View>

        <View style={styles.logo}>
          <Image
            style={{width: windowWidth, height: windowHeight / 2}}
            resizeMode="contain"
            source={require('../../../../assets/about4.png')}
          />
          <Text>
            Theia and Outlier Ventures Now Accepting Apllications for Dream
            Assembly Base Comp Cohort Two
          </Text>
        </View>
        <ContactUs />
      </View>
    </ScrollView>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    paddingHorizontal: 17,
  },
  heroHeader: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 23,
    textAlign: 'center',
    paddingBottom: 30,
  },
  heroText: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Mulish',
  },
  about: {
    textTransform: 'capitalize',
    fontSize: 19,
    color: 'black',
    paddingTop: 30,
    textAlign: 'center',
  },
  logo: {
    alignItems: 'center',
  },
});
