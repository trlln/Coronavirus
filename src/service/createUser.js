import axios from "axios"
import uuid from 'react-native-uuid'
import { AsyncStorage } from "react-native";

export const createUser = async () => {
    const uid = uuid.v4();
    
    await axios.post('https://us-central1-coronavirus-bf9cb.cloudfunctions.net/createUser', {
        "user": {
            "uid": String(uid)
        }
    });
    await AsyncStorage.setItem('uid', JSON.stringify(uid));

    return uid;
}