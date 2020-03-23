import React from 'react'
import PushNotification from 'react-native-push-notification'
import { ScrollView, Button, Alert, StyleSheet, View, Text, Linking, Header, Picker } from 'react-native';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';
import YouTubePlayer from "react-native-youtube-sdk";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from '../config/styles'


class CartScreen extends React.Component {
    render() {
        return (
            <View style={styles.container1}>
            <Text style = {styles.mainheading}> Karona Saaf </Text>
            <ScrollView style = {styles.margins}>
            <Text style = {styles.textStyle1}>{'\n'}Some Reliable Resources to fight COVID-19: </Text>
            <Text style = {styles.hyperlinks} onPress={ ()=> Linking.openURL('https://icmr.nic.in/node/39071') }> 1. Indian Council of Medical Research </Text>
            <Text style = {styles.hyperlinks} onPress={ ()=> Linking.openURL('https://www.mohfw.gov.in/') }> 2. Ministry of Health and Family Welfare India </Text>
            <Text style = {styles.hyperlinks} onPress={ ()=> Linking.openURL('https://www.who.int/health-topics/coronavirus') }> 3. World Health Organization </Text>
            <Text style = {styles.hyperlinks} onPress={ ()=> Linking.openURL('https://www.cdc.gov/') }> 4. Centers for Disease Control and Prevention USA </Text>
            <Text style = {styles.textStyle1}>{'\n'}{'\n'}To check the statistics click here: </Text>
            <Text style = {styles.hyperlinks} onPress={ ()=> Linking.openURL('https://www.worldometers.info/coronavirus/') }> 1. Global Statistics </Text>
            <Text style = {styles.hyperlinks} onPress={ ()=> Linking.openURL('https://www.mohfw.gov.in/') }> 2. India State-Wise Statistics </Text>
            <Text style = {styles.textStyle1}>{'\n'}{'\n'}{'\n'}Indian States Helpline Numbers: </Text>
            <Text style = {styles.hyperlinks} onPress={ ()=> Linking.openURL('https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf') }> Coronavirus Helpline Numbers </Text>
            <Text style = {styles.textStyle1}> {'\n'}(Click on the above links to open relevant pages){'\n'} </Text>
            </ScrollView>
            <Text style = {styles.footerstyle}>Brought To You By
              <Text style = {{textDecorationLine: 'underline', color: 'orange', fontSize: 25}} onPress={ ()=> Linking.openURL('https://www.mychowkidar.co.in/') }>{'\n'}Team MyChowkidar </Text>
            </Text>
            </View>
        );
    }
}

export default CartScreen;
