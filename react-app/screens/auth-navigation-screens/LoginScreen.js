import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createRef, useState} from 'react';
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import globalColors from '../../shared/globalColors';
import globalConstants from '../../shared/globalConstants';
import globalResources from '../../shared/globalResources';
import globalStyles from '../../shared/globalStyles';

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
    <View style={globalStyles.containerDark}>
      <KeyboardAvoidingView enabled>
        <Image
          source={globalResources.APP_LOGO}
          style={globalStyles.appLogoSmall}
        />

        <View style={styles.containerDark}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter Email."
            placeholderTextColor={globalColors.APP_DARK_TINT_COLOR}
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            onChangeText={UserEmail => setUserEmail(UserEmail)}
            onSubmitEditing={() =>
              passwordInputRef.current && passwordInputRef.current.focus()
            }
            blurOnSubmit={false}
          />
        </View>

        <View style={styles.containerDark}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter Password."
            ref={passwordInputRef}
            placeholderTextColor={globalColors.APP_DARK_TINT_COLOR}
            secureTextEntry={true}
            onChangeText={UserPassword => setUserPassword(UserPassword)}
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
          />
        </View>

        <TouchableOpacity
          style={[styles.buttonStyle]}
          onPress={handleSubmitPress}>
          <Text style={styles.buttonTextStyle}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.linkTextStyle}>No Account? Register</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkTextStyle}>Forgot Password?</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: globalColors.APP_PRIMARY_LIGHT_BG_COLOR,
    borderColor: globalColors.APP_PRIMARY_LIGHT_BG_COLOR,
    borderWidth: 0,
    alignItems: 'center',
    borderRadius: globalConstants.SMALL_BORDER_RADIUS,
    paddingTop: globalConstants.DEFAULT_PADDING / 2,
    marginVertical: globalConstants.DEFAULT_MARGIN,
  },
  buttonTextStyle: {
    fontSize: globalConstants.NORMAL_FONT_SIZE,
    fontFamily: globalConstants.DEFAULT_REGULAR_FONT,
    color: globalColors.APP_PRIMARY_TEXT_COLOR,
  },
  inputStyle: {
    fontFamily: globalConstants.DEFAULT_REGULAR_FONT,
    backgroundColor: globalColors.APP_PRIMARY_LIGHT_BG_COLOR,
    color: globalColors.APP_PRIMARY_TEXT_COLOR,
    borderRadius: globalConstants.SMALL_BORDER_RADIUS,
    borderColor: globalColors.APP_PRIMARY_DARK_BG_COLOR,
    paddingHorizontal: globalConstants.DEFAULT_PADDING,
    marginTop: globalConstants.DEFAULT_MARGIN,
    borderWidth: 1,
  },
  linkTextStyle: {
    textAlign: 'center',
    alignSelf: 'center',
    color: globalColors.APP_ALTERNATE_TEXT_COLOR,
    fontSize: globalConstants.NORMAL_FONT_SIZE,
    fontFamily: globalConstants.DEFAULT_REGULAR_FONT,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: globalConstants.NORMAL_FONT_SIZE,
  },
});
