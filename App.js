import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Modal,
  Image,
  ImageBackground,
} from 'react-native';
import Knopka from './src/CustomButton';
import Header from './src/Header';


const App = () => {

  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [showWarning, setShowWarning] = useState(false)
  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted)

    } else {
      // Alert.alert('Warning', 'ak', [
      //   {text:'OKa', onPress: () => console.warn('Okaas')}
      // ], {cancelable: true})

      // ToastAndroid.showWithGravityAndOffset(
      //   'zz',
      //   ToastAndroid.LONG,
      //   ToastAndroid.CENTER,
      //   100,
      //   200
      // )
      setShowWarning(true)
    }
  }

  return (
    <ImageBackground
      style={styles.body}
      source={{ uri: "https://reactjs.org/logo-og.png" }} resizeMode="cover"
    >
      <Header />
      <Modal
        transparent
        visible={showWarning}
        onRequestClose={() => setShowWarning(false)}
        animationType='slide'
      // hardwareAccelerated
      >
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>WARNING</Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>warning warning warning</Text>
            </View>
            <Pressable
              onPress={() => setShowWarning(false)}
              style={styles.warning_button}
              android_ripple={{ color: '#fff' }}
            >
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View>
        </View>

      </Modal>
      <Text style={styles.text}>
        Please write your name
      </Text>
      <TextInput style={styles.input}
        placeholder='e.g John'

        onChangeText={(value) => setName(value)}
      />
      {/* <Button
        title={}
        onPress={onPressHandler}
      /> */}
      {/* <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#CAC' : '#ABA' },
          styles.button
        ]}
      >
        <Text style={styles.text}> {submitted ? 'clear' : 'Alo'} </Text>
      </Pressable> */}

      <Knopka
        onPressFunction={onPressHandler}
        title={submitted ? 'clear' : 'Alo'}
      />
      {
        submitted ?
          <View style={styles.body}>
            <Text style={styles.text}>
              Your are registered as {name}
            </Text>
            <Image
              style={styles.image}
              source={require('./assets/done.png')}
              resizeMode='stretch'
            />
          </View>

          : <Image
            style={styles.image}
            source={{ uri: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg' }}
            resizeMode='stretch'
          />
      }
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // backgroundColor: 'white',
    alignItems: 'center',
  },

  text: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    color:'white'

  },
  input: {
    borderWidth: 1,
    width: 200,
    borderColor: 'grey',
    borderRadius: 50,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 15,
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center'
  },
  warning_modal: {
    height: 300,
    width: 300,
    backgroundColor: '#aBD',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099'
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  warning_button: {
    backgroundColor: '#ABB',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  image: {
    width: 100,
    height: 100,
    margin: 10
  }
});

export default App;
