import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import TabNavigator from '../navigators/TabNavigator';
import { addUserDetails } from '../service/addUserDetails';

const slides = [
  {
    key: 'notifications',
    title: '1. PERSONALIZE YOUR NOTIFICATIONS',
    text: 'Choose a frequency and the starting and ending times according to your convenience. We will send you reminder notifications to wash your hands, and practise other hygiene practices based on your choices.',
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

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'green',
  },
  image: {
    width: 50,
    height: 200,
    resizeMode: 'stretch'
  },
  text: {
    color: 'orange',
    backgroundColor: 'transparent',
    textAlign: 'justify',
    paddingHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: "10%",
  },
  title: {
    fontSize: 25,
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

  sendUserDetails = () => {
    addUserDetails();
  }

  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
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
      return <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone}/>;
    }
  }
}

export default Tutorial;
