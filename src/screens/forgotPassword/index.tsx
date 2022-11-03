import {View} from 'react-native';
import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import TextInputField from '../../shared/TextInput/TextInputField';
import {
  emailValidation,
  inputMaxLengthLimit,
  inputMinLengthLimit,
  requiredField,
} from '../../shared/models/validations/Validation';
import RNButton from '../../shared/Button';
import {styles} from '../signIn/SignIn';

const ForgotPassword = (): JSX.Element => {
  const methods = useForm<IUserForm>({
    mode: 'all',
  });

  const {handleSubmit, control} = methods;
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <FormProvider {...methods}>
        <TextInputField
          placeholder="Email"
          name="email"
          labelIsVisible
          secureTextEntry
          control={control}
          rules={{
            required: requiredField(),
            pattern: emailValidation(),
          }}
          props={{maxLength: 100}}
          customInputStyles={styles.input}
        />
        {/* <TextInputField
          placeholder="Password"
          name="password"
          labelIsVisible
          secureTextEntry
          control={control}
          isPassword
          rules={{
            required: requiredField(),
            minLength: inputMinLengthLimit(8),
            maxLength: inputMaxLengthLimit(13),
          }}
          customInputStyles={styles.input}
          customPasswordStyles={styles.passwordIcon}
        /> */}
        <RNButton
          title="Sign In"
          onPress={() => {}}
          buttonStyle={styles.button}
        />
      </FormProvider>
    </View>
  );
};

export default ForgotPassword;
