import React from 'react'
import {AsyncStorage} from 'react-native'
// import AsyncStorage from '@react-native-community/async-storage';

export const firstLogin = async () => {
    // return false;

    const firstLogin = await AsyncStorage.getItem('firstLogin');
    // const firstLogin = true;
    // alert(JSON.stringify(firstLogin))

    if(firstLogin !== 'Done') {
        return true;
    }
    else {
        return false;
    }
}