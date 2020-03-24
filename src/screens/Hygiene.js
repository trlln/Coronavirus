import React from 'react'
import PushNotification from 'react-native-push-notification'
import { ScrollView, Button, Alert, StyleSheet, View, Text, Linking, Header, Picker, Platform } from 'react-native';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';
import YouTube,{YouTubeStandaloneAndroid, YouTubeStandaloneIOS}  from 'react-native-youtube';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from '../config/styles'

class Hygiene extends React.Component {
    render() {
      return (
        <View style={styles.container1}>
        <Text style = {styles.mainheading}> Hygiene Videos </Text>
        <ScrollView style={styles.margins}>
            <Text style = {styles.textStyle1}>{'\n'}Check out some of the hygiene videos </Text>
            <Text>{"\n"} </Text>
            {Platform.OS === 'android' &&
            <Button title = "1. Correct way to wash your hands." color='green'
            onPress = {()=>{
              YouTubeStandaloneAndroid.playVideos({
                apiKey: "AIzaSyDVxQTyQ2MH6YIOrLxX3W9TOPsPMHJOTCU",
                videoIds:["dK-O0Bv7HK4"],
                autoplay: true,
                lightboxMode: false,
                startIndex: 1,
                startTime: 0,
              })
            }
          }/>}

          {Platform.OS === 'ios' &&
          <Button title = "1. Correct way to wash your hands." color='green'
          onPress = {()=>{
            YouTubeStandaloneIOS.playVideo("dK-O0Bv7HK4")
          }
        }/>}
            <Text>{"\n"} </Text>



              {Platform.OS === 'android' && <Button title = "2. Protect yourself from COVID-19" color='green'
              onPress = {()=>{
                YouTubeStandaloneAndroid.playVideos({
                  apiKey: "AIzaSyDVxQTyQ2MH6YIOrLxX3W9TOPsPMHJOTCU",
                  videoIds: ["1APwq1df6Mw"],
                  autoplay: true,
                  lightboxMode: false,
                  startIndex: 1,
                  startTime: 0,
                })
              }
            }/>}
            {Platform.OS === 'ios' &&
            <Button title = "2. How to maintain Social Distancing" color='green'
            onPress = {()=>{
              YouTubeStandaloneIOS.playVideo("1APwq1df6Mw")
            }
          }/>}
              <Text>{"\n"} </Text>

              {Platform.OS === 'android' && <Button title = "3. Some precautions to follow" color='green'
              onPress = {()=>{
                YouTubeStandaloneAndroid.playVideos({
                  apiKey: "AIzaSyDVxQTyQ2MH6YIOrLxX3W9TOPsPMHJOTCU",
                  videoIds: ["Y9VgmhxtJFk"],
                  autoplay: true,
                  lightboxMode: false,
                  startIndex: 1,
                  startTime: 0,
                })
              }
            }/>}
            {Platform.OS === 'ios' &&
            <Button title = "3. Some precautions to follow" color='green'
            onPress = {()=>{
              YouTubeStandaloneIOS.playVideo("Y9VgmhxtJFk")
            }
          }/>}
          <Text>{"\n"} </Text>

          {Platform.OS === 'android' && <Button title = "4. Be a Responsible Citizen" color='green'
          onPress = {()=>{
            YouTubeStandaloneAndroid.playVideos({
              apiKey: "AIzaSyDVxQTyQ2MH6YIOrLxX3W9TOPsPMHJOTCU",
              videoIds: ["I47QOyX71kg"],
              autoplay: true,
              lightboxMode: false,
              startIndex: 1,
              startTime: 0,
            })
          }
        }/>}
        {Platform.OS === 'ios' &&
        <Button title = "4. Be a Responsible Citizen" color='green'
        onPress = {()=>{
          YouTubeStandaloneIOS.playVideo("I47QOyX71kg")
        }
        }/>}
        <Text>{"\n"} </Text>

          {Platform.OS === 'android' &&
          <Button title = "5. Information about COVID-19" color='green'
          onPress = {()=>{
            YouTubeStandaloneAndroid.playVideos({
              apiKey: "AIzaSyDVxQTyQ2MH6YIOrLxX3W9TOPsPMHJOTCU",
              videoIds:["mOV1aBVYKGA"],
              autoplay: true,
              lightboxMode: false,
              startIndex: 1,
              startTime: 0,
            })
          }
        }/>}

        {Platform.OS === 'ios' &&
        <Button title = "5. Information about COVID-19" color='green'
        onPress = {()=>{
          YouTubeStandaloneIOS.playVideo("mOV1aBVYKGA")
        }
      }/>}
          <Text>{"\n"} </Text>

          {Platform.OS === 'android' &&
          <Button title = "6. Declare your symptoms" color='green'
          onPress = {()=>{
            YouTubeStandaloneAndroid.playVideos({
              apiKey: "AIzaSyDVxQTyQ2MH6YIOrLxX3W9TOPsPMHJOTCU",
              videoIds:["TH95P9cYhW0"],
              autoplay: true,
              lightboxMode: false,
              startIndex: 1,
              startTime: 0,
            })
          }
        }/>}

        {Platform.OS === 'ios' &&
        <Button title = "6. Declare your symptoms" color='green'
        onPress = {()=>{
          YouTubeStandaloneIOS.playVideo("TH95P9cYhW0")
        }
      }/>}
          <Text>{"\n"} </Text>

        </ScrollView>
        <Text style = {styles.footerstyle}>Brought To You By
          <Text style ={{textDecorationLine: 'underline', color: 'orange', fontSize: 23}} onPress={ ()=> Linking.openURL('https://www.mychowkidar.co.in/') }>{'\n'}Team MyChowkidar </Text>
        </Text>
        </View>
      )
    }
  }

  export default Hygiene;
