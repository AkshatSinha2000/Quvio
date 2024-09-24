import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Bag from '../TaskEight/assets/shoppingBag.png';
import Home from '../screen/home/Home.tsx';
import Account from '../screen/account/Account.tsx';
import Favourites from '../screen/favourites/Favourites.tsx';
import Menu from '../screen/menu/Menu.tsx';
import menu from '../assets/menu.png';
import star from '../assets/star.png';
import profile from '../assets/profile.png';
import profile2 from '../assets/profile2.png';
import home from '../assets/home.png';
import home2 from '../assets/home2.png';

class BottomTab extends Component {
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'HOME') {
              if (focused) {
                iconName = home;
              } else {
                iconName = home2;
              }
            }
            if (route.name === 'ACCOUNT') {
              if (focused) {
                iconName = profile2;
              } else {
                iconName = profile;
              }
            }
            if (route.name === 'FAVOURITES') {
              if (focused) {
                iconName = star;
              } else {
                iconName = star;
              }
            }
            if (route.name === 'MENU') {
              if (focused) {
                iconName = menu;
              } else {
                iconName = menu;
              }
            }

            return <Image source={iconName} style={{height: 22, width: 20}} />;
          },
          tabBarActiveTintColor: '#46A4BA',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="HOME"
          component={Home}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="ACCOUNT"
          component={Account}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="FAVOURITES"
          component={Favourites}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="MENU"
          component={Menu}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    );
  }
}

export default BottomTab;
