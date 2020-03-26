import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
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
      textAlign: 'center',
      fontSize: 35,
      backgroundColor: 'orange',
      color: 'brown',
      fontWeight: 'bold',
      height: '10%',
      justifyContent: 'center'
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
      margins: {
        marginBottom: "15.7%",
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
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 5,
        borderRadius:10,
        borderWidth:1,
        borderColor: 'black'
      },
      button2: {
        alignItems: 'center',
        backgroundColor: 'green',
        marginLeft: '5%',
        marginRight: '5%',
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 5,
        borderRadius:5,
        borderWidth:1.5,
        borderColor: 'black'
      },
      hyperlinks:{
        textAlign: 'left',
        justifyContent: 'center',
        fontSize: 18,
        marginTop: 5,
        marginLeft: '3%',
      },
      pickerStyle:{
        height: 40,
        width: "50%",
        color: 'brown',
        justifyContent: 'center',
        backgroundColor: 'orange',
        marginLeft: "25%"
      },
      footerstyle:{
        width: '100%',
        height: '11%',
        backgroundColor: 'green',
        position: 'absolute',
        textAlign: 'center',
        bottom: 0,
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
      }
});
