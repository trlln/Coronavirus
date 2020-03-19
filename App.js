import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PushNotification from 'react-native-push-notification'

import { ScrollView, Button, Alert, StyleSheet, View, Text, Linking, Header, Picker } from 'react-native';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';
import YouTubePlayer from "react-native-youtube-sdk";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

class HomeScreen extends React.Component {

  state = {
    frequency: 15,
    startTime: 5,
    endTime: 9
    };

  async componentDidMount(){
    PushNotification.configure({
      // // (optional) Called when Token is generated (iOS and Android)
      // onRegister: function(token) {
      //   console.log("TOKEN:", token);
      // },
    
      // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
        console.log("NOTIFICATION:", notification);
    
        // // process the notification
    
        // // required on iOS only (see fetchCompletionHandler docs: https://github.com/react-native-community/react-native-push-notification-ios)
        // notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
    
      // // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
      // senderID: "YOUR GCM (OR FCM) SENDER ID",
    
      // // IOS ONLY (optional): default: all - Permissions to register.
      // permissions: {
      //   alert: true,
      //   badge: true,
      //   sound: true
      // },
    
      // // Should the initial notification be popped automatically
      // // default: true
      // popInitialNotification: true,
    
      // /**
      //  * (optional) default: true
      //  * - Specified if permissions (ios) and token (android and ios) will requested or not,
      //  * - if not, you must call PushNotificationsHandler.requestPermissions() later
      //  */
      // requestPermissions: true
    });
  }

  editUser = () => {
    this.props.navigation.navigate("Image");
    console.log(this.state.frequency, this.state.startTime, this.state.endTime);
        };

  render() {
    return (
      <View style={styles.container1}>
      <Text style = {styles.mainheading}> Karona Saaf </Text>
      <Text style = {styles.textStyle1}>Personalize your notifications: </Text>
      <Text style = {styles.textStyle1}>1.Choose the frequency with which you want to receive reminder notifications </Text>
      <Picker style={styles.pickerStyle}
              selectedValue={this.state.frequency}
              onValueChange={(itemValue, itemPosition) =>
                  this.setState({frequency: itemValue})}>
          <Picker.Item label="Every 15 minutes" value="15" />
          <Picker.Item label="Every 30 minutes" value="30" />
          <Picker.Item label="Every 45 minutes" value="45" />
          <Picker.Item label="Every hour" value="60" />
      </Picker>
      <Text style = {styles.textStyle1}>2.Choose the starting time from when you want to start receiving notifications:</Text>
      <Picker style={styles.pickerStyle}
              selectedValue={this.state.startTime}
              onValueChange={(itemValue, itemPosition) =>
                  this.setState({startTime: itemValue})}>
          <Picker.Item label="5:00 AM" value="5" />
          <Picker.Item label="5:30 AM" value="5.5" />
          <Picker.Item label="6:00 AM" value="6" />
          <Picker.Item label="6:30 AM" value="6.5" />
          <Picker.Item label="7:00 AM" value="7" />
          <Picker.Item label="7:30 AM" value="7.5" />
          <Picker.Item label="8:00 AM" value="8" />
          <Picker.Item label="8:30 AM" value="8.5" />
          <Picker.Item label="9:00 AM" value="9" />
      </Picker>
      <Text style = {styles.textStyle1}>3.Choose the ending time after which we will stop sending notifications to you for the day:</Text>
      <Picker style={styles.pickerStyle}
              selectedValue={this.state.endTime}
              onValueChange={(itemValue, itemPosition) =>
                  this.setState({endTime: itemValue})}>
          <Picker.Item label="9:00 PM" value="9" />
          <Picker.Item label="9:30 PM" value="9.5" />
          <Picker.Item label="10:00 PM" value="10" />
          <Picker.Item label="10:30 PM" value="10.5" />
          <Picker.Item label="11:00 PM" value="11" />
          <Picker.Item label="11:30 PM" value="11.5" />
          <Picker.Item label="12:00 AM" value="12" />
      </Picker>
      <Button style = {styles.button1} onPress={this.editUser} title="Save"/>
      </View>
    );
  }
}


