//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ImageEditor,
} from 'react-native';

// create a component
class Login extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Header}>
          <View style={styles.Logo}>
            <Image
              style={styles.Logo}
              source={require('../src/image/car.png')}
            />
          </View>
        </View>
        <View style={styles.Body}>
          <View style={styles.inputBody}>
            <Image
              style={styles.inputLogo}
              source={require('../src/image/id.png')}
            />
            <TextInput
              style={styles.inPut}
              placeholder="First name"
              placeholderTextColor="#fafafa"
            />
          </View>
          <View style={styles.inputBody}>
            <Image
              style={styles.inputLogo}
              source={require('../src/image/id.png')}
            />
            <TextInput
              style={styles.inPut}
              placeholder="Last name"
              placeholderTextColor="#fafafa"
            />
          </View>
          <View style={styles.inputBody}>
            <Image
              style={styles.inputLogo}
              source={require('../src/image/id.png')}
            />
            <TextInput
              style={styles.inPut}
              placeholder="Date of birth"
              placeholderTextColor="#fafafa"
            />
          </View>
          <View style={styles.inputBody}>
            <Image
              style={styles.inputLogo}
              source={require('../src/image/id.png')}
            />
            <TextInput
              style={styles.inPut}
              placeholder="Email"
              placeholderTextColor="#fafafa"
            />
          </View>
          <View style={styles.inputBody}>
            <Image
              style={styles.inputLogo}
              source={require('../src/image/id.png')}
              tintColor="red"
            />
            <TextInput
              style={styles.inPut}
              placeholder="Password"
              placeholderTextColor="#fafafa"
            />
          </View>

          <View style={styles.inputBody}>
            <Image
              style={styles.inputLogo}
              source={require('../src/image/passwd.png')}
              tintColor="white"
            />
            <TextInput
              style={styles.inPut}
              placeholderTextColor="#fafafa"
              placeholder="Confirm password"
            />
          </View>
        </View>
        <View style={styles.Footer}>
          <TouchableOpacity style={styles.Submit} onPress={()=> this.props.navigation.navigate('Main')}>
            <Text style={styles.txtSubmit}>Sign Up</Text>
          </TouchableOpacity>
          {/* <Text style={{top: -60, color: '#40bfc1', fontSize: 16}}>
            Forgot Password
          </Text> */}
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  Header: {
    flex: 0.3,
    alignItems: 'center',
  },
  Logo: {
    // marginTop: 15,
    width: 250,
    height: 250,
  },

  Body: {
    flex: 0.6,

    alignItems: 'center',
  },
  inputBody: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  inputLogo: {
    marginTop: 25,
    marginRight: 10,
    width: 30,
    height: 30,
  },
  inPut: {
    width: 300,
    height: 45,
    // borderColor: 'gray',
    marginVertical: 12,
    fontSize: 25,
    paddingLeft: 10,
    color: 'white',
  },
  Footer: {
    flex: 0.1,
    alignItems: 'center',
  },
  Submit: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    // bottom: 70,
    width: 300,
    height: 55,
    backgroundColor: 'gray',
  },
  txtSubmit: {
    fontSize: 25,
    fontWeight: '700',
    color: 'white',
  },
});

//make this component available to the app
export default Login;
