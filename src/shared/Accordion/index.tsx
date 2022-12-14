import React, {useCallback, useState} from 'react';
import {List} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/native';

interface IAccordion {
  accordionTitle?: string | null;
  children: React.ReactNode;
}

const RNAccordion = ({
  accordionTitle = null,
  children,
}: IAccordion): JSX.Element => {
  const [expanded, setExpanded] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      return () => setExpanded(false);
    }, []),
  );

  const handlePress = () => setExpanded(!expanded);
  return (
    <>
      <List.Section style={{marginTop: 17}}>
        <List.Accordion
          style={{
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
          }}
          titleStyle={{color: 'black'}}
          title={accordionTitle}
          // left={props => <List.Icon {...props} icon="folder" />}
          expanded={expanded}
          onPress={handlePress}>
          {/* <List.Item
            title="First item"
            onPress={() => console.log('first item')}
          /> */}
          {children}
        </List.Accordion>
      </List.Section>
    </>
  );
};

export default RNAccordion;
