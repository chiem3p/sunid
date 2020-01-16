//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

// create a component
class Detail extends Component {
  static navigationOptions = {
    headerBackTitle: 'some label',

    title: 'Profile',
    // right: 100,
    headerStyle: {
      backgroundColor: 'pink',
    },
    headerTitleStyle: {
      fontSize: 25,
      color: 'white',
      // right: 100,
    },
  };

  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <View style={styles.Header}>
          <Image style={styles.Logo} source={require('../src/image/car.png')} />
          {/* <Text style={styles.userName}>Sun id</Text> */}
        </View>
        <View style={styles.Body}>
          {/* <Text style={styles.text}>Email: </Text>
          <Text style={styles.text}>Birth day: </Text>
          <Text style={styles.text}>Current password: </Text>
          <Text style={styles.text}>New password: </Text>
          <Text style={styles.text}>Confirm password: </Text> */}
          <View style={styles.inputBody}>
            <Image
              style={styles.inputLogo}
              source={require('../src/image/id.png')}
            />
            <TextInput
              style={styles.inPut}
              placeholder="Sun"
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
              placeholder="id"
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
              placeholder="22/01/1998"
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
              placeholder="chiem2p@gmail.com"
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
              placeholder="Current password"
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
              placeholder="New password"
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
          <TouchableOpacity
            style={{
              width: 300,
              height: 60,
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 20,
              borderRadius: 25,
            }}
            onPress={() => 
            //this.props.navigation.navigate('Login')
            alert('Update')
            }>
            <Text style={{color: 'white', fontWeight: '800', fontSize: 20}}>
              Update
            </Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
      
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'black',
  },
  Header: {
    // top: 20,
    flex: 0.2,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  Logo: {
    width: 150,
    height: 150,
  },
  userName: {
    color: 'red',
    fontSize: 30,
    fontWeight: '800',
    // top: -14,
  },

  Body: {
    flex: 0.67,
    top:-15,
    // backgroundColor: 'blue',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 23,
    marginVertical: 5,
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
    // justifyContent: 'center',
    alignItems: 'center',
    flex: 0.13,
  },
});

//make this component available to the app
export default Detail;
