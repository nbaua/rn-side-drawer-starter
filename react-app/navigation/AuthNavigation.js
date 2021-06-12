import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../screens/auth-navigation-screens/LoginScreen';
import RegisterScreen from '../screens/auth-navigation-screens/RegisterScreen';
import colors from './../shared/globalColors';
import constants from './../shared/globalConstants';
const Stack = createStackNavigator();

const AuthNavigation = () => {
  // Stack Navigator for Login and Register Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register',
          headerStyle: {
            backgroundColor: colors.APP_PRIMARY_BG_COLOR,
          },
          headerTintColor: colors.APP_TINT_COLOR,
          headerTitleStyle: {
            fontFamily: constants.DEFAULT_REGULAR_FONT,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
