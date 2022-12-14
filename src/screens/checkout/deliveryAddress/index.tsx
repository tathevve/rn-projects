import {StyleSheet, View} from 'react-native';
import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import TextInputField from '../../../shared/TextInput/TextInputField';
import RNButton from '../../../shared/Button';
import {useNavigation} from '@react-navigation/native';
import {EPath} from '../../../shared/models/enums/path.enum';

interface IUserForm {
  email: string;
}

const DeliveryAddress = () => {
  const navigation = useNavigation();
  const methods = useForm<IUserForm>({
    mode: 'all',
  });

  const {
    handleSubmit,
    control,
    formState: {errors},
  } = methods;

  const handleSubmitAddress = () => {
    console.log('a');
    navigation.navigate(EPath.CHECKOUT as never);
  };

  return (
    <View>
      <FormProvider {...methods}>
        <TextInputField
          placeholder="Email"
          name="email"
          labelIsVisible
          secureTextEntry
          control={control}
          rules={
            {
              // required: requiredField(),
              // pattern: emailValidation(),
            }
          }
          errors={errors}
          props={{maxLength: 100}}
          customInputStyles={{}}
        />
        <RNButton
          title="Save And Continue"
          onPress={handleSubmit(handleSubmitAddress)}
          buttonStyle={styles.button}
          textStyle={styles.btnText}
        />
      </FormProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '100%',
    height: 35,
    marginTop: 35,
    borderStyle: 'solid',
    marginBottom: 15,
  },
  btnText: {
    color: 'white',
  },
});

export default DeliveryAddress;
