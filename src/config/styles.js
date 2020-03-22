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
    container2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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
        fontSize: 18,
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
      },
      textStyle2:{
        margin: 5,
        fontSize: 16,
        justifyContent: 'center',
        textAlign: 'center',
      },
      textStyle3:{
        marginBottom: 5,
        fontSize: 16,
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: 'orange',
        color: 'brown',
        fontWeight: 'bold',
      },
      button: {
        alignItems: 'center',
        backgroundColor: "orange",
        padding: 10,
        color: 'brown',
        width: '50%',
        marginLeft: '25%',
        marginTop: 10,
        borderRadius: 50
      },
      hyperlinks:{
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 18,
        textDecorationLine: 'underline',
        marginTop: 5
      },
      pickerStyle:{
        height: 40,
        width: "50%",
        color: 'brown',
        justifyContent: 'center',
        backgroundColor: 'orange',
        marginLeft: "25%"
      },
      videos:{
        marginBottom: 50,
      },
      footerstyle:{
        width: '100%',
        height: 70,
        backgroundColor: 'green',
        position: 'absolute',
        textAlign: 'center',
        bottom: 0,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
      }
});
