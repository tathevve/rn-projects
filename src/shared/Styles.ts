import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '100%',
    height: 35,
    marginTop: 35,
    borderStyle: 'solid',
    color: 'black',
    marginBottom: 15,
  },
  bodyHome: {
    marginLeft: 35,
    marginRight: 35,
  },
  page: {
    backgroundColor: 'red',
  },

  logo: {
    // width: '100%',
    alignItems: 'center',
  },
  image: {
    width: windowWidth,
    height: 100,
    paddingTop: 50,
    flex: 1,
    resizeMode: 'contain',
    // height: '50%'
    // position: 'relative'
  },
  title: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 21,
  },
  subtitle: {
    paddingTop: 10,
  },
  textView: {
    width: '100%',
    marginTop: 25,
    marginBottom: 15,
  },
});
