import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import globalResources from './../shared/globalResources';
import styles from './../shared/globalStyles';

const SplashScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);

      AsyncStorage.getItem('user_id').then(value =>
        navigation.replace(
          value !== null ? 'AuthNavigation' : 'StackNavigation',
        ),
      );
    }, 500);
  }, [navigation]);

  return (
    <View style={[styles.container, styles.backlit]}>
      <Image source={globalResources.APP_LOGO} style={styles.appLogoLarge} />
      <Text style={styles.headerText}>Clever App</Text>
      <ActivityIndicator
        animating={animating}
        color="black"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;
