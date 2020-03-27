import { Alert} from 'react-native';

Alert.alert(
  'Failed to update schedule',
  'Sorry! We could not update your schedule this time. Please retry after some time.',
  [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false }
)
