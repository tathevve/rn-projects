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
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
  TextInput,
} from 'react-native';


const App = () => {

  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const onPressHandler = () => {
    setSubmitted(!submitted)
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Please write your name
      </Text>
      <TextInput style={styles.input}
        placeholder='e.g John'
        
        onChangeText={(value) => setName(value)}
      />
      <Button
        title={submitted ? 'clear' : 'Alo'}
        onPress={onPressHandler}
      />
      {
        submitted ?
          <Text style={styles.text}>
            Your are registered as {name}
          </Text>
          : null
      }

    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'
  },

  text: {
    fontSize: 20,
    margin: 10
  },
  input: {
    borderWidth: 1,
    width: 200,
    borderColor: 'grey',
    borderRadius: 50,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 15,

  }
});

export default App;
