import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const MyButton = ({title = 'Shop Now', onPress}) => {
    return (
        <Button mode="outlined" textColor='black'
            style={{ width: '100%', marginBottom: 20 }}
            contentStyle={{ textAlign: 'center' }}
            onPress={onPress}>
            {title}
        </Button>
    )
}

export default MyButton