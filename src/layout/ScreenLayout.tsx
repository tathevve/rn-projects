/* eslint-disable prettier/prettier */
import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../redux';
import GetLocation from 'react-native-get-location';
import {setGeolocation} from '../redux/slicers/app';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {selectUserData, setUserData} from '../redux/slicers/loginSlice';
import RNModal from '../shared/Modal';
import RNButton from '../shared/Button';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../shared/Header';

interface IScreenLayout {
  children: React.ReactNode;
}

const ScreenLayout = ({children}: IScreenLayout): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const loggedUserData = useSelector(selectUserData);

  const fetchLocation = useCallback(async () => {
    const data = await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    });

    console.log(data, 'dataGeo');
    dispatch(setGeolocation(data));
  }, [dispatch]);

  const checkUserLoggedIn = useCallback(async () => {
    const userData = await AsyncStorage.getItem('user');
    console.log(userData, 'firstCheck');
    if (userData) {
      dispatch(setUserData(JSON.parse(userData)));
    }
  }, [dispatch]);

  useEffect(() => {
    checkUserLoggedIn();
  }, [checkUserLoggedIn]);

  useEffect(() => {
    fetchLocation();
  }, [fetchLocation]);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Header handleOpen={handleOpenModal} title={loggedUserData?.name ?? 'alo'} />
      <>{children}</>
      {loggedUserData?.name ? (
        <RNModal
          visible={isOpen}
          hideModal={handleCloseModal}
          modalTitle="Please, sign in to see your bag.">
          <View>
            <View>
              <RNButton
                title="Sign In"
                onPress={() => navigation.navigate('SignIn' as never)}
                buttonStyle={styles.button}
              />
            </View>
          </View>
        </RNModal>
      ) : null}
    </>
  );
};

export default ScreenLayout;

const styles = StyleSheet.create({
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
