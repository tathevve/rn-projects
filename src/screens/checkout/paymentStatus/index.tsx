import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IconButton} from 'react-native-paper';
import {useNavigation, useRoute} from '@react-navigation/native';
import Succesful from '../../../../assets/Succesful.png';
import Failur from '../../../../assets/Failur.png';
import {EPath} from '../../../shared/models/enums/path.enum';

export default function PaymentStatus() {
  const navigation = useNavigation();
  const [status, setStatus] = useState('');
  const route = useRoute<any>();

  useEffect(() => {
    if (route.params.type === 'success') {
      setStatus('success');
    } else {
      setStatus('fail');
    }
  }, [route?.params?.type]);

  return (
    <View style={styles.root}>
      <IconButton
        icon="window-close"
        onPress={() => navigation.navigate(EPath.HOME as never)}
      />
      <View style={styles.successSection}>
        {status === 'success' ? (
          <>
            <Image
              style={{width: 123, height: 123}}
              resizeMode="contain"
              source={Succesful}
            />
            <Text style={styles.successText}>
              Your transaction has successfully been completed. Check more
              details of this transaction is your transaction history.
            </Text>
            <Text style={styles.successText}>We value you!</Text>
          </>
        ) : (
          <>
            <Image
              style={{width: 123, height: 123}}
              resizeMode="contain"
              source={Failur}
            />
            <Text style={styles.successText}>
              Oops, Your payment didn’t go through.
            </Text>
            <Text style={styles.successText}>
              An error occurred while processing your payment. Please try again
              or feel free to try another form of payment.
            </Text>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    height: Dimensions?.get('window').height,
  },
  successSection: {
    marginTop: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  successText: {
    color: 'black',
    marginHorizontal: 27,
    fontSize: 16,
    marginBottom: 25,
    marginTop: 25,
  },
  saveBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '20%',
    height: 35,
    marginTop: 10,
    borderStyle: 'solid',
    marginBottom: 15,
  },
});
