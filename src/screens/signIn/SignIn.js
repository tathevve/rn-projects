import { View, Text } from 'react-native'
import React from 'react'
import ActionSheet from 'react-native-actions-sheet'
import MyButton from '../../shared/MyButton'
import { useRef } from 'react'
import { styles } from '../../shared/Styles'
import { TextInput } from 'react-native-paper';

const SignIn = () => {
    const actionSheetRef = useRef(null);
    const [text, setText] = React.useState("");

    return (
        <View>
            {/* <ActionSheet ref={actionSheetRef}> */}
            {/* <Text>alo</Text> */}
            {/* </ActionSheet> */}

            <View>
                <Text style={{ fontSize: 20 }}> Sign In </Text>
            </View>
            <View style={styles.inputAreas}>
                <TextInput
                    label="Email address"
                    value={text}
                    onChangeText={text => setText(text)}
                />
                <TextInput
                    label="Password"
                    secureTextEntry
                    right={<TextInput.Icon icon="eye" />}
                />
            </View>

            <MyButton title='Sign In' onPress={() => console.log('sign in')} />
        </View>
    )
}

export default SignIn;