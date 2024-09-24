import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screen/splash/Splash';
import Login from '../screen/login/Login';
import Practice from '../screen/login/LoginStyle';
import Tutorial from '../screen/Tutorial/Tutorial';
import ForgotPassword from '../screen/forgot/ForgotPassword';
import ResetPage from '../screen/resetpassword/ResetPage';
import Home from '../screen/home/Home';
import Toast from 'react-native-toast-message';
import CustomToast from '../components/CustomToast';
import AddPhone from '../screen/addphone/AddPhone';
import Verify from '../screen/verify/Verify';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();

export class StackNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Tutorial"
            component={Tutorial}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ResetPage"
            component={ResetPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddPhone"
            component={AddPhone}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Verify"
            component={Verify}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="BottomTab"
            component={BottomTab}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default StackNavigation;
