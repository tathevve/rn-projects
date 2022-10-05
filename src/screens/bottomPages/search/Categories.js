import { View, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { BottomNavigation, Button, IconButton, List, Searchbar, Text, TextInput } from 'react-native-paper';
import { color } from 'react-native-reanimated';

const Categories = ({ typeTitle }) => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);
    return (
        <List.Section>
            <List.Accordion
                titleStyle={({ focused }) => {
                    color = focused ? 'red' : 'blue'
                }}
                title={typeTitle}
                style={{}}
                // left={props => <List.Icon {...props} icon="folder" />}
                expanded={expanded}
                onPress={handlePress}
            >
                <List.Accordion title="A Accordion" >
                    <List.Item title="First item" onPress={() => console.log('first item')} />
                    <List.Item title="Second item" onPress={() => console.log('second item')} />
                </List.Accordion>
            </List.Accordion>
        </List.Section>
    )
}

export default Categories