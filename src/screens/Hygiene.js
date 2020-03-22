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
        <Text style = {styles.mainheading}> Hygiene Practice </Text>
        <ScrollView style={styles.videos}>
            <Text style = {styles.textStyle1}>{'\n'}Check out some of the videos recommended  by various government organizations here: </Text>
            <Text>{"\n"} </Text>
            <Text style = {styles.textStyle3}>1. Find out the correct way to wash your hands. {"\n"}</Text>
            {Platform.OS === 'android' &&
            <Button title = "Click here to play this video" color='green'
            onPress = {()=>{
              YouTubeStandaloneAndroid.playVideos({
                apiKey: "AIzaSyDVxQTyQ2MH6YIOrLxX3W9TOPsPMHJOTCU",
                videoIds:["seA1wbXUQTs"],
                autoplay: true,
                lightboxMode: true,
                startIndex: 1,
                startTime: 0,
              })
            }
          }/>}

          {Platform.OS === 'ios' &&
          <Button title = "Click here to play this video" color='green'
          onPress = {()=>{
            YouTubeStandaloneIOS.playVideo("seA1wbXUQTs")
          }
        }/>}
            <Text>{"\n"} </Text>

              <Text style = {styles.textStyle3}>2. Check out how to maintain "Social Distancing"{"\n"} </Text>

              {Platform.OS === 'android' && <Button title = "Click here to play this video" color='green'
              onPress = {()=>{
                YouTubeStandaloneAndroid.playVideos({
                  apiKey: "AIzaSyDVxQTyQ2MH6YIOrLxX3W9TOPsPMHJOTCU",
                  videoIds: ["-NHDnpTmUjo"],
                  autoplay: true,
                  lightboxMode: true,
                  startIndex: 1,
                  startTime: 0,
                })
              }
            }/>}
            {Platform.OS === 'ios' &&
            <Button title = "Click here to play this video" color='green'
            onPress = {()=>{
              YouTubeStandaloneIOS.playVideo("-NHDnpTmUjo")
            }
          }/>}
              <Text>{"\n"} </Text>
              <Text style = {styles.textStyle3}>3. See what precautions you can follow to protect yourself and your loved ones </Text>

              {Platform.OS === 'android' && <Button title = "Click here to play this video" color='green'
              onPress = {()=>{
                YouTubeStandaloneAndroid.playVideos({
                  apiKey: "AIzaSyDVxQTyQ2MH6YIOrLxX3W9TOPsPMHJOTCU",
                  videoIds: ["Y9VgmhxtJFk"],
                  autoplay: true,
                  lightboxMode: true,
                  startIndex: 1,
                  startTime: 0,
                })
              }
            }/>}
            {Platform.OS === 'ios' &&
            <Button title = "Click here to play this video" color='green'
            onPress = {()=>{
              YouTubeStandaloneIOS.playVideo("Y9VgmhxtJFk")
            }
          }/>}
          <Text>{"\n"} </Text>

          <Text style = {styles.textStyle3}>4. Find out reliable information about Coronavirus from World Health Organization. {"\n"}</Text>
          {Platform.OS === 'android' &&
          <Button title = "Click here to play this video" color='green'
          onPress = {()=>{
            YouTubeStandaloneAndroid.playVideos({
              apiKey: "AIzaSyDVxQTyQ2MH6YIOrLxX3W9TOPsPMHJOTCU",
              videoIds:["mOV1aBVYKGA"],
              autoplay: true,
              lightboxMode: true,
              startIndex: 1,
              startTime: 0,
            })
          }
        }/>}

        {Platform.OS === 'ios' &&
        <Button title = "Click here to play this video" color='green'
        onPress = {()=>{
          YouTubeStandaloneIOS.playVideo("mOV1aBVYKGA")
        }
      }/>}
          <Text>{"\n"} </Text>



        </ScrollView>
        <Text style = {styles.footerstyle}>Brought To You By
          <Text style ={{textDecorationLine: 'underline', color: 'orange', fontSize: 25}} onPress={ ()=> Linking.openURL('https://www.mychowkidar.co.in/') }>{'\n'}Team MyChowkidar </Text>
        </Text>
        </View>
      )
    }
  }

  export default Hygiene;
