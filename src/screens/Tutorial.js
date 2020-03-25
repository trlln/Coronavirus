import React from 'react';
import { View, StyleSheet, Text, Image, AsyncStorage, Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import TabNavigator from '../navigators/TabNavigator';
import { addUserDetails } from '../service/addUserDetails';
import { createUser } from '../service/createUser';

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
    this.sendUserDetails();
  }

  sendUserDetails = async () => {
    let uid = await createUser();
    await AsyncStorage.setItem('uid', JSON.stringify(uid));
    addUserDetails();
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
