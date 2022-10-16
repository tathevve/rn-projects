import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import store from '../redux';
import { setUserData } from '../redux/slicers/loginSlice';
import Routes from '../routes';
// import CircularLoader from '../shared/Loader/CircularLoader';



const MainLayout = () => {
    const dispatch = useDispatch();
    // const isLoading = store.getState()?.app?.isLoading;


    const checkUserLoggedIn = useCallback(async () => {
        const userData = await AsyncStorage.getItem('user');
        console.log(userData, 'firstCheck')
        if (userData) {
            dispatch(setUserData(JSON.parse(userData)))
        }
    }, [])


    useEffect(() => {
        checkUserLoggedIn();
    }, [checkUserLoggedIn])

    return (
        // <CircularLoader loading={isLoading}>
            <Routes />
        // {/* </CircularLoader> */}
    )
}

export default MainLayout;