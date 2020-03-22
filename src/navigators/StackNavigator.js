import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import TermsAndConditions from '../screens/TermsAndConditions';
import TabNavigator from './TabNavigator';
import { AsyncStorage } from 'react-native';

const getInitialRoute = async () => {
    let firstLogin = await AsyncStorage.getItem('firstLogin');

    if(firstLogin === 'Done') {
        return 'TabNavigator'
    } else {
        return 'TermsAndConditions'
    }
}

const StackNavigator = createStackNavigator(
    {
      TermsAndConditions: TermsAndConditions,
      TabNavigator: TabNavigator
    },
    {
      initialRouteName: 'TermsAndConditions',
      defaultNavigationOptions: {
        // title: 'KS',
      },
    },
  );



export default createAppContainer(StackNavigator);