import React from 'react';
import {View, Text, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createSwitchNavigator} from 'react-navigation';
// import {TabNavigator} from 'react-navigation-tabs';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from './Screen/Home';
import Setting from './Screen/Setting';
import Profile from './Screen/Profile';
import Dictionary from './Screen/Dictionary';
import Detail from './Screen/Detail';
import HomeHome from './Screen/HomePage';
import Login from './Screen/Login';
import SignUp from './Screen/SignUp';
const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
  },
  SignUp: {
    screen: SignUp,
  },
  Login: {
    screen: Login,
  },
  // Detail: {
  //   screen: Detail,
  // },
});
const HomeDictionary = createStackNavigator({
  HomeDictionary: {
    screen: Dictionary,
  },
});
const HomePage = createStackNavigator({
  HomePage1: {
    screen: HomeHome,
  },
  // Profile: {
  //   screen: Profile,
  //   navigationOptions: {
  //     headerBackTitle: 'some label'
  //   }

  // },
});
// const HomeProfile = createStackNavigator({
//   HomeProfile: {
//     screen: Profile,
//   },
// });
const TabNavigator = createBottomTabNavigator({
  Home1: {
    screen: HomePage,
    navigationOptions: {
      title: 'Home Page',
      tabBarIcon: (
        <Image
          style={{width: 50, height: 50}}
          source={require('./src/image/car.png')}
          style={{width: 25, height: 25}}
        />
      ),
      headerStyle: {
        backgroundColor: 'green',
      },
      headerTitleStyle: {
        fontSize: 30,
        color: 'white',
      },
    },
  },
  Dictionary: {
    screen: HomeDictionary,
    navigationOptions: {
      tabBarIcon: (
        <Image
          style={{width: 50, height: 50}}
          source={require('./src/image/car.png')}
          style={{width: 25, height: 25}}
        />
      ),
    },
  },

  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon: (
        <Image
          style={{width: 50, height: 50}}
          source={require('./src/image/car.png')}
          style={{width: 25, height: 25}}
        />
      ),
    },
  },
});
const AppStack = createSwitchNavigator({
  Auth: {
    screen: HomeStack,
  },
  Main: {
    screen: TabNavigator,
  },
});
export default createAppContainer(AppStack);
