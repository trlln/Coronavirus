import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity, AsyncStorage } from 'react-native';
import { createUser } from '../service/createUser';
// import AsyncStorage from '@react-native-community/async-storage'

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
};

class TermsAndConditions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }

  state = {
    accepted: false
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Terms and conditions</Text>
        <ScrollView
          style={styles.tcContainer}
          onScroll={({ nativeEvent }) => {
            if (isCloseToBottom(nativeEvent)) {
              this.setState({
                accepted: true
              })
            }
          }}
        >
          <Text style={styles.tcP}>Welcome to our app. If you continue to browse and use this app, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Karona Saaf’s relationship with you in relation to this app. If you disagree with any part of these terms and conditions, please do not use our app.</Text>
          <Text style={styles.tcP}>The term ‘Karona Saaf’ or ‘us’ or ‘we’ refers to the owner of the app. The term ‘you’ refers to the user or viewer of our app.</Text>
          <Text style={styles.tcL}>{'\u2022'} The content of the pages of this app is for your general information and use only. It is subject to change without notice.</Text>
          <Text style={styles.tcL}>{'\u2022'} This app uses your location to send you notifications, localized as applicable. If you allow access to your location, only your location determined by the GPS may be stored by us for use by third parties.</Text>
          <Text style={styles.tcL}>{'\u2022'} Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this app for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</Text>
          <Text style={styles.tcL}>{'\u2022'} Your use of any information or materials on this app is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this app meet your specific requirements.</Text>
          <Text style={styles.tcL}>{'\u2022'} This app contains material which is owned by or licensed to us or information that is in public domain. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</Text>
          <Text style={styles.tcL}>{'\u2022'} From time to time, this app may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).</Text>
          <Text style={styles.tcL}>{'\u2022'} Your use of this app and any dispute arising out of such use of the app is subject to the laws of India.</Text>
          <Text style={styles.tcP}>Click ACCEPT if you agree to the above Terms and Conditions:</Text>
        </ScrollView>

        <TouchableOpacity onPress={async () => {

          // uncomment it
          AsyncStorage.setItem('firstLogin', 'Done');

          // Moved under tutorial so i'll happen in background
          // let uid = await createUser();
          // await AsyncStorage.setItem('uid', JSON.stringify(uid));

          this.props.navigation.replace("Tutorial");



        }} style={styles.button}><Text style={styles.buttonLabel}>Accept</Text></TouchableOpacity>
      </View>
    );
  }

}

const { width, height } = Dimensions.get('window');

const styles = {

  container: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
  title: {
    fontSize: 22,
    alignSelf: 'center'
  },
  tcP: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 12
  },
  tcP: {
    marginTop: 10,
    fontSize: 12
  },
  tcL: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 12
  },
  tcContainer: {
    marginTop: 15,
    marginBottom: 15,
    height: height * .7
  },

  button: {
    backgroundColor: '#136AC7',
    borderRadius: 5,
    padding: 10
  },

  buttonDisabled: {
    backgroundColor: '#999',
    borderRadius: 5,
    padding: 10
  },

  buttonLabel: {
    fontSize: 14,
    color: '#FFF',
    alignSelf: 'center'
  }

}

export default TermsAndConditions;
