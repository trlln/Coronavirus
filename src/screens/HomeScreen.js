import React from 'react'
import PushNotification from 'react-native-push-notification'
import { ScrollView, Alert, StyleSheet, View, Text, Linking, Header, Picker, AsyncStorage, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { styles } from '../config/styles'
import { preventiveNotification } from '../config/notificationData'
import axios from 'axios';


class HomeScreen extends React.Component {

  constructor() {
    super()
    this.state = {
      frequency: 0.5,
      startTime: 0,
      endTime: 0
    };
  }

  setDefaultState = async () => {

    var defaultState = JSON.parse(await AsyncStorage.getItem('defaultState'));
    if (defaultState) {
      this.setState({
        frequency: defaultState.frequency,
        startTime: defaultState.startTime,
        endTime: defaultState.endTime
      })

    }

  }

  dialCall = (number) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
    else { phoneNumber = `telprompt:${number}`; }
    Linking.openURL(phoneNumber);
  };

  async componentDidMount() {

    this.setDefaultState();




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
        <Text style={styles.mainheading}> Karona Saaf </Text>
        <ScrollView style={styles.margins}>
          <Text style={styles.textStyle2}>Choose the start time, end time and the reminder frequency of notifications below: </Text>
          <Text style={styles.textStyle1}>Reminder Frequency </Text>
          <Picker style={styles.pickerStyle}
            selectedValue={this.state.frequency}
            onValueChange={(itemValue, itemPosition) =>
              this.setState({ frequency: itemValue })} mode='dropdown'>
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



          <Button color='green' onPress={async () => {

            Alert.alert("Update Schedule?",
              "Your notifications schedule will be set as follows: \n 1. Start Time: " + this.state.startTime % 12 + (this.state.startTime < 12 ? " AM" : " PM") + " \n 2. End Time: " + this.state.endTime % 12 + (this.state.endTime < 12 ? " AM" : " PM") + "\n 3. Frequency: " + this.state.frequency + " hour",
              [
                {
                  text: 'Update Schedule', onPress: async () => {
                    //(Math.abs(this.state.startTime - this.state.endTime) < 8) && (this.state.startTime != this.state.endTime)
                    console.log(this.state.startTime)
                    console.log(this.state.endTime)
                    console.log(this.state.frequency)

                    // AsyncStorage.removeItem('firstLogin')

                    // // Selecting random notification
                    
                    // Immediate notification
                    // PushNotification.localNotification({
                      //   title: notification.title,
                      //   message: notification.body,
                      // })
                      await PushNotification.cancelAllLocalNotifications();
                      
                      // Scheduling notifications and randomizing them
                      // let repeatTime = 60 * 1000 * 60 * this.state.frequency;
                      // alert(JSON.stringify(notificationObject))
                      

                      PushNotification.localNotificationSchedule({
                        ...preventiveNotification[0],
                        repeatType: 'time',
                        repeatTime: 60 * 1000 * 60 * this.state.frequency * 4,
                        date: new Date(Date.now()),
                      }
                      )

                      PushNotification.localNotificationSchedule({
                        ...preventiveNotification[1],
                        repeatType: 'time',
                        repeatTime: 60 * 1000 * 60 * this.state.frequency * 4,
                        date: new Date(Date.now() + 60 * 1000 * 60 * this.state.frequency),
                      }
                      
                    )

                    PushNotification.localNotificationSchedule({
                      ...preventiveNotification[2],
                      repeatType: 'time',
                      repeatTime: 60 * 1000 * 60 * this.state.frequency * 4,
                      date: new Date(Date.now() + 2 * 60 * 1000 * 60 * this.state.frequency),
                    }
                    
                  )

                  PushNotification.localNotificationSchedule({
                    ...preventiveNotification[4],
                    repeatType: 'time',
                    repeatTime: 60 * 1000 * 60 * this.state.frequency * 4,
                    date: new Date(Date.now() + 3 * 60 * 1000 * 60 * this.state.frequency),
                  }
                  
                )

                // Saving current state
          let defaultState = {};
          defaultState.startTime = this.state.startTime;
          defaultState.endTime = this.state.endTime;
          defaultState.frequency = this.state.frequency;
          AsyncStorage.setItem('defaultState', JSON.stringify(defaultState))

                    // // Network call to configure
                    const uid = JSON.parse(await AsyncStorage.getItem('uid'));
                    axios.post('https://us-central1-coronavirus-bf9cb.cloudfunctions.net/addUserDeatails', {
                      "userInfo": {
                        "uid": uid,
                        "personalize": {
                          start: this.state.startTime,
                          end: this.state.endTime,
                          interval: this.state.frequency
                        }
                      }
                    }).then(() => {
                      console.log("success")
                    }
                    ).catch(() => {
                      console.log('fail')
                    }
                    );
                  }
                },
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
              ],
              { cancelable: false }
            )

          }
          } buttonStyle={styles.button2} title="Save" />

        </ScrollView>
        <Text style={styles.footerstyle}>Brought To You By
        <Text style={{ textDecorationLine: 'underline', color: 'orange', fontSize: 20 }} onPress={() => Linking.openURL('https://www.mychowkidar.co.in/')}>{'\n'}Team MyChowkidar </Text>
        </Text>
      </View>
    );
  }
}

export default HomeScreen;
