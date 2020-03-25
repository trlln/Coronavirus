import React from 'react'
import PushNotification from 'react-native-push-notification'
import { ScrollView, Button, Alert, StyleSheet, View, Text, Linking, Header, Picker, AsyncStorage, TouchableOpacity } from 'react-native';

import { styles } from '../config/styles'
import { preventiveNotification } from '../config/notificationData'
import axios from 'axios';
import BackgroundGeolocation from '@mauron85/react-native-background-geolocation';
import RNSimData from 'react-native-sim-data'


class HomeScreen extends React.Component {

  state = {
    frequency: 0.5,
    startTime: 0,
    endTime: 0
  };

  setDefaultState = () => {

    var defaultState = JSON.parse(await AsyncStorage.getItem('defaultState'));
    if(defaultState){
      this.state.frequency = defaultState.frequency;
      this.state.startTime = defaultState.startTime;
      this.state.endTime = defaultState.endTime;
    }

  }

  dialCall = (number) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
    else { phoneNumber = `telprompt:${number}`; }
    Linking.openURL(phoneNumber);
  };

  async componentDidMount() {

    setDefaultState();

    // Configure BAckground location
    BackgroundGeolocation.configure({
      locationProvider: BackgroundGeolocation.DISTANCE_FILTER_PROVIDER,
      desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
      stationaryRadius: 15,
      debug: false,
      distanceFilter: 15,
      stopOnTerminate: false,
      startOnBoot: true,
      interval: 1000 * 60 * 5,
      fastestInterval: 1000 * 60 * 6,
      activitiesInterval: 1000 * 60 * 7,
      stopOnStillActivity: true, // on still activity might change
      notificationsEnabled: false, // change
      startForeground: true,
      notificationTitle: 'Background tracking', // remove
      notificationText: 'enabled', // remove
      url: 'https://us-central1-coronavirus-bf9cb.cloudfunctions.net/addUserLocations', // might create a new function to handle
      syncUrl: 'https://us-central1-coronavirus-bf9cb.cloudfunctions.net/addUserLocations', // might create a new function to handle
      
      httpHeaders: {
        
      },
      // customize post properties
      postTemplate: {
          uid: '697081c7-f029-47e9-8faf-1f2702d6a515',
          lat: '@latitude',
          lon: '@longitude',
          alt: '@altitude',
          speed: '@speed',
          accuracy: '@accuracy',
          time: '@time'
      },
    });


    try{
      // to know "IN_VEHICLE", "ON_BICYCLE", "ON_FOOT", "RUNNING", "STILL",
      // "TILTING", "UNKNOWN", "WALKING"
      const eventSubscription = BackgroundGeolocation.on('event', () => null);
    }
    catch(err) {
      console.log('not registered')
    }

    // BackgroundGeolocation.on('stop', () => {
    //   console.log('[INFO] BackgroundGeolocation service has been stopped');
    // });

    BackgroundGeolocation.on('error', (error) => {
      console.log('[ERROR] BackgroundGeolocation error:', error);
    });

    BackgroundGeolocation.on('authorization', (status) => {
      console.log('[INFO] BackgroundGeolocation authorization status: ' + status);
      if (status !== BackgroundGeolocation.AUTHORIZED) {
        // we need to set delay or otherwise alert may not be shown
        setTimeout(() =>
          Alert.alert('App requires location tracking permission', 'Would you like to open app settings?', [
            { text: 'Yes', onPress: () => BackgroundGeolocation.showAppSettings() },
            { text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel' }
          ]), 1000);
      }
    });

    let uid = await AsyncStorage.getItem('uid')
    // post from here
    BackgroundGeolocation.on('background', () => {
      console.log(`[INFO] App is in background ${uid}`);
    });

    BackgroundGeolocation.on('foreground', () => {
      console.log(`[INFO] App is in foreground ${uid}`);
    });

    // just checking status on rerenderr // TODO: remvoe
    BackgroundGeolocation.checkStatus(status => {
      console.log('[INFO] BackgroundGeolocation service is running', status.isRunning);
      console.log('[INFO] BackgroundGeolocation services enabled', status.locationServicesEnabled);
      console.log('[INFO] BackgroundGeolocation auth status: ' + status.authorization);

      // you don't need to check status before start (this is just the example)
      if (!status.isRunning) {
        BackgroundGeolocation.start(); //triggers start on start event
      }
    });

    BackgroundGeolocation.on('start', () => {
      console.log('[INFO] BackgroundGeolocation service has been started');
    });

    BackgroundGeolocation.on('location', (location) => {
      // handle your locations here
      // to perform long running operation on iOS
      // you need to create background task
      console.log('location here')
      BackgroundGeolocation.startTask(taskKey => {
        // execute long running task
        // eg. ajax post location
        // IMPORTANT: task has to be ended by endTask
        console.log('location started')
        console.log(`${uid} ${JSON.stringify(location)}`);
        BackgroundGeolocation.endTask(taskKey);
      });
    });


    // Configuring Push notifications
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        // TODO: post this token to the serevr
        // console.log("TOKEN:", token);
      },

      // (required) Called when a remote or local notification is opened or received
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);

        // process the notification

        // // required on iOS only (see fetchCompletionHandler docs: https://github.com/react-native-community/react-native-push-notification-ios)
        // notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
      senderID: "252340556587",

      // // IOS ONLY (optional): default: all - Permissions to register.
      // permissions: {
      //   alert: true,
      //   badge: true,
      //   sound: true
      // },

      // Should the initial notification be popped automatically
      // default: true
      // popInitialNotification: true,

      // /**
      //  * (optional) default: true
      //  * - Specified if permissions (ios) and token (android and ios) will requested or not,
      //  * - if not, you must call PushNotificationsHandler.requestPermissions() later
      //  */
      requestPermissions: true
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
      <ScrollView style = {styles.margins}>
      <Text style = {styles.textStyle1}>Reminder Frequency </Text>
      <Picker style={styles.pickerStyle}
              selectedValue={this.state.frequency}
              onValueChange={(itemValue, itemPosition) =>
                  this.setState({frequency: itemValue})} mode = 'dropdown'>
          <Picker.Item label="Every 30 minutes" value="0.5" />
          <Picker.Item label="Every hour" value="1" />
          <Picker.Item label="Every 2 hours" value="2" />
          <Picker.Item label="Every 3 hours" value="3" />
        </Picker>
        <Text style={styles.textStyle1}>Start Time</Text>

        <Picker style={styles.pickerStyle}
          selectedValue={this.state.startTime}
          onValueChange={(itemValue, itemPosition) =>
            this.setState({ startTime: itemValue })} mode='dropdown'>
          <Picker.Item label="00:00 AM" value="0" />
          <Picker.Item label="1:00 AM" value="1" />
          <Picker.Item label="2:00 AM" value="2" />
          <Picker.Item label="3:00 AM" value="3" />
          <Picker.Item label="4:00 AM" value="4" />
          <Picker.Item label="5:00 AM" value="5" />
          <Picker.Item label="6:00 AM" value="6" />
          <Picker.Item label="7:00 AM" value="7" />
          <Picker.Item label="8:00 AM" value="8" />
          <Picker.Item label="9:00 AM" value="9" />
          <Picker.Item label="10:00 AM" value="10" />
          <Picker.Item label="11:00 AM" value="11" />
          <Picker.Item label="12:00 PM" value="12" />
          <Picker.Item label="1:00 PM" value="13" />
          <Picker.Item label="2:00 PM" value="14" />
          <Picker.Item label="3:00 PM" value="15" />
          <Picker.Item label="4:00 PM" value="16" />
          <Picker.Item label="5:00 PM" value="17" />
          <Picker.Item label="6:00 PM" value="18" />
          <Picker.Item label="7:00 PM" value="19" />
          <Picker.Item label="8:00 PM" value="20" />
          <Picker.Item label="9:00 PM" value="21" />
          <Picker.Item label="10:00 PM" value="22" />
          <Picker.Item label="11:00 PM" value="23" />
        </Picker>
        <Text style={styles.textStyle1}>End Time</Text>
        <Picker style={styles.pickerStyle}
          selectedValue={this.state.endTime}
          onValueChange={(itemValue, itemPosition) =>
            this.setState({ endTime: itemValue })} mode='dropdown'>
          <Picker.Item label="00:00 AM" value="0" />
          <Picker.Item label="1:00 AM" value="1" />
          <Picker.Item label="2:00 AM" value="2" />
          <Picker.Item label="3:00 AM" value="3" />
          <Picker.Item label="4:00 AM" value="4" />
          <Picker.Item label="5:00 AM" value="5" />
          <Picker.Item label="6:00 AM" value="6" />
          <Picker.Item label="7:00 AM" value="7" />
          <Picker.Item label="8:00 AM" value="8" />
          <Picker.Item label="9:00 AM" value="9" />
          <Picker.Item label="10:00 AM" value="10" />
          <Picker.Item label="11:00 AM" value="11" />
          <Picker.Item label="12:00 PM" value="12" />
          <Picker.Item label="1:00 PM" value="13" />
          <Picker.Item label="2:00 PM" value="14" />
          <Picker.Item label="3:00 PM" value="15" />
          <Picker.Item label="4:00 PM" value="16" />
          <Picker.Item label="5:00 PM" value="17" />
          <Picker.Item label="6:00 PM" value="18" />
          <Picker.Item label="7:00 PM" value="19" />
          <Picker.Item label="8:00 PM" value="20" />
          <Picker.Item label="9:00 PM" value="21" />
          <Picker.Item label="10:00 PM" value="22" />
          <Picker.Item label="11:00 PM" value="23" />
        </Picker>
        <Text> {'\n'}</Text>



        <Button color='green'  onPress={async () => {
          //(Math.abs(this.state.startTime - this.state.endTime) < 8) && (this.state.startTime != this.state.endTime)
          console.log(this.state.startTime)
          console.log(this.state.endTime)
          console.log(this.state.frequency)

          // AsyncStorage.removeItem('firstLogin')

          // // Selecting random notification
          let a = Math.floor(Math.random()*8);
          var notification = preventiveNotification[a]

          // Alert.alert(JSON.stringify(notification.title))

          // Immediate notification
          // PushNotification.localNotification({
          //   title: notification.title,
          //   message: notification.body,
          // })
          PushNotification.cancelAllLocalNotifications();

          // Scheduling notification
          PushNotification.localNotificationSchedule({
            title: notification.title,
            message: notification.body,
            repeatType: 'time',
            repeatTime: 60 * 1000 * 60 * this.state.frequency,
            date: new Date(Date.now()),
          })


          // BackgroundGeolocation.on('start', () => {
          //   console.log('[INFO] BackgroundGeolocation service has been started');
          // });

          // BackgroundGeolocation.on('location', (location) => {
          //   // handle your locations here
          //   // to perform long running operation on iOS
          //   // you need to create background task
          //   console.log('location here')
          //   BackgroundGeolocation.startTask(taskKey => {
          //     // execute long running task
          //     // eg. ajax post location
          //     // IMPORTANT: task has to be ended by endTask
          //     console.log('location started')
          //     console.log(`${uid} ${JSON.stringify(location)}`);
          //     BackgroundGeolocation.endTask(taskKey);
          //   });
          // });


          // // // Network call to configure
          // const uid = JSON.parse(await AsyncStorage.getItem('uid'));
          // axios.post('https://us-central1-coronavirus-bf9cb.cloudfunctions.net/addUserDeatails', {
          //         "userInfo": {
          //             "uid": uid,
          //             "personalize": {
          //               start: this.state.startTime,
          //               end: this.state.endTime,
          //               interval: this.state.frequency
          //             }
          //         }
          //     }).then(() => {
          //         console.log("success")
          //     }
          //     ).catch(() => {
          //       console.log('fail')
          //     }
          //     );


          try{
            console.log(RNSimData.getSimInfo().deviceId0)
          }
          catch(err) {
            console.log('sim data error')
          }

          // Saving current state
          let defaultState = this.state;
          AsyncStorage.setItem('defaultState', JSON.stringify(defaultState))
              Alert.alert("Your schedule has been updated.")

        }} title="Save your settings" />



      <Text style = {styles.textStyle1}>COVID-19 Helpline Number (India)</Text>
      <TouchableOpacity style={styles.button} onPress={()=>{this.dialCall(+911123978046)}}>
          <Text style = {{color: 'brown', fontSize: 16, fontWeight: 'bold'}}> COVID-19 Helpline </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>{this.dialCall(1075)}}>
          <Text style = {{color: 'brown', fontSize: 16, fontWeight: 'bold'}}> Toll Free Helpline </Text>
      </TouchableOpacity>
      </ScrollView>
      <Text style = {styles.footerstyle}>Brought To You By
        <Text style ={{textDecorationLine: 'underline', color: 'orange', fontSize: 23}} onPress={ ()=> Linking.openURL('https://www.mychowkidar.co.in/') }>{'\n'}Team MyChowkidar </Text>
      </Text>
      </View>
    );
  }
}

export default HomeScreen;
