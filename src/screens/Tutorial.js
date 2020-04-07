import React from 'react';
import { View, StyleSheet, Text, Image, AsyncStorage, Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import TabNavigator from '../navigators/TabNavigator';
import { addUserDetails } from '../service/addUserDetails';
import { createUser } from '../service/createUser';
import uuid from 'react-native-uuid'

const slides = [
  // {
  //   key: 'thanks',
  //   title: 'THANK YOU FOR DOWNLOADING',
  //   text: 'The next three screens will guide you through a tutorial of the app.',
  //   // image: require('../../assets/thanks.jpg'),
  //   backgroundColor: 'orange',
  // },
  {
    key: 'notifications',
    title: 'PERSONALIZE YOUR NOTIFICATIONS',
    text: '',
    image: require('../../assets/1.png'),
  },
  {
    key: 'videos',
    title: 'GOOD HYGIENE PRACTICES',
    text: '',
    image: require('../../assets/2.png'),
  },
  {
    key: 'resources',
    title: 'RESOURCES',
    text: '',
    image: require('../../assets/3.png'),
  }
];

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.height * 0.8);
const imageWidth = dimensions.width * 0.9;

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
  }

  sendUserDetails = async (uid) => {
    await createUser(uid);
    await AsyncStorage.setItem('uid', JSON.stringify(uid));
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
