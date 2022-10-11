import { View, Text, Alert } from 'react-native'
import React from 'react'
import ActionSheet from 'react-native-actions-sheet'
import MyButton from '../../shared/MyButton'
import { useRef } from 'react'
import { styles } from '../../shared/Styles'
import { TextInput } from 'react-native-paper';
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react'
import { FormProvider, useForm, useWatch } from "react-hook-form";
import TextInputField from '../../shared/TextInput/TextInputField'
import { emailValidation, inputMaxLengthLimit, inputMinLengthLimit, requiredField } from '../../shared/models/validations/Validation'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/slicers/loginSlice'


const defaultValues = {
    email: "",
    password: "",
    passwordConfirm: "",
    name: "",
    surname: "",
};

const Register = ({ navigation }) => {
    const actionSheetRef = useRef(null);

    const dispatch = useDispatch();

    const methods = useForm({
        mode: "all",
        defaultValues,
    });

    const { handleSubmit, control } = methods;

    const watchPassword = useWatch({
        name: "password",
        control,
    });

    const userSignup = async (formData) => {
        const data = {
            ...formData,

        };

        const userObj = {
            email: data.email,
            password: data.password,
            name:data.name,
        }

        console.log(data, ' data')
        if (!(data.email && data.password)) {
            Alert.alert('watning!', 'ERROR')
        } else {
            try {
                await AsyncStorage.setItem('user', JSON.stringify(userObj));
                await dispatch(setUserData(userObj));
                navigation.navigate('ThesisHome');
            } catch (error) {
                console.log(error)
            }
        }
    };


    return (
        <View>
            {/* <ActionSheet ref={actionSheetRef}> */}
            {/* <Text>alo</Text> */}
            {/* </ActionSheet> */}

            <View>
                <Text style={{ fontSize: 20 }}> Register </Text>
            </View>
            <View style={styles.inputAreas}>
                <FormProvider {...methods}>

                    <TextInputField
                        label="name"
                        type="text"
                        name="name"
                        inputProps={{ maxLength: 50 }}
                        rules={{
                            required: requiredField(),
                            minLength: inputMinLengthLimit(2),
                        }}
                    />
                    <TextInputField
                        label="surname"
                        type="text"
                        name="surname"
                        inputProps={{ maxLength: 50 }}
                        rules={{
                            required: requiredField(),
                            minLength: inputMinLengthLimit(2),
                        }}
                    />
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
                    <TextInputField
                        label="password_confirm"
                        secureTextEntry
                        type="text"
                        isPassword={true}
                        name="passwordConfirm"
                        rules={{
                            required: requiredField(),
                            validate: (e) => e === watchPassword || "password_is_not_match",
                        }}
                    />
                    <MyButton title='Sign In' onPress={handleSubmit(userSignup)} />

                </FormProvider>

            </View>

        </View>
    )
}

export default Register;




{/* <TextInput
                    label="Last Name"
                    value={email}
                    onChangeText={(value) => setEmail(value)}
                />

                <TextInput
                    label="Email address"
                    value={email}
                    onChangeText={(value) => setEmail(value)}
                />
                <TextInput
                    label="Password"
                    secureTextEntry
                    value={password}
                    right={<TextInput.Icon icon="eye" />}
                    onChangeText={(value) => setPassword(value)}
                /> */}