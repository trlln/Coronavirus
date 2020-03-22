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
                <Text style = {styles.footerstyle}>Brought To You By {'\n'}Team MyChowkidar</Text>
        </ScrollView>
        </View>
      );
    }
  }

  export default Hygiene;