import axios from "axios";
import { AsyncStorage, PermissionsAndroid } from "react-native";
import GetLocation from 'react-native-get-location'
// import Boundary, {Events} from 'react-native-boundary';

export const addUserDetails = async (uid) => {
    // const uid = JSON.parse(await AsyncStorage.getItem('uid'));
    await getLocation(uid); // uncomment it
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

            //  // geofencing
            //  Boundary.add({
            //     lat: location.latitude,
            //     lng: location.longitude,
            //     radius: 15, // in meters
            //     id: uid,
            //   })
            //     .then(() => console.log("Geofencing success"))
            //     .catch(e => console.error("error :(", e))


           
        })
        .catch(error => {
            const { code, message } = error;
            return error;
        })
}
