import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import colors from '../shared/globalColors';
import constants from '../shared/globalConstants';
import resources from '../shared/globalResources';
import globalStyles from '../shared/globalStyles';

const SideDrawer = props => {
  return (
    <View style={[styles.fixedContainer]}>
      <View style={styles.drawerHeader}>
        <Image
          source={resources.APP_LOGO}
          style={[globalStyles.appLogoLarge, styles.drawerHeaderIcon]}
        />
      </View>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={({color}) => (
            <Text style={colors.APP_PRIMARY_TEXT_COLOR}>Logout</Text>
          )}
          onPress={() => {
            props.navigation.toggleDrawer();
            //todo-change with custom dialog component
            Alert.alert(
              'Logout',
              'Are you sure? You want to logout?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Confirm',
                  onPress: () => {
                    AsyncStorage.clear();
                    props.navigation.replace('AuthNavigation');
                  },
                },
              ],
              {cancelable: false},
            );
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  fixedContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.APP_ALTERNATE_BG_COLOR,
  },
  drawerHeader: {
    height: constants.LARGE_ELEM_DIMS,
    width: '100%',
    backgroundColor: colors.APP_PRIMARY_BG_COLOR,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  drawerHeaderIcon: {
    width: '90%',
    height: '90%',
  },
  drawerHeaderText: {
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    fontSize: constants.MEDIUM_FONT_SIZE,
    fontFamily: constants.DEFAULT_BOLD_FONT,
  },
});

export default SideDrawer;
