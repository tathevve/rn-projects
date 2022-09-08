import React from "react";
import {
     Pressable, StyleSheet, Text, View,

} from 'react-native'

const Header = (props) => {
    return (
        <View
            style={styles.view}
        >
<Text
style={styles.text}
>
    React Native Tutorial
</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        height:50,
        backgroundColor:'#00f',
        justifyContent:'center',
        alignItems:'center'
    },
    text: {
        fontSize: 25,
        color:'white'
    }
})

export default Header;