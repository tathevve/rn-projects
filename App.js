/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {

  return (
    <View style={styles.body}>
      <View style={styles.firstRow}>
        <View style={styles.view1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>
      <View style={styles.view4}>
        <Text style={styles.text}>4</Text>
      </View>
      <View style={styles.view5}>
        <Text style={styles.text}>5</Text>
      </View>
      <View style={styles.row2}>
        <View style={styles.view6}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.view7}>
          <Text style={styles.text}>7</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  firstRow: {
    display: 'flex',
    flexDirection: 'row',

  },
  view1: {
    flex: 1,
    backgroundColor: '#CCC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex: 2,
    backgroundColor: '#CBC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex: 3,
    backgroundColor: '#CCA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view4: {
    backgroundColor: '#CAA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view5: {
    backgroundColor: '#CAC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row2:{
    display:'flex',
    flexDirection:'row',
    alignItems:'stretch',
    justifyContent:'center'
  },  
  view6: {
    backgroundColor: '#AAF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view7: {
    backgroundColor: '#CAB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40
  },
});

export default App;
