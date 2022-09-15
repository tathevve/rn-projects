import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';

export default function Home({ navigation, route }) {

    const [name, setName] = React.useState('');

    const getData = () => {
        try {
            AsyncStorage.getItem('UserName')
                .then(value => {
                    if (value != null) {
                        setName(value);
                    }
                }

                )
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Welcome {name} !
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 40,
        // fontWeight: 'bold',
        margin: 10,
        fontFamily: 'Raleway-Italic'
    }
})
