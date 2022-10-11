import { View, Dimensions } from 'react-native'
import React from 'react'
import {IconButton, Text } from 'react-native-paper';
import { styles } from '../../../shared/Styles';
import MyButton from '../../../shared/MyButton';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../../redux/slicers/loginSlice';
import { useState , useCallback } from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AccountRoute = () => {

    const navigation = useNavigation();

    const loggedUserData = useSelector(selectUserData)

    const [data,setData] = useState(null);

    console.log(loggedUserData,'loggedUserData')

    useFocusEffect(
        useCallback(() => {
            setData(loggedUserData)    
          return () => setData(null);
        }, [loggedUserData])
      );

      console.log(data,'data')

    return (
        <View style={{ backgroundColor: "white" }}>
            <View style={{
                display: 'flex', justifyContent: 'space-between', marginLeft: 17,
                marginRight: 17,
            }}>
                <View style={{ height: '50%' }}>
                    <View style={styles.acoount}>
                        <Text>{data?.name ?? "Me"}</Text>
                    </View>
                    <View>
                        <Text>LET’S GET PERSONAL</Text>
                    </View>
                    <View>
                        <Text>Access your Bag & Wishlist on any of your devices</Text>
                    </View>
                    <View style={styles.buttons}>
                        <MyButton title='Register' onPress={() => { navigation.navigate('Register') }} />
                        <MyButton title='Sign In' onPress={() => { navigation.navigate('SignIn') }} />
                    </View>
                </View>
                <View style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '50%' }}>
                    <Text>
                        Contact us
                    </Text>
                    <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                            <IconButton
                                icon="phone-outline"
                                // iconColor={MD3Colors.error50}
                                size={25}
                                onPress={() => console.log('phone')}
                            />
                            <Text>
                                phone
                            </Text>
                        </View>
                        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <IconButton
                                icon="email-outline"
                                // iconColor={MD3Colors.error50}
                                size={25}
                                onPress={() => console.log('email')}
                            />
                            <Text>
                                email
                            </Text>
                        </View>
                    </View>
                    <Text>
                        Available Monday to Friday 9am - 6pm GMT
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default AccountRoute