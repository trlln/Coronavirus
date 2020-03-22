import axios from "axios";
import { AsyncStorage, PermissionsAndroid } from "react-native";
import GetLocation from 'react-native-get-location'

export const addUserDetails = async () => {

    const uid = JSON.parse(await AsyncStorage.getItem('uid'));
    // await getLocation(uid); // uncomment it

}

const getLocation = (uid) => {
    GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
    })
        .then(location => {
            // console.log(location);
            axios.post('https://us-central1-coronavirus-bf9cb.cloudfunctions.net/addUserDeatails', {
                "userInfo": {
                    "uid": uid,
                    "homeLocation": location
                }
            }).then(() => {
                console.log("success")
                console.log(location)
            }
            ).catch(
                console.log('fail')
            );
        })
        .catch(error => {
            const { code, message } = error;
            return error;
        })
}
