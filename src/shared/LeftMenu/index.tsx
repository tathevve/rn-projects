/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React, {useState} from 'react';
import {IconButton, Menu, Provider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {EPath} from '../models/enums/path.enum';

const ԼeftMenu = (): JSX.Element => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState<boolean>(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <Provider>
      <View
        style={{
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          marginRight: 15,
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          contentStyle={{backgroundColor: 'white'}}
          anchor={
            <IconButton
              icon="menu"
              // iconColor={MD3Colors.error50}
              size={32}
              style={{
                height: 30,
                width: 30,
                // zIndex: 2,
              }}
              onPress={openMenu}
            />
          }>
          <Menu.Item
            onPress={() => navigation.navigate(EPath.HOME as never)}
            title="Home"
          />
          <Menu.Item
            onPress={() => navigation.navigate(EPath.FAVORITE as never)}
            title="Wishlist"
          />
        </Menu>
      </View>
    </Provider>
  );
};

export default ԼeftMenu;
