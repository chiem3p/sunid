//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// create a component
class Dictionary extends Component {
  static navigationOptions = {
    headerBackTitle: null,
    headerTintColor: 'white',
    title: 'Dictionary',
    tabBarIcon: (
      <Image
        style={{width: 50, height: 50}}
        source={require('../src/image/car.png')}
        style={{width: 25, height: 25}}
      />
    ),
    headerStyle: {
      backgroundColor: 'pink',
    },
    headerTitleStyle: {
      fontSize: 25,
      color: 'white',
      right: 100,
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Header}>

          <Text style={styles.Title}>Dictionary</Text>
        </View>

        {/* <Text>{this.props.navigation.getParam('sun')}</Text> */}
        <View style={styles.Body}></View>
        <View style={styles.Footer}></View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  Header: {
    flex: 0.2,
    backgroundColor: 'black',
  },
  Body: {
    flex: 0.5,
    backgroundColor: 'blue',
  },
  Footer: {
    flex: 0.3,
    backgroundColor: 'pink',
  },
});

//make this component available to the app
export default Dictionary;
