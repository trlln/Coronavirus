import React, {useEffect, useState} from 'react'
import PushNotification from 'react-native-push-notification'
import { ScrollView, Button, Alert, StyleSheet, View, Text, Linking, Header, Picker } from 'react-native';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';
import YouTubePlayer from "react-native-youtube-sdk";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import TermsAndConditions from './src/screens/TermsAndConditions';
import HomeScreen from './src/screens/HomeScreen';
import CartScreen from './src/screens/CartSreen';
import Hygiene from './src/screens/Hygiene';
import TabNavigator from './src/navigators/TabNavigator';
import { firstLogin } from './src/service/firstLogin';
import StackNavigator from './src/navigators/StackNavigator';
import LogIn from './src/screens/LogIn';


const App = () => {

  let [isLogin, setIsLogin] = useState(false)

  // useEffect(() => {
  //   login = () => setIsLogin(firstLogin())
  // } )

//   return firstLogin() ? 
//   // (
//   //   <TermsAndConditions />
//   //   ) :
//     (
//       <TabNavigator />
//     )
// :
//    (
//     <StackNavigator />
//   )

  return (
    <LogIn />
  )
}

export default App;
