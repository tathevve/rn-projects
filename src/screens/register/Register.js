import { View, Text, Alert, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import MyButton from '../../shared/MyButton'
import { useRef } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FormProvider, useForm, useWatch } from "react-hook-form";
import TextInputField from '../../shared/TextInput/TextInputField'
import { emailValidation, inputMaxLengthLimit, inputMinLengthLimit, requiredField } from '../../shared/models/validations/Validation'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/slicers/loginSlice'
import { IconButton } from 'react-native-paper'

const windowWidth = Dimensions.get('window').width;

const defaultValues = {
    email: "",
    password: "",
    passwordConfirm: "",
    name: "",
    surname: "",
};

const Register = ({ navigation }) => {

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
            name: data.name,
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
        <View style={{ backgroundColor: 'white', height: '100%',  }}>
            {/* <ActionSheet ref={actionSheetRef}> */}
            {/* <Text>alo</Text> */}
            {/* </ActionSheet> */}

            <View style={styles.headerWrapper}>
               
                <View style={styles.closeIcon}>
                    <IconButton
                        icon="close"
                        // iconColor={MD3Colors.error50}
                        size={25}
                        onPress={() => navigation.goBack()}
                    />
                </View>
                 <Text style={styles.header}> Create an account </Text>
            </View>
            <View style={styles.inputAreas}>
                <FormProvider {...methods}>

                    <TextInputField
                        label="First Name"
                        type="text"
                        name="name"
                        inputProps={{ maxLength: 50 }}
                        rules={{
                            required: requiredField(),
                            minLength: inputMinLengthLimit(2),
                        }}
                    />
                    <TextInputField
                        label="Last Name"
                        type="text"
                        name="surname"
                        inputProps={{ maxLength: 50 }}
                        rules={{
                            required: requiredField(),
                            minLength: inputMinLengthLimit(2),
                        }}
                    />
                    <TextInputField
                        label="Email"
                        type="email"
                        name="email"
                        rules={{
                            required: requiredField(),
                            pattern: emailValidation(),
                        }}
                        inputProps={{ maxLength: 100 }}
                    />
                    <TextInputField
                        label="Password"
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
                        label="Password Confirmation"
                        secureTextEntry
                        type="text"
                        isPassword={true}
                        name="passwordConfirm"
                        rules={{
                            required: requiredField(),
                            validate: (e) => e === watchPassword || "password_is_not_match",
                        }}
                    />

                    <Text style={{ marginVertical: 25, color: 'black' }}>
                        By registering you agree with our Terms & Conditions and Privacy Policy
                    </Text>

                    <MyButton title='Register' onPress={handleSubmit(userSignup)} />

                </FormProvider>


            </View>
            <MyButton title='Already have an account?' onPress={() => navigation.navigate('SignIn')} />

        </View>
    )
}

const styles = StyleSheet.create({
    inputAreas: {
    },
    text: {
        marginBottom: 15
    },
    headerWrapper: {
        // width: '100%',
        borderBottomWidth: 4,
        borderBottomColor: 'white',
        paddingBottom: 5,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-around',
    },
    header: {
        fontSize: 25,
        width: '70%',
        color: 'black',
        textAlign: 'center',
        fontFamily: 'Times New Roman'
    },
    closeIcon: {
        width: '20%'
    },
})

export default Register;