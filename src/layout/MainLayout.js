import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/slicers/loginSlice';
import Routes from '../routes';


const MainLayout = () => {
    const dispatch = useDispatch();


    const checkUserLoggedIn = useCallback(async () => {
        const userData = await AsyncStorage.getItem('user');
        console.log(userData,'firstCheck')
        if (userData) {
            dispatch(setUserData(JSON.parse(userData)))
        }
    }, [])


    useEffect(() => {
        checkUserLoggedIn();
    }, [checkUserLoggedIn])

    return (
        <Routes />
    )
}

export default MainLayout;