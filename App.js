import React, { Component } from 'react';
import { View, Text, item } from 'react-native';
import {getDistance} from 'geolib';
import GetLocation from 'react-native-get-location'

class ServiceListDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
    })
    .then(location => {
        this.setState({
          latitude: location.latitude,
          longitude: location.longitude
          })
    })
    .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
    })
  }

  render() {

    let { latitude, longitude } = this.state;
    let home_latitude = 33.935558; //dummy values
    let home_longitude = -117.3456; //dummy values

    const dist = getDistance(
      {latitude: parseFloat(latitude), longitude: parseFloat(longitude)},
      {latitude: home_latitude, longitude:home_longitude} //home coordinates
    );

    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Send home notification {dist>15? 'true': 'false'} </Text>
      </View>
    );
  }
}

export default ServiceListDetails;
