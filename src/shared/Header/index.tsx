import {StyleSheet, View} from 'react-native';
import React from 'react';
import {IconButton, Text} from 'react-native-paper';
// import ShoppingBag from './shoppingBag/ShoppingBag';

interface IHeaderProps {
  title?: string;
  handleOpen: () => void;
}

const Header = ({title = 'Նռնան', handleOpen}: IHeaderProps): JSX.Element => {
  return (
    <View>
      <View style={styles.headerWrapper}>
        <Text style={styles.header}> {title} </Text>
        <View style={styles.shopping}>
          <IconButton
            icon="shopping-outline"
            // iconColor={MD3Colbors.error50}
            size={25}
            onPress={handleOpen}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerWrapper: {
    width: '100%',
    borderBottomWidth: 4,
    borderBottomColor: 'white',
    paddingBottom: 5,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  header: {
    fontSize: 35,
    width: '70%',
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Times New Roman',
  },
  shopping: {
    width: '15%',
  },
});
