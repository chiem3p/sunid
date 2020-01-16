//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

// create a component
class HomePage extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      // headerBackTitle: null,
      headerTintColor: 'white',

      headerTitle: 'Home Page',
      headerStyle: {
        backgroundColor: 'pink',
      },
      headerTitleStyle: {
        fontSize: 25,
        color: 'white',
        right: 100,
      },
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          title="Info"
          color="#fff"
          style={{right: 30, width: 30, right: 30}}>
          <Image
            source={require('../src/image/car.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      ),
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Page</Text>

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
export default HomePage;
