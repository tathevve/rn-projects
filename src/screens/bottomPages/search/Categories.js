import { View, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { BottomNavigation, Button, IconButton, List, Searchbar, Text, TextInput } from 'react-native-paper';

const Categories = ({typeTitle}) => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);
    return (
        <List.Section>
            <List.Accordion
                title={typeTitle}
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