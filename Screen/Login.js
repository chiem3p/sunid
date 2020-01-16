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
  state = {
    user: '',
    password: '',
  };
  onChange = Email => {
    console.log(Email / 2);
    this.setState({
      user: Email,
    });
  };
  onChangePw = Password => {
    this.setState({
      password: Password,
    });
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
              placeholderTextColor="white"
              placeholder="ID"
              // keyboardType="numeric"
              onChangeText={Email => this.onChange(Email)}
            />
          </View>

          <View style={styles.inputBody}>
            <Image
              style={styles.inputLogo}
              source={require('../src/image/passwd.png')}
            />
            <TextInput
              style={styles.inPut}
              placeholderTextColor="white"
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={Password => this.onChangePw(Password)}
            />
          </View>
        </View>
        <View style={styles.Footer}>
          <TouchableOpacity
            style={styles.Submit}
            onPress={() => {
              this.state.user === 'Hi' && this.state.password === 'hi'
                ? this.props.navigation.navigate('Main')
                : alert('Something when wrong');
            }}>
            <Text style={styles.txtSubmit}>Sign In</Text>
          </TouchableOpacity>
          <Text style={{top: -60, color: '#40bfc1', fontSize: 16}}>
            Forgot Password
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  Header: {
    flex: 0.35,
    alignItems: 'center',
  },
  Logo: {
    // marginTop: 15,
    width: 250,
    height: 250,
  },

  Body: {
    flex: 0.35,


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
    height: 55,

    borderColor: 'gray',
    marginVertical: 10,
    fontSize: 25,
    paddingLeft: 10,
  },
  Footer: {
    flex: 0.3,

    alignItems: 'center',
  },
  Submit: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    bottom: 70,
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
