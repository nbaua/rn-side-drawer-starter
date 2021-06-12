import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ScreenHeader from '../components/ScreenHeader';
import SideDrawer from '../components/SideDrawer';
import DetailScreen from '../screens/stack-navigation-screens/DetailScreen';
import HomeScreen from '../screens/stack-navigation-screens/HomeScreen';
import colors from '../shared/globalColors';
import constants from '../shared/globalConstants';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const homeScreenOptions = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerLeft: () => <ScreenHeader navigationProps={navigation} />,
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
const detailScreenOptions = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="DetailScreen">
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{
          title: 'Details',
          headerLeft: () => <ScreenHeader navigationProps={navigation} />,
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
const StackNavigation = props => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: colors.APP_ALTERNATE_TEXT_COLOR,
        color: colors.APP_PRIMARY_TEXT_COLOR,
        itemStyle: {
          marginVertical: constants.DEFAULT_MARGIN / 3,
          color: colors.APP_PRIMARY_TEXT_COLOR,
          padding: 0,
          margin: 0,
        },
        labelStyle: {
          color: colors.APP_PRIMARY_TEXT_COLOR,
          fontSize: constants.NORMAL_FONT_SIZE,
          fontFamily: constants.DEFAULT_REGULAR_FONT,
          padding: 0,
          margin: 0,
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={SideDrawer}>
      <Drawer.Screen
        name="homeScreenStack"
        options={{drawerLabel: 'Home Screen'}}
        component={homeScreenOptions}
      />
      <Drawer.Screen
        name="detailScreenOptions"
        options={{drawerLabel: 'Detail Screen'}}
        component={detailScreenOptions}
      />
    </Drawer.Navigator>
  );
};

export default StackNavigation;
