import {
  Animated,
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import logo from '../../assets/logo.png';
// import styles from './Styles';
import lock from '../../assets/lock.png';
import errorlock from '../../assets/errorlock.png';
import erroricon from '../../assets/erroricon.png';
import eyecut from '../../assets/eye-slash-svgrepo-com.png';
import eye from '../../assets/eye.png';
import exclamatory from '../../assets/exclamatory.png';
import key from '../../assets/key.png';
import cross from '../../assets/cross.png';
import check from '../../assets/check.png';

import Toast from 'react-native-toast-message';
import CustomToast from '../../components/CustomToast';
import CustomModel from '../../components/CustomModel';
import { SpringKeyboardAnimationConfig } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import Background from '../../components/Background';

type LoginState = {
  toggle: boolean,
      toggle2: boolean,
      confirmPasswordError: string,
      showPassword: boolean,
      showCnfrmPassword:string ,
      isPasswordFocused: boolean,
      hasPasswordInput: boolean,
      minLengthValid: boolean,
      numberValid: boolean,
      specialCharValid: boolean,
      upperlowerCaseValid: boolean,
      validView: boolean,
      Password: string,
      confirmpassword: string,
      passwordError: boolean,
      modalVisible: boolean,
      modalMessage: string,
      image: string,
      desc: string,
      flag:boolean
}
type LoginProps = {
  navigation : string
}

export class ResetPage extends Component<LoginProps, LoginState> {
  constructor(props:LoginProps) {
    super(props);
    this.state = {
      toggle: false,
      toggle2: false,
      confirmPasswordError: '',
      showPassword: false,
      showCnfrmPassword: '',
      isPasswordFocused: false,
      hasPasswordInput: false,
      minLengthValid: false,
      numberValid: false,
      specialCharValid: false,
      upperlowerCaseValid: false,
      validView: true,
      Password: '',
      confirmpassword: '',
      passwordError: '',
      modalVisible: false,
      modalMessage: '',
      image: '',
      desc: '',
      flag: false,
      placeholderAnim: new Animated.Value(1),
      placeholderAnim2: new Animated.Value(1),
    };
  }

  validatePassword = password => {
    const minLengthRequirement = password.length >= 8;
    const specialCharRequirement = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const numberRequirement = /\d/.test(password);
    const upperlowerCaseRequirement =
      /[A-Z]/.test(password) && /[a-z]/.test(password);

    this.setState({minLengthValid: minLengthRequirement});
    this.setState({specialCharValid: specialCharRequirement});
    this.setState({numberValid: numberRequirement});
    this.setState({upperlowerCaseValid: upperlowerCaseRequirement});

    if (
      minLengthRequirement &&
      specialCharRequirement &&
      numberRequirement &&
      upperlowerCaseRequirement
    ) {
      this.setState({passwordError: false});
    } else {
      this.setState({passwordError: true});
    }

    return (
      minLengthRequirement &&
      specialCharRequirement &&
      numberRequirement &&
      upperlowerCaseRequirement
    );
  };

  validateConfirmPassword = confirmpassword => {
    if (this.state.Password !== confirmpassword) {
      this.setState({confirmPasswordError: 'Passwords do not match'});
      return false;
    } else if (this.state.Password == confirmpassword) {
      this.setState({confirmPasswordError: ''});

      return true;
    }
  };

  handleTextChange = (text, field) => {
    if (field === 'Password') {
      this.setState({Password: text, validate: true});
      this.setState({hasPasswordInput: text.length > 0});
      this.validatePassword(text);
    } else if (field === 'confirmpassword') {
      this.setState({confirmpassword: text});
      this.validateConfirmPassword(text);
    }
  };

  togglePasswordVisibility = () => {
    this.setState({showPassword: !this.state.showPassword});
  };

  toggleCnfrmPasswordVisibility = () => {
    this.setState({showCnfrmPassword: !this.state.showCnfrmPassword});
  };

  handleSubmitEditing = field => {
    if (field === 'Password') {
      const isPassValid = this.validatePassword(this.state.Password);
      if (isPassValid) {
        passwordInput.focus();
      }
    }
  };

  renderValidationFeedback = () =>
    this.state.validView ? (
      <View style={styles.validationContainer}>
        <View style={styles.validationRow}>
          <Image
            source={this.state.minLengthValid ? check : cross}
            style={styles.validationIcon}
          />
          <Text style={[styles.validationText]}>8 characters or more</Text>
        </View>
        <View style={styles.validationRow}>
          <Image
            source={this.state.specialCharValid ? check : cross}
            style={styles.validationIcon}
          />
          <Text style={styles.validationText}>
            1 or more special characters
          </Text>
        </View>
        <View style={styles.validationRow}>
          <Image
            source={this.state.numberValid ? check : cross}
            style={styles.validationIcon}
          />
          <Text style={styles.validationText}>1 or more numbers</Text>
        </View>
        <View style={styles.validationRow}>
          <Image
            source={this.state.upperlowerCaseValid ? check : cross}
            style={styles.validationIcon}
          />
          <Text style={styles.validationText}>Upper and lowercase</Text>
        </View>
      </View>
    ) : (
      <></>
    );

  handleSubmit = () => {
    const isPasswordValid = this.validatePassword(this.state.Password);
    const isConfirmPasswordValid = this.validateConfirmPassword(
      this.state.confirmpassword,
    );

    console.log(isConfirmPasswordValid);

    if (isPasswordValid && isConfirmPasswordValid) {
      this.setState({confirmPasswordError: ''});
      this.setState({
        validView: false,
        passwordError: false,
        confirmpasswordError: false,
        modalVisible: true,
        image: key,
        modalMessage: 'Password Updated!',
        desc: 'Your new password has been updated successfully.',
      });
    } else {
      this.setState({
        validView: true,
        passwordError: true,
        confirmpasswordError: true,
      });
      Toast.show({
        text1: 'Your password doesn’t match',
        text2: 'Email not found. Contact admin.',
        type: 'custom_error',
      });
    }

    return;
  };

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
    this.props.navigation.navigate('Login');
  };

  handleFocus = () => {
    Animated.timing(this.state.placeholderAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };
  handleFocus2 = () => {
    Animated.timing(this.state.placeholderAnim2, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  handleBlur = () => {
    if (!this.state.Password.trim()) {
      Animated.timing(this.state.placeholderAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };
  handleBlur2 = () => {
    if (!this.state.confirmpassword.trim()) {
      Animated.timing(this.state.placeholderAnim2, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  render() {
    const {
      confirmpassword,
      password,
      hasPasswordInput,
      confirmpasswordError,
      isPasswordFocused,
      passwordError,
      modalVisible,
      modalMessage,
      image,
      flag,
      desc,
    } = this.state;

    const placeholderStyle = {
      position: 'absolute',
      left: 10,
      
      top: this.state.placeholderAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [-10, 10], // Adjust the values to position the placeholder
      }),
      fontSize: this.state.placeholderAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [11, 14], // Adjust to your desired sizes
      }),
      color: passwordError ? 'red' : '#60707D',
    };

    const placeholderStyle2 = {
      position: 'absolute',
      left: 10,
      
      top: this.state.placeholderAnim2.interpolate({
        inputRange: [0, 1],
        outputRange: [-10, 10], // Adjust the values to position the placeholder
      }),
      fontSize: this.state.placeholderAnim2.interpolate({
        inputRange: [0, 1],
        outputRange: [11, 14], // Adjust to your desired sizes
      }),
      color: confirmpasswordError ? 'red' : '#60707D',
    };

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <SafeAreaView style={styles.container}>
          <Image source={logo} style={styles.logo} />

          <View style={styles.containerTwo}>
            <Text style={styles.heading}>Reset Password</Text>
            <Text style={styles.text}>Enter in your new password.</Text>
          </View>

          <View
            style={[
              styles.containerThree,
              passwordError && {borderColor: 'red', borderWidth: 1},
            ]}>
            <View style={styles.imageContainer}>
              {!passwordError ? (
                <Image source={lock} style={styles.email} />
              ) : (
                <Image source={errorlock} style={styles.email} />
              )}
            </View>
            <View style={{ flex: 1 ,justifyContent:'center',alignItems:'center'}}>
                <Animated.Text style={placeholderStyle}>
                  Password
                </Animated.Text>
                <TextInput
                  value={password}
                  onChangeText={(text) => {[
                    this.setState({ Password: text }, () => {
                      this.handleTextChange(text, 'Password'),
                      this.validatePassword(text);
                      if (text) this.handleFocus();
                      else this.handleBlur();
                    }),]
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
                  onSubmitEditing={() => this.handleSubmitEditing('Password')}
              
              secureTextEntry={!this.state.toggle}
              blurOnSubmit={false}
              autoFocus
                />
              </View>
            {/* <TextInput
              value={password}
              onChangeText={text => [
                this.handleTextChange(text, 'Password'),
                this.validatePassword(text),
              ]}
              onSubmitEditing={() => this.handleSubmitEditing('Password')}
              placeholder="New Password"
              placeholderTextColor={'#60707D'}
              style={styles.inputText}
              secureTextEntry={!this.state.toggle}
              blurOnSubmit={false}
              autoFocus
            /> */}
            <View style={styles.imageContainer}>
              <Pressable
                onPress={() => this.setState({toggle: !this.state.toggle})}>
                {this.state.toggle ? (
                  <Image source={eyecut} style={styles.email} />
                ) : (
                  <Image source={eye} style={styles.email} />
                )}
              </Pressable>
            </View>
          </View>
          {(isPasswordFocused || hasPasswordInput) &&
            this.renderValidationFeedback()}

          <View
            style={[
              styles.containerThree,
              confirmpasswordError && {borderColor: 'red', borderWidth: 1},
            ]}>
            <View style={styles.imageContainer}>
              {!confirmpasswordError ? (
                <Image source={lock} style={styles.email} />
              ) : (
                <Image source={errorlock} style={styles.email} />
              )}
            </View>
            <View style={{ flex: 1 ,justifyContent:'center',alignItems:'center'}}>
                <Animated.Text style={placeholderStyle2}>
                  Confirm Password
                </Animated.Text>
                <TextInput
                  value={confirmpassword}
                  onChangeText={(text) => {[
                    this.setState({ confirmpassword: text }, () => {
                      this.handleTextChange(text, 'confirmpassword')
                      if (text) this.handleFocus2();
                      else this.handleBlur2();
                    }),]
                  }}
                  placeholder=""
                  style={styles.inputText}
                  onFocus={() => {
                    this.setState({ flag: true });
                    this.handleFocus2();
                  }}
                  onBlur={() => {
                    this.setState({ flag: false });
                    this.handleBlur2();
                  }}
                  
                onSubmitEditing={() => this.handleSubmitEditing('Password')}
              blurOnSubmit={false}
              // ref={input => (passwordInput = input)}
              secureTextEntry={!this.state.toggle2}
                />
              </View>

            {/* <TextInput
              value={confirmpassword}
              onChangeText={text =>
                this.handleTextChange(text, 'confirmpassword')
              }
              placeholder="Confirm Password"
              placeholderTextColor={'#60707D'}
              style={styles.inputText}
              onSubmitEditing={() => this.handleSubmitEditing('Password')}
              blurOnSubmit={false}
              ref={input => (passwordInput = input)}
              secureTextEntry={!this.state.toggle2}
            /> */}
            <View style={styles.imageContainer}>
              <Pressable
                onPress={() => this.setState({toggle2: !this.state.toggle2})}>
                {this.state.toggle2 ? (
                  <Image source={eyecut} style={styles.email} />
                ) : (
                  <Image source={eye} style={styles.email} />
                )}
              </Pressable>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <Pressable
              style={({pressed}) => [
                styles.button,
                {backgroundColor: pressed ? '#9CD6E4' : '#2A7BBB'},
              ]}
              onPress={this.handleSubmit}>
              <Text style={styles.buttontext}>Submit</Text>
            </Pressable>
          </View>

          <CustomModel
            onPress={() => {
              this.setModalVisible(false);
            }}
            modalVisible={modalVisible}
            image={this.state.image}
            modalMessage={modalMessage}
            desc={desc}
            buttonName={'Back to Login'}
          />
        </SafeAreaView>
        <Toast
          config={{custom_error: ({text1}) => <CustomToast text1={text1} />}}
        />
      </KeyboardAvoidingView>
    );
  }
}

export default ResetPage;


const styles = StyleSheet.create({
  container:{
    backgroundColor:'#E6EDF3',
      paddingHorizontal:24,
      paddingTop:30,
      flex:1
  },
  logo:{
      height:55,
      width:83
  },
  containerTwo:{
      marginTop:40,
      marginBottom:30
  },
  heading:{
      marginVertical:10,
      fontSize:24,
      fontWeight:'700',
      // marginBottom:5,
  },
  text:{
      color:'#4F5F72',
      fontSize:15,
      fontWeight:'400'
  },
  inputText:{
      width:280,
      marginLeft:10,
      paddingRight:10
    },
    errorText: {
      color: '#122636',
      fontSize: 13,
      fontWeight:'400'
      
    },
    modalBackground: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContainer: {
      width: 300,
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      alignItems: 'center',
    },
    modalheading: {
      fontSize: 20,
      marginBottom: 5,
      fontWeight:'700',
    },
    modalText: {
      fontSize: 13,
      marginBottom: 20,
      fontWeight:'400',
      alignSelf:'center',
      justifyContent:'center'
    },
    modalButton: {
      paddingVertical: 10,
      paddingHorizontal:20,
      backgroundColor: '#007bff',
      borderRadius: 5,
    },
    modalButtonText: {
      color: 'white',
      fontSize: 16,
    },
    containerThree:{
      flexDirection:'row',
      // borderWidth:1,
      backgroundColor:'#F8F9F9',
      marginTop:20,
      height:70,
      padding:15,
      borderRadius:10,
    },
    email: {
      height: 24,
      width: 24,
    },
    imageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      
    },
  
  
  
  
    modalimage:{
      height:50,
      width:50,
      marginBottom:20,
    },

image:{

  height:20,
  width:20,
  marginRight:5
},
errorContainer:{
  flexDirection:'row',
  alignItems:'center',
  marginTop:10,
  marginLeft:10,
  
  
},
button: {
  marginTop: 38,
  paddingHorizontal: 30,
  paddingVertical: 20,
  alignItems: 'center',
  backgroundColor: '#2A7BBB',
  borderRadius:10,
  marginBottom:10,
},
buttontext: {
  color: '#FFFFFF',
  fontSize: 17,
  fontWeight: '700',
},
buttonContainer:{flex:1,justifyContent:'flex-end'}








,





container1:{
  flex:1,
  // backgroundColor:colors.bg
},
img: {
  height: 55,
  width: 85,
},
imageContain: {
  marginTop: 10,
  marginStart: 20,
  marginBottom: 20,
},
signText: {
  color: '#000000',
  fontSize: 24,
  fontWeight: '700',
  textAlign: 'left',
},
textContain1: {
  marginTop: 60,
  marginStart: 35,
},
greyText: {
  color: '#4F5F72',
  marginTop: 5,
  fontSize: 13,
  fontWeight: '300',
  textAlign: 'left',
},
textInputContain: {
  marginHorizontal: 35,
 
},
inputContainer: {
  height: 63,
  alignItems:'center',
  borderRadius: 7,
  flexDirection:'row',
  backgroundColor: 'white',

  
},
touch: {
  marginTop: 15,
  height: 56,
  width: '75%',
  opacity:0.2,
  backgroundColor: '#2A7BBB',
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
},

text1: {
  fontSize: 18,
  fontWeight: '600',
  color: 'white',
},
touchContain: {
 
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginTop:150
  
 
},
input: {
  alignItems: 'center',
  padding: 10,
  color: 'black',
  width: '70%',
},
img2: {
  height: 16,
  width: 16,
  marginEnd: 10,
  alignItems: 'center',
},
passwordContain: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},
inputContainer1: {
  height: 63,
  marginTop: 30,
  borderRadius: 7,
  
  backgroundColor: 'white',
  justifyContent: 'center',
},
validationContainer: {
  marginTop: 10,
  marginHorizontal: 20,
},
validationRow: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 5,
},
validationIcon: {
  width: 17,
  height: 17,
  marginEnd: 10,
},
validationText: {
  fontSize: 14,
  fontWeight:'400',
  color: '#122636',
},

errorText1: {
  color: 'red',
  marginTop: 5,
  fontSize: 12,
},
  
})