import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { FormProvider, useForm } from 'react-hook-form';
import TextInputField from '../../shared/TextInput/TextInputField';
import { requiredField } from '../../shared/models/validations/Validation';
import { selectShippingData } from '../../redux/slicers/shippingAddressSlice';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../redux/slicers/loginSlice';
import RNButton from '../../shared/Button';
import { EPath } from '../../shared/models/enums/path.enum';

const AccountDetails = () => {
  const navigation = useNavigation();
  const shippingData = useSelector(selectShippingData);
  const user = useSelector(selectUserData);
  const methods = useForm<any>({
    mode: 'all',
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = methods;

  console.log(user, 'user');

  useEffect(() => {
    if (shippingData && user) {
      reset({ ...shippingData, ...user });
      //   reset({...user});
    }
  }, [reset, shippingData, user]);

  return (
    <ScrollView style={styles.root}>
      <View style={styles.rootSection}>
        <IconButton
          icon="arrow-left-thin"
          size={32}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.typesText}>Details & Password</Text>
        <Text style={styles.sectionHeader}>My Details</Text>
        <FormProvider {...methods}>
          <TextInputField
            placeholder="First Name"
            name="firstName"
            secureTextEntry
            control={control}
            rules={{
              required: requiredField(),
              // pattern: emailValidation(),
            }}
            errors={errors}
            props={{ maxLength: 100 }}
            customInputStyles={styles.input}
          />
          <TextInputField
            placeholder="Last Name"
            name="lastName"
            secureTextEntry
            control={control}
            rules={{
              required: requiredField(),
              // pattern: emailValidation(),
            }}
            errors={errors}
            props={{ maxLength: 100 }}
            customInputStyles={styles.input}
          />
          <TextInputField
            placeholder="Email"
            name="email"
            secureTextEntry
            control={control}
            rules={{
              required: requiredField(),
              // pattern: emailValidation(),
            }}
            errors={errors}
            props={{ maxLength: 50 }}
            customInputStyles={styles.input}
          />
        </FormProvider>
        <View>
          <Text style={styles.sectionHeader}>Password & Security</Text>
          <Text>
            We advise you to change your password every 3 months to keep your
            account extra safe
          </Text>
          <RNButton
            title="Change Password"
            onPress={() => navigation.navigate(EPath.PASSWORD as never)}
            buttonStyle={styles.button}
          />
        </View>
        <View>
          <Text style={styles.sectionHeader}>Delete Account</Text>
          <Text>
            You can request for your account or your personal details to be deleted at any time.
          </Text>
          <RNButton
            title="Request To Delete"
            onPress={() => navigation.navigate(EPath.DELETE_ACCOUNT as never)}
            buttonStyle={styles.button}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AccountDetails;

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
  },
  rootSection: {
    zIndex: 2,
    marginHorizontal: 17,
    fontFamily: 'Mulish',
    paddingRight: 10,
    width: '95%',
  },
  typesText: {
    fontWeight: '900',
    fontSize: 18,
    fontFamily: 'Mulish',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  input: {
    marginBottom: 30,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingLeft: 15,
    paddingBottom: 0,
  },
  sectionHeader: {
    fontWeight: '900',
    fontSize: 17,
    fontFamily: 'Mulish',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '100%',
    height: 35,
    marginTop: 35,
    borderStyle: 'solid',
    color: 'black',
    marginBottom: 15,
  },
});
