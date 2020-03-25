import axios from "axios"
import { AsyncStorage } from "react-native";

export const createUser = async (uid) => {
    
    await axios.post('https://us-central1-coronavirus-bf9cb.cloudfunctions.net/createUser', {
        "user": {
            "uid": String(uid)
        }
    });
    await AsyncStorage.setItem('uid', JSON.stringify(uid));
}