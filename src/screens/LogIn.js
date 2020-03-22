import React from 'react';
import { AsyncStorage } from 'react-native';
import TabNavigator from '../navigators/TabNavigator';
import StackNavigator from '../navigators/StackNavigator';

class LogIn extends React.Component {
  state = {
    showRealApp: true
  }

  componentDidMount() {
    AsyncStorage.getItem('firstLogin').then((value) => {
        this.setState({ showRealApp: !!value });
      });
  }

  render() {
    if (this.state.showRealApp) {
      return <TabNavigator />;
    } else {
      return <StackNavigator />
    }
  }
}

export default LogIn;