import React from 'react';
import { View, StyleSheet, Text, Image, AsyncStorage, Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import TabNavigator from '../navigators/TabNavigator';
import { addUserDetails } from '../service/addUserDetails';
import { createUser } from '../service/createUser';
import BackgroundGeolocation from '@mauron85/react-native-background-geolocation';
import uuid from 'react-native-uuid'


const slides = [
  {
    key: 'thanks',
    title: 'THANK YOU FOR DOWNLOADING',
    text: 'The next three screens will guide you through a tutorial of the app.',
    image: require('../../assets/thanks.jpg'),
    backgroundColor: 'orange',
  },
  {
    key: 'notifications',
    title: '1. PERSONALIZE YOUR NOTIFICATIONS',
    text: 'Choose a frequency, the start and end times according to your convenience. We will send you reminder notifications to practise hygiene practices.',
    image: require('../../assets/1.png'),
  },
  {
    key: 'videos',
    title: '2. HYGIENE PRACTICES',
    text: 'We have some of the videos recommended by World Health Organization and other government organizations that demonstrate the best hygiene practices to follow.',
    image: require('../../assets/2.png'),
  },
  {
    key: 'resources',
    title: '3. MISCELLANEOUS ',
    text: 'Here you can easily find links to reliable government organizations that show the latest statistics and precautions to follow.',
    image: require('../../assets/3.png'),
  }
];

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 0.8);
const imageWidth = dimensions.width;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'green'
  },
  image: {
    width: imageWidth,
    height: imageHeight ,
    resizeMode: 'stretch'
  },
  text: {
    color: 'orange',
    backgroundColor: 'transparent',
    textAlign: 'justify',
    paddingHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: "10%",
  },
  title: {
    fontSize: 28,
    color: 'yellow',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});


class Tutorial extends React.Component {
  state = {
    showRealApp: false
  }

  componentDidMount() {

    const uid = uuid.v4();
    this.sendUserDetails(uid);

    // make uid here
    // let uid = '1234';

    // Configure BAckground location
    BackgroundGeolocation.configure({
      locationProvider: BackgroundGeolocation.DISTANCE_FILTER_PROVIDER,
      desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
      stationaryRadius: 50,
      debug: false,
      distanceFilter: 50,
      stopOnTerminate: false,
      startOnBoot: true,
      interval: 1000 * 60 * 5,
      fastestInterval: 1000 * 60 * 6,
      activitiesInterval: 1000 * 60 * 7,
      stopOnStillActivity: true, // on still activity might change
      notificationsEnabled: false, // change
      startForeground: true,
      notificationTitle: 'Background tracking', // remove
      notificationText: 'enabled', // remove
      url: 'https://us-central1-coronavirus-bf9cb.cloudfunctions.net/addUserLocations', // might create a new function to handle
      syncUrl: 'https://us-central1-coronavirus-bf9cb.cloudfunctions.net/addUserLocations', // might create a new function to handle
      httpHeaders: {
        
      },
      // customize post properties
      postTemplate: {
          uid: uid,
          lat: '@latitude',
          lon: '@longitude',
          alt: '@altitude',
          speed: '@speed',
          accuracy: '@accuracy',
          time: '@time'
      },
    });


    try{
      // to know "IN_VEHICLE", "ON_BICYCLE", "ON_FOOT", "RUNNING", "STILL",
      // "TILTING", "UNKNOWN", "WALKING"
      const eventSubscription = BackgroundGeolocation.on('event', () => null);
    }
    catch(err) {
      console.log('not registered')
    }

    // BackgroundGeolocation.on('stop', () => {
    //   console.log('[INFO] BackgroundGeolocation service has been stopped');
    // });

    BackgroundGeolocation.on('error', (error) => {
      console.log('[ERROR] BackgroundGeolocation error:', error);
    });

    BackgroundGeolocation.on('authorization', (status) => {
      console.log('[INFO] BackgroundGeolocation authorization status: ' + status);
      if (status !== BackgroundGeolocation.AUTHORIZED) {
        // we need to set delay or otherwise alert may not be shown
        setTimeout(() =>
          Alert.alert('App requires location tracking permission', 'Would you like to open app settings?', [
            { text: 'Yes', onPress: () => BackgroundGeolocation.showAppSettings() },
            { text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel' }
          ]), 1000);
      }
    });

    // let uid = await AsyncStorage.getItem('uid')
    // post from here
    BackgroundGeolocation.on('background', () => {
      // console.log(`[INFO] App is in background ${uid}`);
    });

    BackgroundGeolocation.on('foreground', () => {
      // console.log(`[INFO] App is in foreground ${uid}`);
    });

    // just checking status on rerenderr // TODO: remvoe
    BackgroundGeolocation.checkStatus(status => {
      console.log('[INFO] BackgroundGeolocation service is running', status.isRunning);
      console.log('[INFO] BackgroundGeolocation services enabled', status.locationServicesEnabled);
      console.log('[INFO] BackgroundGeolocation auth status: ' + status.authorization);

      // you don't need to check status before start (this is just the example)
      if (!status.isRunning) {
        BackgroundGeolocation.start(); //triggers start on start event
      }
    });

    BackgroundGeolocation.on('start', () => {
      console.log('[INFO] BackgroundGeolocation service has been started');
    });

    BackgroundGeolocation.on('location', (location) => {
      // handle your locations here
      // to perform long running operation on iOS
      // you need to create background task
      console.log('location here')
      BackgroundGeolocation.startTask(taskKey => {
        // execute long running task
        // eg. ajax post location
        // IMPORTANT: task has to be ended by endTask
        console.log('location started')
        // console.log(`${uid} ${JSON.stringify(location)}`);
        BackgroundGeolocation.endTask(taskKey);
      });
    });
  }

  sendUserDetails = async (uid) => {
    await createUser(uid);
    // await AsyncStorage.setItem('uid', JSON.stringify(uid));
    addUserDetails(uid);
  }

  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });

  }
  render() {
    if (this.state.showRealApp) {
      return <TabNavigator />;
    } else {
      return <AppIntroSlider renderItem={this._renderItem} slides={slides} showSkipButton={true} onSkip={this._onDone} onDone={this._onDone}/>;
    }
  }
}

export default Tutorial;
