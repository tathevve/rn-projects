import {View} from 'react-native';
import React, {MutableRefObject} from 'react';
import {IconButton, Text} from 'react-native-paper';
import {useRef} from 'react';
import ShoppingBag from './shoppingBag/ShoppingBag';
import {styles} from '../shared/Styles';

interface IHomeLayout {
  children: React.ReactNode;
}

const ThesisHome = ({children}: IHomeLayout): JSX.Element => {
  const actionSheetRef = useRef<MutableRefObject<any> | any>(null);
  console.log(actionSheetRef, 'action');

  // useEffect(() => {
  //     return () => {
  //         actionSheetRef.current = null;
  //     }
  // },[])

  return (
    <View style={styles.body}>
      <ShoppingBag actionSheetRef={actionSheetRef} />
      <View style={styles.headerWrapper}>
        <Text style={styles.header}> Տատիկ </Text>
        <View style={styles.shopping}>
          <IconButton
            icon="shopping-outline"
            // iconColor={MD3Colors.error50}
            size={25}
            onPress={() => actionSheetRef.current?.show()}
          />
        </View>
      </View>
      {children}
    </View>
  );
};

export default ThesisHome;
