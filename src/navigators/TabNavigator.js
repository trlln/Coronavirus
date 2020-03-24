import React from 'react'
import PushNotification from 'react-native-push-notification'
import { ScrollView, Button, Alert, StyleSheet, View, Text, Linking, Header, Picker } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import YouTubePlayer from "react-native-youtube-sdk";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


import TermsAndConditions from '../screens/TermsAndConditions';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartSreen';
import Hygiene from '../screens/Hygiene';

const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: 'Customize',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'ios-settings'} />
                    </View>),
            }
        },

        Image: {
            screen: Hygiene,
            navigationOptions: {
                tabBarLabel: 'Hygiene Videos',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'ios-water'} />
                    </View>),
                activeColor: 'green',
                inactiveColor: 'brown',
                barStyle: { backgroundColor: 'gold' },
            }
        },

        Cart: {
            screen: CartScreen,
            navigationOptions: {
                tabBarLabel: 'Resources',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'ios-copy'} />
                    </View>),
            }
        },
    },
    {
        animationEnabled: true,
        initialRouteName: "Home",
        activeColor: 'green',
        inactiveColor: 'brown',
        barStyle: { backgroundColor: 'orange' },
        shifting: true
    },
);

export default createAppContainer(TabNavigator);
