import React from 'react'
import { ScrollView, Alert, StyleSheet, View, Text, Linking, Header, Picker, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';
import YouTube,{YouTubeStandaloneAndroid, YouTubeStandaloneIOS}  from 'react-native-youtube';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { styles } from '../config/styles'

class Hygiene extends React.Component {
    render() {
      return (
        <View style={styles.container1}>
        <Text style = {styles.mainheading}> Good Hygiene Practices </Text>
        <ScrollView style={styles.margins}>
            <Text>{"\n"} </Text>
            {Platform.OS === 'android' &&
            <Button title = " Correct way to wash your hands" color='green'  buttonStyle={styles.button2}
            onPress = {()=>{
              YouTubeStandaloneAndroid.playVideos({
                apiKey: "AIzaSyDVxQTyQ2MH6YIOrLxX3W9TOPsPMHJOTCU",
                videoIds:["dK-O0Bv7HK4"],
                autoplay: true,
                lightboxMode: true,
                startIndex: 1,
                startTime: 0,
              })
            }
          }/>}

          {Platform.OS === 'ios' &&
          <Button title = " Correct way to wash your hands" color='green'buttonStyle={styles.button2}
          onPress = {()=>{
            YouTubeStandaloneIOS.playVideo("dK-O0Bv7HK4")
          }
        }/>}
            <Text>{"\n"} </Text>



              {Platform.OS === 'android' && <Button title = " Protect yourself from diseases" color='green'buttonStyle={styles.button2}
              onPress = {()=>{
                YouTubeStandaloneAndroid.playVideos({
                  apiKey: "AIzaSyDVxQTyQ2MH6YIOrLxX3W9TOPsPMHJOTCU",
                  videoIds: ["1APwq1df6Mw"],
                  autoplay: true,
                  lightboxMode: true,
                  startIndex: 1,
                  startTime: 0,
                })
              }
            }/>}
            {Platform.OS === 'ios' &&
            <Button title = " Protect yourself from diseases" color='green'style={styles.button2}
            onPress = {()=>{
              YouTubeStandaloneIOS.playVideo("1APwq1df6Mw")
            }
          }/>}
              <Text>{"\n"} </Text>

              {Platform.OS === 'android' && <Button title = " Precautions to follow" color='green'buttonStyle={styles.button2}
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
            <Button title = " Precautions to follow" color='green'buttonStyle={styles.button2}
            onPress = {()=>{
              YouTubeStandaloneIOS.playVideo("Y9VgmhxtJFk")
            }
          }/>}
          <Text>{"\n"} </Text>


          {Platform.OS === 'android' &&
          <Button title = " How to declare your symptoms" color='green'buttonStyle={styles.button2}
          onPress = {()=>{
            YouTubeStandaloneAndroid.playVideos({
              apiKey: "AIzaSyDVxQTyQ2MH6YIOrLxX3W9TOPsPMHJOTCU",
              videoIds:["TH95P9cYhW0"],
              autoplay: true,
              lightboxMode: true,
              startIndex: 1,
              startTime: 0,
            })
          }
        }/>}

        {Platform.OS === 'ios' &&
        <Button title = " How to declare your symptoms" color='green'buttonStyle={styles.button2}
        onPress = {()=>{
          YouTubeStandaloneIOS.playVideo("TH95P9cYhW0")
        }
      }/>}
          <Text>{"\n"} </Text>

        </ScrollView>
        <Text style = {styles.footerstyle}>Brought To You By
          <Text style ={{textDecorationLine: 'underline', color: 'orange', fontSize: 20}} onPress={ ()=> Linking.openURL('https://www.mychowkidar.co.in/') }>{'\n'}Team MyChowkidar </Text>
        </Text>
        </View>
      )
    }
  }

  export default Hygiene;
