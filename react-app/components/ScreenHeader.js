import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import globalResources from '../shared/globalResources';
import globalStyles from '../shared/globalStyles';

const ScreenHeader = props => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image
          source={globalResources.APP_MENU}
          style={globalStyles.appMenuIcon}
        />
      </TouchableOpacity>
    </View>
  );
};
export default ScreenHeader;
