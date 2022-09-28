import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    Alert,
} from 'react-native';
import PushNotification from "react-native-push-notification";
import checklist from "../../assets/checklist.png"


export default function Splash({ navigation }) {

    useEffect(() => {
        createChannels();
        setTimeout(() => {
            navigation.replace('ThesisHome')
        },2000)
    }, []);

  

    const createChannels = () => {
        PushNotification.createChannel(
            {
                channelId: "task-channel",
                channelName: "Task Channel"
            }
        )
    }

    

    return (
        <View style={styles.body} >
            <Image
                style={styles.logo}
                source={require('../../assets/checklist.png')}
            />
            <Text style={styles.text}>
                To Do 
            </Text>           
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems:'center'
    },
    logo: {
        width: 150,
        height: 150,
        margin: 20,
    },
    text: {
        fontSize: 40,
        color: 'black',
        marginBottom: 100,
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