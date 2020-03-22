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
            <Text style = {styles.textStyle1}>Some Reliable Resorces to fight COVID-19: </Text>
            <Text onPress={ ()=> Linking.openURL('https://icmr.nic.in/node/39071') }> 1. Indian Council of Medical Research </Text>
            <Text onPress={ ()=> Linking.openURL('https://www.mohfw.gov.in/') }> 2. Ministry of Health and Family Welfare India </Text>
            <Text onPress={ ()=> Linking.openURL('https://www.who.int/health-topics/coronavirus') }> 3. World Health Organization </Text>
            <Text onPress={ ()=> Linking.openURL('https://www.cdc.gov/') }> 4. Centers for Disease Control and Prevention USA </Text>
            <Text onPress={ ()=> Linking.openURL('https://www.worldometers.info/coronavirus/') }> 5. Global Statistics </Text>
            <Text> (Click on the above to open the relevant links){'\n'} </Text>
            <Text style = {styles.footerstyle}>Brought To You By {'\n'}Team MyChowkidar</Text>
            </View>
        );
    }
}

export default CartScreen;