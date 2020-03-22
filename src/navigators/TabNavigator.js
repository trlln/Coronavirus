import React from 'react'
import PushNotification from 'react-native-push-notification'
import { ScrollView, Button, Alert, StyleSheet, View, Text, Linking, Header, Picker } from 'react-native';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';
import YouTubePlayer from "react-native-youtube-sdk";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


import TermsAndConditions from '../screens/TermsAndConditions';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartSreen';
import Hygiene from '../screens/Hygiene';

const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: { screen: HomeScreen,
            navigationOptions:{
                tabBarLabel:'Customize',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-settings'}/>
                    </View>),
            }
        },

        Image: { screen: Hygiene,
            navigationOptions:{
                tabBarLabel:'Hygiene',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-water'}/>
                    </View>),
                activeColor: '#615af6',
                inactiveColor: '#46f6d7',
                barStyle: { backgroundColor: '#67baf6' },
            }
        },
        Cart: {
            screen: CartScreen,
            navigationOptions:{
                tabBarLabel:'Resources',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'}/>
                    </View>),
            }
        },
    },
    {
      initialRouteName: "Home",
      activeColor: '#f0edf6',
      inactiveColor: '#226557',
      barStyle: { backgroundColor: 'orange' },
    },
);

export default createAppContainer(TabNavigator);