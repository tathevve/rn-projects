import React from "react";
import {
     Pressable, StyleSheet, Text,

} from 'react-native'

const Knopka = (props) => {
    return (
        <Pressable
            onPress={props.onPressFunction}
            style={({ pressed }) => [
                { backgroundColor: pressed ? '#0080ff' : '#1eb900' },
                styles.button
            ]}
        >
            <Text style={styles.text}>{props.title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center'
    },
    button: {
        width: 150,
        height: 50,
        alignItems: 'center',
        borderRadius:10
    },
})

export default Knopka;