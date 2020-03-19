/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import Expo, { Notifications } from 'expo'

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import registerForNotifications from './src/PushNotifications';

const App = () => {

  useEffect(() => {
    registerForNotifications();

    Notifications.addListener((notification) => {
      const { data: { text }, origin } = notification;

      if (origin === 'received' && text) {
        Alert.alert('New Push Notification', text, [{ text: 'Ok.' }])
      }
    })
    return () => {

    }
  }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
        >
          <Text>Hi</Text>

        </ScrollView>
      </SafeAreaView>
    </>
  );
};


export default App;
