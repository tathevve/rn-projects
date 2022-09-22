import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert,
    TextInput,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import CustomButton from '../CustomButton';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge, increaseAge, getCities } from '../redux/actions';
import PushNotification, { Importance } from "react-native-push-notification";


export default function Home({ navigation, route }) {

    const { name, age, cities } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();


    const createChannelInitial = () => {
        PushNotification.createChannel(
            {
                channelId: `ncmzncmznxvzxvnm`, // (required)
                channelName: "My channel", // (required)
                channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
                playSound: false, // (optional) default: true
                soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
                importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
                vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
            },
            (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
        );
    }


    React.useEffect(() => {
        createChannelInitial();
    }, [])



    useEffect(() => {
        getData();
        dispatch(getCities());
    }, []);

    const handleNotification = (item) => {


        console.log(item, 'item')
        // PushNotification.cancelAllLocalNotifications();

        PushNotification.localNotification({
            channelId: "ncmzncmznxvzxvnm",
            title: "You clicked on " + item.country,
            message: item.city,
            bigText: item.city + " is one of the largest and most beatiful cities in " + item.country,
            color: "red",
            // id: index
        });

    }

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        let user = JSON.parse(value);
                        setName(user.Name);
                        setAge(user.Age);
                    }
                })
          
        } catch (error) {
            console.log(error);
        }
    }

    const updateData = async () => {
        if (name.length == 0) {
            Alert.alert('Warning!', 'Please write your data.')
        } else {
            try {
                var user = {
                    Name: name
                }
                await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
            
            } catch (error) {
                console.log(error);
            }
        }
    }

    const removeData = async () => {
        try {
            await AsyncStorage.clear();
            
        } catch (error) {
            console.log(error);
        }
    }




    return (
        <View style={styles.body}>
            <Text style={[
                styles.text
            ]}>
                Welcome {name} !
            </Text>
            <CustomButton 
                title="Open Camera"
                onPressFunction={() => {navigation.navigate('Camera')}}
            />
            <FlatList
                data={cities}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            handleNotification(item)
                            navigation.navigate('Map', {
                                city: item.city,
                                lat: item.lat,
                                lng: item.lng,
                            })
                        }}>
                        <View style={styles.item}>
                            <Text style={styles.title}>{item.country}</Text>
                            <Text style={styles.subtitle}>{item.city}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            {/* <Text style={[
                styles.text
            ]}>
                Your age is {age}
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Enter your name'
                value={name}
                onChangeText={(value) => dispatch(setName(value))}
            />
            <CustomButton
                title='Update'
                color='#ff7f00'
                onPressFunction={updateData}
            />
            <CustomButton
                title='Remove'
                color='#f40100'
                onPressFunction={removeData}
            />
            <CustomButton
                title='Increase Age'
                color='#0080ff'
                onPressFunction={()=>{dispatch(increaseAge())}}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        margin: 10,
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 130,
        marginBottom: 10,
    },
    item: {
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#cccccc',
        borderRadius: 5,
        margin: 7,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        margin: 10,
    },
    subtitle: {
        fontSize: 20,
        margin: 10,
        color: '#999999',
    }
})