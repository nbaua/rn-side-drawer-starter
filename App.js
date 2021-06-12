import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import AuthNavigation from './react-app/navigation/AuthNavigation';
import StackNavigation from './react-app/navigation/StackNavigation';
import SplashScreen from './react-app/screens/SplashScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AuthNavigation"
          component={AuthNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StackNavigation"
          component={StackNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
