import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Image, Alert } from 'react-native';
import CustomButton from "../CustomButton"

function Login({navigation}) {

    const [name, setName] = useState('')

    const setData = async() => {
        if(name.length == 0) {
            Alert.alert('Warning', 'Please write your data');
        } else {
            try {
                await AsyncStorage.setItem('UserName', name);
                navigation.navigate('Home')
            } catch (error) {
                console.log(error)
            }
        }
    }

  return (
    <View
        style={styles.body}
    >
        <Image 
            style={styles.logo}
            source={require('../../assets/asyncstorage.png')}
        />
        <Text style={styles.text}>
            Async Storage
        </Text>
        <TextInput 
            style={styles.input}
            placeholder='gri'
            onChangeText={(value) => setName(value)}
        />
        <CustomButton 
            title="Login"
            onPressFunction={setData}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    body: {
        flex:1,
        alignItems: 'center',
        backgroundColor:'#0080ff'
    },
    logo: {
        width:100,
        height:100,
        margin:20
    },
    text: {
        fontSize: 30,
        color: 'white'
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    }
})

export default Login