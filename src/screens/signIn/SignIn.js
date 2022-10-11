import { View, Text, Alert } from 'react-native'
import React from 'react'
import MyButton from '../../shared/MyButton'
import { useRef } from 'react'
import { styles } from '../../shared/Styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react'
import TextInputField from '../../shared/TextInput/TextInputField'
import { emailValidation, inputMaxLengthLimit, inputMinLengthLimit, requiredField } from '../../shared/models/validations/Validation'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserData, setUserData } from '../../redux/slicers/loginSlice'


const defaultValues = {
    email: "",
    password: "",
};


const SignIn = () => {
    const actionSheetRef = useRef(null);
    const navigation = useNavigation();
    const loginInfo = useSelector(selectUserData);
    const dispatch = useDispatch()



    const methods = useForm({
        mode: "all",
        defaultValues,
    });

    const { handleSubmit, control } = methods;

    useEffect(() => {
        getData();
    }, [])


    const getData = async () => {
        try {
            let user = await AsyncStorage.getItem('user');
            let parsed = JSON.parse(user);
            // alert(parsed.email);
        }
        catch (error) {
            alert(error)
        }
    }

    const signIn = async (formData) => {
        try {
            const data = { ...formData }
            console.log(data, 'data sign in')

            let user = await AsyncStorage.getItem('user');
            let parsed = JSON.parse(user);
            console.log(parsed, 'parsed');
            if (data.email === parsed.email) {
                console.log(data.email, '   data.email    ', parsed.email, '   parsed.email   ');
                dispatch(setUserData(parsed))
                Alert.alert('Success!', 'Logged in successfully');
                navigation.navigate('ThesisHome')

            } else {
                console.log(data.email, '   data.email    ', parsed.email, '   parsed.emailf   ');
            }
        }
        catch (error) {
            alert(error)
        }

    }

    return (
        <View>
            {/* <ActionSheet ref={actionSheetRef}> */}
            {/* <Text>alo</Text> */}
            {/* </ActionSheet> */}

            <View>
                <Text style={{ fontSize: 20 }}> Sign In </Text>
            </View>
            <View style={styles.inputAreas}>
                <FormProvider {...methods}>
                    <TextInputField
                        label="email"
                        type="email"
                        name="email"
                        rules={{
                            required: requiredField(),
                            pattern: emailValidation(),
                        }}
                        inputProps={{ maxLength: 100 }}
                    />
                    <TextInputField
                        label="password"
                        name="password"
                        type="password"
                        isPassword={true}
                        secureTextEntry
                        rules={{
                            required: requiredField(),
                            minLength: inputMinLengthLimit(8),
                            maxLength: inputMaxLengthLimit(13),
                        }}
                    />
                    <MyButton title='Sign In' onPress={handleSubmit(signIn)} />
                </FormProvider>
            </View>

        </View>
    )
}

export default SignIn;