import Axios from "axios";

export const addUserDetails = async (uid) => {

    Axios.post('https://us-central1-coronavirus-bf9cb.cloudfunctions.net/addUserDeatails', {
        "userInfo": {
            "uid": uid, // get id here
            "homeLocation": "Hari Nagar, Delhi" // get location here
        }
    });
}