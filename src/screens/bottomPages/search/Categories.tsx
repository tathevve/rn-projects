/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {List} from 'react-native-paper';

const Categories = ({typeTitle}: {typeTitle: string}): JSX.Element => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <List.Section>
      <List.Accordion
        titleStyle={{color: 'black'}}
        title={typeTitle}
        // left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Accordion title="A Accordion" titleStyle={{color: 'black'}}>
          <List.Item
            title="First item"
            onPress={() => console.log('first item')}
          />
          <List.Item
            title="Second item"
            onPress={() => console.log('second item')}
          />
        </List.Accordion>
      </List.Accordion>
    </List.Section>
  );
};

export default Categories;
