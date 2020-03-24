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
            <Text style = {styles.textStyle1}>{'\n'}Trusted Resources </Text>
            <Text style = {styles.hyperlinks}>1. {'\t'}
              <Text style = {{textDecorationLine: 'underline'}} onPress={ ()=> Linking.openURL('https://icmr.nic.in/node/39071') }>Indian Council of Medical Research </Text>
            </Text>
            <Text style = {styles.hyperlinks}>2. {'\t'}
              <Text style = {{textDecorationLine: 'underline'}} onPress={ ()=> Linking.openURL('https://www.mohfw.gov.in/') }>Ministry of Health and Family Welfare, India </Text>
            </Text>
            <Text style = {styles.hyperlinks}>3. {'\t'}
              <Text style = {{textDecorationLine: 'underline'}} onPress={ ()=> Linking.openURL('https://www.who.int/health-topics/coronavirus') }>World Health Organization </Text>
            </Text>
            <Text style = {styles.hyperlinks}>4. {'\t'}
              <Text style = {{textDecorationLine: 'underline'}} onPress={ ()=> Linking.openURL('https://www.cdc.gov/') }>Centers for Disease Control and Prevention, USA </Text>
            </Text>
            <Text style = {styles.textStyle1}>{'\n'}{'\n'}Latest Statistics </Text>
            <Text style = {styles.hyperlinks}>1. {'\t'}
              <Text style = {{textDecorationLine: 'underline'}} onPress={ ()=> Linking.openURL('https://www.mohfw.gov.in/') }>India State-Wise Statistics </Text>
            </Text>
            <Text style = {styles.textStyle1}>{'\n'}{'\n'}Helpline Numbers for India </Text>
            <Text style = {styles.hyperlinks}>1. {'\t'}
              <Text style = {{textDecorationLine: 'underline'}} onPress={ ()=> Linking.openURL('https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf') }>View Coronavirus Helpline Numbers </Text>
            </Text>
            </ScrollView>
            <Text style = {styles.footerstyle}>Brought To You By
              <Text style = {{textDecorationLine: 'underline', color: 'orange', fontSize: 23}} onPress={ ()=> Linking.openURL('https://www.mychowkidar.co.in/') }>{'\n'}Team MyChowkidar </Text>
            </Text>
            </View>
        );
    }
}

export default CartScreen;