class Hygiene extends React.Component {
  render() {
    return (
      <View style={styles.container1}>
      <Text style = {styles.heading}>Hygiene Practices</Text>
      <ScrollView>

          <YouTubePlayer
            ref={ref => (this.youTubePlayer = ref)}
            videoId="seA1wbXUQTs"
            autoPlay={true}
            fullscreen={false}
            showFullScreenButton={true}
            showSeekBar={true}
            showPlayPauseButton={true}
            startTime={0}
            style={{ width: "100%", height: 200 }}
          />
          <Text style = {styles.textStyle}>Correct Way to wash your Hands {"\n"}</Text>

          <YouTubePlayer
            ref={ref => (this.youTubePlayer = ref)}
            videoId="-NHDnpTmUjo"
            autoPlay={false}
            fullscreen={false}
            showFullScreenButton={true}
            showSeekBar={true}
            showPlayPauseButton={true}
            startTime={0}
            style={{ width: "100%", height: 200 }}
          />
            <Text style = {styles.textStyle}> Social Distancing Practices{"\n"} </Text>

          <YouTubePlayer
            ref={ref => (this.youTubePlayer = ref)}
            videoId="Y9VgmhxtJFk"
            autoPlay={false}
            fullscreen={false}
            showFullScreenButton={true}
            showSeekBar={true}
            showPlayPauseButton={true}
            startTime={0}
            style={{ width: "100%", height: 200 }}
          />
            <Text style = {styles.textStyle}> Some Precautions to Protect Yourself{"\n"} </Text>

            <YouTubePlayer
              ref={ref => (this.youTubePlayer = ref)}
              videoId="AQxpQ94Euic"
              autoPlay={false}
              fullscreen={false}
              showFullScreenButton={true}
              showSeekBar={true}
              showPlayPauseButton={true}
              startTime={0}
              style={{ width: "100%", height: 200 }}
            />
              <Text style = {styles.textStyle}> Self Care Ideas for Quarantine {"\n"} </Text>
      </ScrollView>
      </View>
    );
  }
}

class CartScreen extends React.Component {
    render() {
        return (
            <View style={styles.container1}>
            <Text style = {styles.mainheading}> Karona Saaf </Text>
            <Text style = {styles.textStyle1}>Some Reliable Statistics of COVID-19 cases: </Text>
            <Text onPress={ ()=> Linking.openURL('https://www.worldometers.info/coronavirus/') }> 1. Country Wise Statistics </Text>
            <Text onPress={ ()=> Linking.openURL('https://www.mohfw.gov.in/') }> 2. State Wise Break Up in India </Text>
            <Text> (Click on the above to open the relevant links){'\n'} </Text>
            <Text style = {styles.textStyle1}>Brought To You By: {'\n'}Team MyChowkidar</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container1: {
      flex: 1,
    },
    button1:{
      color: 'blue',
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
      }
});

const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: { screen: HomeScreen,
            navigationOptions:{
                tabBarLabel:'Customize',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-settings'}/>
                    </View>),
            }
        },

        Image: { screen: Hygiene,
            navigationOptions:{
                tabBarLabel:'Hygiene',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-water'}/>
                    </View>),
                activeColor: '#615af6',
                inactiveColor: '#46f6d7',
                barStyle: { backgroundColor: '#67baf6' },
            }
        },
        Cart: {
            screen: CartScreen,
            navigationOptions:{
                tabBarLabel:'Resources',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'}/>
                    </View>),
            }
        },
    },
    {
      initialRouteName: "Home",
      activeColor: '#f0edf6',
      inactiveColor: '#226557',
      barStyle: { backgroundColor: 'orange' },
    },
);

export default createAppContainer(TabNavigator);