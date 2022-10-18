/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../redux';
import GetLocation from 'react-native-get-location';
import { setGeolocation } from '../redux/slicers/app';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUserData } from '../redux/slicers/loginSlice';

interface IScreenLayout {
  children: React.ReactNode;
}

const ScreenLayout = ({children}: IScreenLayout):JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  const fetchLocation =  useCallback(async () => {
    const data = await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout:15000,
    });
    dispatch(setGeolocation(data));
  },[dispatch]);

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
  },[fetchLocation]);

  return (
    <>
      {children}
    </>
  );
};

export default ScreenLayout;
