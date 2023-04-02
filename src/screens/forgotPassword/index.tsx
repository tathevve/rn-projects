/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import TextInputField from '../../shared/TextInput/TextInputField';
import {
  emailValidation,
  // inputMaxLengthLimit,
  // inputMinLengthLimit,
  requiredField,
} from '../../shared/models/validations/Validation';
import RNButton from '../../shared/Button';
import {styles} from '../signIn/SignIn';
import RNModal from '../../shared/Modal';
import {useNavigation} from '@react-navigation/native';
import {EPath} from '../../shared/models/enums/path.enum';
import {IconButton} from 'react-native-paper';

interface IUserForm {
  email: string;
}

const ForgotPassword = (): JSX.Element => {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const methods = useForm<IUserForm>({
    mode: 'all',
  });

  const {
    handleSubmit,
    control,
    formState: {errors},
  } = methods;

  const handleOpenModal = (formData: IUserForm) => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleContinueBtnPress = () => {
    navigation.navigate(EPath.HOME as never);
    handleCloseModal();
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <View style={{backgroundColor: 'white'}}>
        <View style={{marginHorizontal: 17, height: '100%'}}>
          <View style={{marginBottom: 35}}>
            <IconButton
              icon="arrow-left-thin"
              // iconColor={MD3Colors.error50}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: 30,
                width: 30,
                zIndex: 2,
              }}
              onPress={handleGoBack}
            />
          </View>
          <View>
            <Text>Forgot your password?</Text>
            <Text>
              Enter your email address and we'll send you a link to reset your
              password.
            </Text>
          </View>
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
              errors={errors}
              props={{maxLength: 100}}
              customInputStyles={styles.input}
            />
            <RNButton
              title="Reset Password"
              onPress={handleSubmit(handleOpenModal)}
              buttonStyle={styles.button}
            />
          </FormProvider>
        </View>
      </View>
      {isOpen && (
        <RNModal
          visible={isOpen}
          hideModal={handleCloseModal}
          modalTitle="Check your inbox">
          <View>
            <Text>
              We've sent an email to the address provided. Can't find it? Check
              your junk folder.
            </Text>
            <View>
              <RNButton
                title="Continue shopping"
                onPress={handleContinueBtnPress}
                buttonStyle={styles.button}
              />
            </View>
          </View>
        </RNModal>
      )}
    </>
  );
};

export default ForgotPassword;
