import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container1: {
      flex: 1,
    },
    textStyle: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      backgroundColor: 'black',
      color: 'white',
    },
    heading: {
      textAlign: 'center',
      fontSize: 30,
      backgroundColor: 'black',
      color: 'white',
      fontWeight: 'bold',
    },
    mainheading: {
      textAlign: 'left',
      fontSize: 50,
      backgroundColor: 'orange',
      color: 'brown',
      fontWeight: 'bold',
    },
      textStyle1:{
        margin: 5,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'left',
      },
      pickerStyle:{
        height: 40,
        width: "50%",
        color: 'black',
        justifyContent: 'center',
      },
      footerstyle:{
        width: '100%',
        height: 50,
        backgroundColor: '#6495ed',
        position: 'absolute',
        textAlign: 'center',
        bottom: 0,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
      }
});