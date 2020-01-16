//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
// create a component
class Detail extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: (
      <Image
        style={{width: 50, height: 50}}
        source={require('../src/image/home.png')}
        style={{width: 25, height: 25}}
      />
    ),
    headerBackTitle: null,
    title: 'Home Pages',
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 25,
    },
    headerStyle: {
      backgroundColor: 'green',
    },
    //    tabBar
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Detail</Text>
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
export default Detail;
