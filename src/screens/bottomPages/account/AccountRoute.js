import { View, Dimensions, Image, StyleSheet } from 'react-native'
import React from 'react'
import { ActivityIndicator, IconButton, Text } from 'react-native-paper';
import MyButton from '../../../shared/MyButton';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData, setUserData } from '../../../redux/slicers/loginSlice';
import { useState, useCallback } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { List } from 'react-native-paper';
import { selectIsLoading, setIsLoading } from '../../../redux/slicers/app';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AccountRoute = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch()
    const loggedUserData = useSelector(selectUserData)
    // const isLoading = useSelector(selectIsLoading)
    const [data, setData] = useState(null);


    console.log(loggedUserData, 'loggedUserData')
    // console.log(isLoading, 'isloading')

    useFocusEffect(
        useCallback(() => {
            setData(loggedUserData)
            return () => setData(null);
        }, [loggedUserData])
    );


    console.log(data, 'data')

    const signOut = () => {
        setData(null);
        dispatch(setUserData(null));
        // dispatch(setIsLoading(false))
    }


    // console.log(isLoading, 'isloading')

    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <View style={{
                display: 'flex',
                heihgt: windowHeight,
                // justifyContent: 'space-between',
                // alignItems:'center',
                // width:windowWidth
                marginLeft: 17,
                marginRight: 17,
            }}>
                <View>
                    <View >
                        <View >
                            <Text styles={styles.typesText}>{data?.name ?? "Me"}</Text>
                        </View>
                        {!data?.name ?
                            <View>
                                <View>
                                    <Text style={styles.text}>LET’S GET PERSONAL</Text>
                                </View>
                                <View>
                                    <Text style={styles.text}>Access your Bag & Wishlist on any of your devices</Text>
                                </View>
                                <View >
                                    <MyButton title='Register' onPress={() => { navigation.navigate('Register') }} />
                                    <MyButton title='Sign In' onPress={() => { navigation.navigate('SignIn') }} />
                                </View>
                            </View>
                            :
                            <View>
                                <View>
                                    <List.Section>
                                        <List.Subheader style={styles.sectionHeader}>My Account</List.Subheader>
                                        <List.Item
                                            title="Orders"
                                            right={() => <List.Icon icon="arrow-right-thin" />}
                                            onPress={() => console.log('aaa')}
                                        />
                                        
                                        <List.Item
                                            title="Details & Password"
                                            right={() => <List.Icon icon="arrow-right-thin" />}
                                            onPress={() => console.log('aaa')}
                                        />
                                        <List.Item
                                            title="Refer a friend"
                                            right={() => <List.Icon icon="arrow-right-thin" />}
                                            onPress={() => console.log('aaa')}
                                        />
                                    </List.Section>
                                </View>
                            </View>
                        }

                    </View>
                    <View>
                        <View>
                            <List.Section>
                                <List.Subheader style={styles.sectionHeader}>My Location</List.Subheader>
                                <List.Item
                                    title="Armenia (USD)"
                                    style={{height:60}}
                                    left={() => <Image
                                        // style={{ width: windowWidth, height: windowHeight / 2, }}
                                        // resizeMode='contain'
                                        style={{marginTop:18}}
                                        source={require('../../../../assets/Armenia.png')}
                                    />}
                                    right={() => <List.Icon icon="arrow-right-thin" />}
                                    onPress={() => console.log('aaa')}
                                />
                            </List.Section>

                            {/* <Text>Armenia (USD)</Text> */}

                        </View>
                        <View>
                            <Text style={styles.text}>This location defines your language and currency</Text>
                        </View>
                    </View>
                    {data?.name ?
                        <View>
                            <List.Section>
                                <List.Subheader style={styles.sectionHeader}>Orders</List.Subheader>
                                <List.Item
                                    title="About Us"
                                    right={() => <List.Icon icon="arrow-right-thin" />}
                                    onPress={() => console.log('aaa')}
                                />
                                <List.Item
                                    title="Terms & Conditions"
                                    right={() => <List.Icon icon="arrow-right-thin" />}
                                    onPress={() => console.log('aaa')}
                                />
                                <List.Item
                                    title="Privacy Policy"
                                    right={() => <List.Icon icon="arrow-right-thin" />}
                                    onPress={() => console.log('aaa')}
                                />
                            </List.Section>
                        </View>
                        : null
                    }
                    <View style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', }}>
                        <Text style={styles.sectionHeader}>
                            Contact us
                        </Text>
                        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', marginTop:7, marginBottom:13 }}>
                            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '50%' }}>
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
                            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width:'50%' }}>
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
                        <Text style={styles.text}>
                            Available Monday to Friday 9am - 6pm GMT
                        </Text>
                    </View>
                    {
                        data?.name ?
                            <View>
                                <Text style={styles.textStyle}>Not {data?.name}?</Text>
                                <MyButton title='Sign Out' onPress={signOut} />
                            </View>
                            : null
                    }
                    {/* {isLoading && (
                        <View >
                            <ActivityIndicator animating={true} color={'black'} />
                        </View>
                    )} */}
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    
    typesText: {
        fontWeight: '900',
        fontSize: 18,
        fontFamily: 'Mulish',
        letterSpacing: 3,
        textTransform:'uppercase'
    },
    
    text: {
        marginBottom: 15
    },
    sectionHeader: {
        fontWeight: '900',
        fontSize:17,
        fontFamily:'Mulish',
    },
    textStyle: {
        marginBottom: 15,
        fontWeight: '900',
        textAlign:'center',
        fontSize:17,

    }
})

export default AccountRoute