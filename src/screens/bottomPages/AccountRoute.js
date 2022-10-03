import { View, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { BottomNavigation, Button, IconButton, List, Searchbar, Text, TextInput } from 'react-native-paper';
import { styles } from '../../shared/Styles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AccountRoute = () => {
    return (
        <View style={{ backgroundColor: "white" }}>
            <View style={{
                display: 'flex', justifyContent: 'space-between', marginLeft: 17,
                marginRight: 17,
            }}>
                <View style={{ height: '50%' }}>
                    <View style={styles.acoount}>
                        <Text>ME</Text>
                    </View>
                    <View>
                        <Text>LET’S GET PERSONAL</Text>
                    </View>
                    <View>
                        <Text>Access your Bag & Wishlist on any of your devices</Text>
                    </View>
                    <View style={styles.buttons}>
                        <Button mode="outlined" textColor='black'
                            style={{ width: '100%', marginBottom: 15 }}
                            contentStyle={{ textAlign: 'center' }}
                            onPress={() => console.log('Pressed explore')}>
                            Register
                        </Button>
                        <Button mode="outlined" textColor='black'
                            style={{ width: '100%', }}
                            contentStyle={{ textAlign: 'center' }}
                            onPress={() => console.log('Pressed explore')}>
                            Sign In
                        </Button>

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