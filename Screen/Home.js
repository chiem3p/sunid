//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Detail from './Detail';

// create a component
class LogoTitle extends React.Component {
  render() {
    return <Text>Hello</Text>;
  }
}
class Home extends Component {
  static navigationOptions = {
    header: null,
    // tabBarLabel: 'Home',
    // tabBarIcon: (
    //   <Image
    //     style={{width: 50, height: 50}}
    //     source={require('../src/image/home.png')}
    //     style={{width: 25, height: 25}}
    //   />
    // ),
    // headerBackTitle: null,
    // title: 'Home Pages',
    // headerTintColor: 'white',
    // headerTitleStyle: {
    //   fontWeight: 'bold',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 25,
    // },
    // headerStyle: {
    //   backgroundColor: 'green',
    // },
    // //    tabBar
  };
  render() {
    return (
      <View style={styles.container}>
        {/* <Text>My Home</Text> */}
        <View style={styles.Header}>
          <Image style={styles.Logo} source={require('../src/image/car.png')} />
        </View>
        <View style={styles.Body}>
        <TouchableOpacity
          style={{
            width: 300,
            height: 60,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
          }}
          onPress={() => this.props.navigation.navigate('SignUp')}>
          <Text style={{color: 'white', fontWeight: '800', fontSize: 20}}>
            Sign Up
          </Text>
        </TouchableOpacity>
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
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={{color: 'white', fontWeight: '800', fontSize: 20}}>
            Sign In
          </Text>
        </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  Logo:{
    width:300,
    height:300,
  },
  icon: {
    backgroundColor: 'red',
    width: 30,
    height: 30,
  },

});

//make this component available to the app
export default Home;
