import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TermsAndConditions from '../screens/TermsAndConditions';
import TabNavigator from './TabNavigator';
import Tutorial from '../screens/Tutorial';
import { AsyncStorage } from 'react-native';

const getInitialRoute = async () => {
  let firstLogin = await AsyncStorage.getItem('firstLogin');

  if (firstLogin === 'Done') {
    return 'TabNavigator'
  } else {
    return 'TermsAndConditions'
  }
}

const StackNavigator = createStackNavigator(
  {
    TermsAndConditions: {
      screen: TermsAndConditions,
      navigationOptions: {
        header: null
      }
    },
    TabNavigator: {
      screen: TabNavigator,
      navigationOptions: {
        header: null
      }
    },
    Tutorial: {
      screen: Tutorial,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'TermsAndConditions',
    defaultNavigationOptions: {
      headerMode: 'none'
    },
  },
);



export default createAppContainer(StackNavigator);