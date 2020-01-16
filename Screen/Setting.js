//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// create a component
class Setting extends Component {
  static navigationOptions = {
    headerBackTitle: null,
    headerTintColor: 'white',
    title: 'Setting',
    tabBarIcon: (
      <Image
        style={{width: 50, height: 50}}
        source={require('../src/image/car.png')}
        style={{width: 25, height: 25}}
      />
    ),
    headerStyle: {
      backgroundColor: 'green',
    },
    headerTitleStyle: {
      fontSize: 25,
      color: 'white',
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Say hello</Text>
        {/* <Text>{this.props.navigation.getParam('sun')}</Text> */}
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
    backgroundColor: 'white',
  },
});

//make this component available to the app
export default Setting;
