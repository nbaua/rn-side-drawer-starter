import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createRef, useState} from 'react';
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../shared/globalColors';
import resources from '../../shared/globalResources';
import styles from '../../shared/globalStyles';

const LoginScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {
      Alert.alert('Please enter E-mail');
      return;
    }
    if (!userPassword) {
      Alert.alert('Please enter Password');
      return;
    }
    setIsLoading(true);

    let requestBody = {email: userEmail, password: userPassword};

    fetch('YOUR_AUTH_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then(response => response.json())
      .then(responseJson => {
        setIsLoading(false);

        if (responseJson.status === 200) {
          AsyncStorage.setItem('token', responseJson.data[0].token);
          console.log(responseJson.data[0].token);
          navigation.replace('StackNavigation');
        } else {
          setErrortext('Invalid credentials. Please re-enter.');
        }
      })
      .catch(error => {
        setIsLoading(false);
        console.error(error);
      });
  };

  return (
    <View style={styles.containerDark}>
      <KeyboardAvoidingView enabled>
        <Image source={resources.APP_LOGO} style={styles.appLogoSmall} />
        <View style={styles.autoSection}>
          <View>
            <TextInput
              allowFontScaling={true}
              underlineColorAndroid="transparent"
              style={styles.inputStyle}
              placeholder="Enter Email."
              placeholderTextColor={colors.APP_DARK_TINT_COLOR}
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              onChangeText={UserEmail => setUserEmail(UserEmail)}
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              textAlignVertical="center"
              blurOnSubmit={false}
            />
          </View>

          <View>
            <TextInput
              allowFontScaling={true}
              underlineColorAndroid="transparent"
              style={styles.inputStyle}
              placeholder="Enter Password."
              ref={passwordInputRef}
              placeholderTextColor={colors.APP_DARK_TINT_COLOR}
              secureTextEntry={true}
              onChangeText={UserPassword => setUserPassword(UserPassword)}
              onSubmitEditing={Keyboard.dismiss}
              textAlignVertical="center"
              blurOnSubmit={false}
            />
          </View>

          <TouchableOpacity
            style={[styles.buttonStyle]}
            onPress={handleSubmitPress}>
            <Text style={styles.buttonTextStyle}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.linkTextStyle}>No Account? Register</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.linkTextStyle}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
export default LoginScreen;
