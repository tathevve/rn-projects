import { Dimensions, StyleSheet } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "white"
    },
    bodyHome: {
        marginLeft: 35,
        marginRight: 35,
    },
    page: {
        backgroundColor: 'red'
    },
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
        fontFamily: 'Times New Roman'
    },
    shopping: {
        width: '15%'
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
        resizeMode: "contain"
        // height: '50%'
        // position: 'relative'
    },
    title: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 21
    },
    subtitle: {
        paddingTop: 10
    },
    textView: {
        width: '100%',
        marginTop: 25,
        marginBottom: 15,
    },

    typesOfSections: {
        marginTop: 25
    },
    typesText: {
        fontWeight: '900',
        fontSize: 18,
        fontFamily: 'Mulish',
        letterSpacing: 3,

    },

})