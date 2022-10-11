import React from "react";
import { IconButton } from "react-native-paper";

export const PasswordToggle = ({ togglePassword, isPasswordVisible }) => {
    return (
            <IconButton
                onClick={togglePassword}
            // aria-label="toggle password visibility"
            >
                {!isPasswordVisible ? <TextInput.Icon icon="eye" /> : <TextInput.Icon icon="eye-off" />}
            </IconButton>
    );
};
