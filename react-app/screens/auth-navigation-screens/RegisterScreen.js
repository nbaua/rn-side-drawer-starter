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

const RegisterScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();
  const confirmInputRef = createRef();

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
    if (!confirmPassword) {
      Alert.alert('Please confirm Password');
      return;
    }
    if (userPassword !== confirmPassword) {
      Alert.alert('Both passwords do not match');
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
    <View style={styles.container}>
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
              onSubmitEditing={
                confirmInputRef.current && confirmInputRef.current.focus()
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
              placeholder="Confirm Password."
              ref={confirmInputRef}
              placeholderTextColor={colors.APP_DARK_TINT_COLOR}
              secureTextEntry={true}
              onChangeText={ConfirmPassword =>
                setConfirmPassword(ConfirmPassword)
              }
              onSubmitEditing={Keyboard.dismiss}
              textAlignVertical="center"
              blurOnSubmit={false}
            />
          </View>

          <TouchableOpacity
            style={[styles.buttonStyleDark]}
            onPress={handleSubmitPress}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.linkTextStyleDark}>Have Account? Login</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.linkTextStyleDark}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
export default RegisterScreen;
