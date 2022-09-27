import { View, Text, StyleSheet, TouchableOpacity, FlatList, Touchable, Alert } from 'react-native'
import React from 'react';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import CustomButton from "../CustomButton"
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setTaskID, setTasks } from '../redux/actions';
import { useEffect } from 'react';
import CheckBox from '@react-native-community/checkbox';

export default function Done({ navigation }) {

    const { tasks } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    const deleteTask = (id) => {
        const filteredTasks = tasks.filter(task => task.ID !== id);
        AsyncStorage.setItem('Tasks', JSON.stringify(filteredTasks))
            .then(() => {
                dispatch(setTasks(filteredTasks));
                Alert.alert('Success', 'Task removed')
            })
            .catch(err => console.log(err))
    }

    const checkTask = (id, newValue) => {
        const index = tasks.findIndex(task => task.ID === id);
        if (index > -1) {
            let newTasks = [...tasks];
            newTasks[index].Done = newValue;
            AsyncStorage.setItem('Tasks', JSON.stringify(newTasks))
                .then(() => {
                    dispatch(setTasks(newTasks));
                    Alert.alert('success', 'abo')
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <View style={styles.body}>
            <FlatList
                data={tasks.filter(task => task.Done === true)}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.item} onPress={() => {
                        dispatch(setTaskID(item.ID))
                        navigation.navigate('Task')
                    }}>
                        <View style={styles.item_row}>
                            <CheckBox
                                value={item.Done}
                                onValueChange={(newValue) => checkTask(item.ID, newValue)}
                            />
                            <View style={styles.item_body}>
                                <Text style={styles.title} numberOfLines={1}>
                                    {item.Title}
                                </Text>
                                <Text style={styles.subtitle} numberOfLines={3}>
                                    {item.Desc}
                                </Text>
                            </View>
                            <TouchableOpacity style={styles.delete} onPress={() => { deleteTask(item.ID) }}>
                                <FontAwesome5
                                    name={'trash'}
                                    size={25}
                                    color={'red'}
                                />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )}
            />
            

            {/* <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Map', {
                        city: 'Paris',
                        lat: 48.85691728176082,
                        lng: 2.3532377365677513,
                    })
                }} ><Text>aaa</Text></TouchableOpacity> */}

        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1
    },
   
    item: {
        marginHorizontal: 10,
        marginVertical: 7,
        paddingHorizontal: 10,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 5,
    },
    title: {
        color: '#000000',
        fontSize: 30,
        margin: 5,
    },
    subtitle: {
        color: '#999999',
        fontSize: 20,
        margin: 5,
    },
    item_row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    item_body: {
        flex: 1,
    },
    delete: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
})