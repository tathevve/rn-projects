import * as React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';

export default function ScreenA({ navigation }) {

    const onPressHandler = () => {
        // navigation.navigate('Screen_B')
        navigation.toggleDrawer()
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Screen A
            </Text>
            <Pressable
                onPress={onPressHandler}
                style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#cba' })}>
                <Text style={styles.text}>
                    Go to Screen B
                </Text>
            </Pressable>
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
      fontWeight: 'bold',
      margin: 10
    }
  })
  