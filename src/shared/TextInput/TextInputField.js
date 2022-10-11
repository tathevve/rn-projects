import { View, Text } from 'react-native'
import React from 'react';
import { TextInput } from 'react-native-paper';
import { useFormContext } from 'react-hook-form';
import { useState } from 'react';
import { PasswordToggle } from './PasswordToggle';


const TextInputField = (props) => {

    const {
        register,
        formState: { errors },
        watch,
        setValue,
    } = useFormContext();

    const {
        name,
        type = "text",
        label,
        disabled = false,
        className,
        rules,
        secureTextEntry = false,
        isPassword = false,
        inputProps,
    } = props;

    const [isPasswordVisible, setIsPasswordVisible] = useState(isPassword);
    const inputValue = watch(name);

    const onChange = (text) => {
        setValue(name, text);
    };


    const togglePassword = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };


    return (
        <View>
            <TextInput

                label={label}
                type={type}
                disabled={disabled}
                error={!!errors?.[name]?.message}
                className={className}
                value={inputValue}
                secureTextEntry={secureTextEntry}
                onChangeText={(e) => onChange(e)}
                helperText={errors?.[name]?.message}
                right={
                    isPassword && (
                        <PasswordToggle
                            isPasswordVisible={isPasswordVisible}
                            togglePassword={togglePassword}
                        />)
                }

                inputProps={inputProps}
                {...register(name, rules)}
            />
        </View>
    )
}

export default TextInputField

