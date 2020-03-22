import React from 'react'
import PushNotification from 'react-native-push-notification'
import { ScrollView, Button, Alert, StyleSheet, View, Text, Linking, Header, Picker } from 'react-native';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';
import YouTubePlayer from "react-native-youtube-sdk";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from '../config/styles'

class Hygiene extends React.Component {
    render() {
      return (
        <View style={styles.container1}>
        <Text style = {styles.mainheading}> Hygiene Practice </Text>
        <ScrollView style={styles.videos}>

            <YouTubePlayer
              ref={ref => (this.youTubePlayer = ref)}
              videoId="seA1wbXUQTs"
              autoPlay={false}
              fullscreen={true}
              showFullScreenButton={true}
              showSeekBar={true}
              showPlayPauseButton={true}
              startTime={0}
              style={{ width: "100%", height: 200 }}
              onError={e => console.log(e)}
              onChangeState={e => console.log(e)}
              
            />
            <Text style = {styles.textStyle3}>1. Correct Way to wash your Hands {"\n"}</Text>

            <YouTubePlayer
              ref={ref => (this.youTubePlayer = ref)}
              videoId="-NHDnpTmUjo"
              autoPlay={false}
              fullscreen={true}
              showFullScreenButton={true}
              showSeekBar={true}
              showPlayPauseButton={true}
              startTime={0}
              style={{ width: "100%", height: 200 }}
            />
              <Text style = {styles.textStyle3}>2. Social Distancing Practices{"\n"} </Text>

            <YouTubePlayer
              ref={ref => (this.youTubePlayer = ref)}
              videoId="Y9VgmhxtJFk"
              autoPlay={false}
              fullscreen={true}
              showFullScreenButton={true}
              showSeekBar={true}
              showPlayPauseButton={true}
              startTime={0}
              style={{ width: "100%", height: 200 }}
            />
              <Text style = {styles.textStyle3}>3. Some Precautions to Protect Yourself{"\n"} </Text>


        </ScrollView>
        <Text style = {styles.footerstyle}>Brought To You By
          <Text style ={{textDecorationLine: 'underline', color: 'orange', fontSize: 25}} onPress={ ()=> Linking.openURL('https://www.mychowkidar.co.in/') }>{'\n'}Team MyChowkidar </Text>
        </Text>
        </View>
      );
    }
  }

  export default Hygiene;
