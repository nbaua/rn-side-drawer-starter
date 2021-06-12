import React from 'react';
import {Text, View} from 'react-native';
import globalStyles from './../../shared/globalStyles';

const HomeScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.centeredContent}>HomeScreen Content</Text>
    </View>
  );
};

export default HomeScreen;
