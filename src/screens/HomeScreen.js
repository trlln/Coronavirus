import React from 'react'
import PushNotification from 'react-native-push-notification'
import { ScrollView, Button, Alert, StyleSheet, View, Text, Linking, Header, Picker, AsyncStorage, TouchableOpacity } from 'react-native';

import { styles } from '../config/styles'
import { preventiveNotification } from '../config/notificationData'
import axios from 'axios';

class HomeScreen extends React.Component {

  state = {
    frequency: 0.5,
    startTime: 0,
    endTime: 0
  };

  dialCall = (number) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
    else { phoneNumber = `telprompt:${number}`; }
    Linking.openURL(phoneNumber);
  };

  async componentDidMount() {


    // Configuring Push notifications
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log("TOKEN:", token);
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
      <Text style = {styles.textStyle1}>Personalize your notifications: </Text>

      <Text style = {styles.textStyle1}>1.Choose the frequency with which you want to receive reminder notifications </Text>
      <Picker style={styles.pickerStyle}
              selectedValue={this.state.frequency}
              onValueChange={(itemValue, itemPosition) =>
                  this.setState({frequency: itemValue})} mode = 'dropdown'>
          <Picker.Item label="Every 30 minutes" value="0.5" />
          <Picker.Item label="Every hour" value="1" />
          <Picker.Item label="Every 2 hours" value="2" />
          <Picker.Item label="Every 3 hours" value="3" />
        </Picker>
        <Text style={styles.textStyle1}>2.Choose the starting time from when you want to start receiving notifications:</Text>

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
        <Text style={styles.textStyle1}>3.Choose the ending time after which we will stop sending notifications to you for the day:</Text>
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
        <Text style={styles.textStyle2}> Save your settings by pressing the following button: </Text>

        <Button color='green' onPress={async () => {

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


          // // Network call to configure
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

              Alert.alert("Schedule updated!")

        }} title="Push" />

        
       
      <Text style = {styles.textStyle1}>COVID-19 Helpline Number (India)</Text>
      <TouchableOpacity style={styles.button} onPress={()=>{this.dialCall(+911123978046)}}>
          <Text style = {{color: 'brown', fontSize: 16, fontWeight: 'bold'}}> COVID-19 Helpline </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>{this.dialCall(1075)}}>
          <Text style = {{color: 'brown', fontSize: 16, fontWeight: 'bold'}}> Toll Free Helpline </Text>
      </TouchableOpacity>
      </ScrollView>
      <Text style = {styles.footerstyle}>Brought To You By
        <Text style ={{textDecorationLine: 'underline', color: 'orange', fontSize: 25}} onPress={ ()=> Linking.openURL('https://www.mychowkidar.co.in/') }>{'\n'}Team MyChowkidar </Text>
      </Text>
      </View>
    );
  }
}

export default HomeScreen;
