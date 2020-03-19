import { AsyncStorage } from 'react-native'
import Axios from 'axios';
import { Notifications, Permissions } from 'expo'

const PUSH_ENDPOINT = 'http://rallycoding.herokuapp.com/api/tokens'

export default async () => {
    let previuosToken = await AsyncStorage.getItem('pushtoken');

    if(previuosToken){
        return;
    }
    else {
        let {status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);

        if(status != 'granted') {
            return;
        }

        let token = await Notifications.getExpoPushTokenAsync();
        await Axios.post(PUSH_ENDPOINT, { token: { token }});

        AsyncStorage.setItem('pushtoken', token);
    }
}