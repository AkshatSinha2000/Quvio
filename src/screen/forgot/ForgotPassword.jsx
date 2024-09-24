import React, { Component } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Animated,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import CustomToast from '../../components/CustomToast';
import CustomButton from '../../components/CustomButton';
import CustomModel from '../../components/CustomModel';
import Background from '../../components/Background';
import emailImage from '../../assets/email.png';
import emailerror from '../../assets/emailerror.png';
import erroricon from '../../assets/erroricon.png';
import sendlink from '../../assets/sendlink.png';
import styles from './Style'

export class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailError: '',
      modalVisible: false,
      modalMessage: '',
      desc: '',
      button: '',
      flag: false,
      placeholderAnim: new Animated.Value(1), // Added for placeholder animation
    };
  }

  validate = () => {
    const { email } = this.state;
    let isValid = true;

    if (!email.trim()) {
      this.setState({ emailError: 'Email is required' });
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      this.setState({ emailError: 'Invalid email address entered.' });
      isValid = false;
    } else {
      this.setState({ emailError: '' });
    }

    return isValid;
  };

  handleLogin = () => {
    if (this.validate()) {
      const { email } = this.state;
      if (email !== 'Ak@gmail.com') {
        Toast.show({
          text1: 'Email not found. Contact admin.',
          text2: 'Email not found. Contact admin.',
          type: 'custom_error',
        });
      } else {
        this.props.navigation.navigate('ResetPage');
        this.setState({
          modalMessage: 'Link Sent!',
          desc: 'The link to reset your password has been sent to your email address.',
          button: 'Back to Login',
          modalVisible: true,
        });
      }
    }
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  handleFocus = () => {
    Animated.timing(this.state.placeholderAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  handleBlur = () => {
    if (!this.state.email.trim()) {
      Animated.timing(this.state.placeholderAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  render() {
    const {
      email,
      emailError,
      modalVisible,
      modalMessage,
      desc,
      button,
    } = this.state;

    const placeholderStyle = {
      position: 'absolute',
      left: 10,
      
      top: this.state.placeholderAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [-10, 10], 
      }),
      fontSize: this.state.placeholderAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [11, 14], 
      }),
      color: emailError ? 'red' : '#60707D',
    };

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        enabled={this.state.flag}>
        <View style={styles.backgroundContainer}>
          <Background
            navigation={this.props.navigation}
            onPress={() => this.props.navigation.navigate('Login')}
          />

          <View style={styles.mainContainer}>
            <View style={styles.containerone}>
              <Text style={styles.forgottext}>Forgot Password</Text>
              <Text style={styles.desctext}>
                Reset your password with just a few clicks
              </Text>
            </View>

            <View
              style={[
                styles.containerThree,
                emailError && { borderColor: 'red', borderWidth: 1 },
              ]}
            >
              <View style={styles.imageContainer}>
                {!emailError ? (
                  <Image source={emailImage} style={styles.email} />
                ) : (
                  <Image source={emailerror} style={styles.email} />
                )}
              </View>

              <View style={{ flex: 1 }}>
                <Animated.Text style={placeholderStyle}>
                  Email Address
                </Animated.Text>
                <TextInput
                  value={email}
                  onChangeText={(text) => {
                    this.setState({ email: text }, () => {
                      this.validate();
                      if (text) this.handleFocus();
                      else this.handleBlur();
                    });
                  }}
                  placeholder=""
                  style={styles.inputText}
                  onFocus={() => {
                    this.setState({ flag: true });
                    this.handleFocus();
                  }}
                  onBlur={() => {
                    this.setState({ flag: false });
                    this.handleBlur();
                  }}
                />
              </View>
            </View>

            {emailError ? (
              <View style={styles.errorContainer}>
                <Image source={erroricon} style={styles.imagetwo} />
                <Text style={styles.errorText}>{emailError}</Text>
              </View>
            ) : null}

            <View style={styles.buttonContainer}>
              <CustomButton onPress={this.handleLogin} buttonName={'Send Link'} />
            </View>
          </View>

          <CustomModel
            onPress={() => {
              this.setModalVisible(false);
            }}
            image={sendlink}
            modalVisible={modalVisible}
            modalMessage={modalMessage}
            desc={desc}
            buttonName={button}
          />
        </View>

        <Toast
          config={{ custom_error: ({ text1 }) => <CustomToast text1={text1} /> }}
        />
      </KeyboardAvoidingView>
    );
  }
}

export default ForgotPassword;


