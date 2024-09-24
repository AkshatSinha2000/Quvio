import React, {Component, createRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
// import { Images } from '../../assets';
// import { colors } from '../../theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton.tsx';
import backarrow from '../../assets/backarrow.png';
import exit from '../../assets/exit.png';
import verify from '../../assets/verify.png';
import protect from '../../assets/protect.png';
import styles from './Styles.tsx';
import exclamatory from '../../assets/erroricon.png';
import CustomModel from '../../components/CustomModel.tsx';
import Background from '../../components/Background.tsx';
// import { ScreenNames } from '../../navigator/screenNames';

class VerifyOtp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: ['', '', '', '', '', ''],
      isValid: true,
      errorMessage: '',
      attempts: 0,
      handleModal2: false,
      modalVisible: false,
      modalVisible1: false,
      modalVisible2: false,
    };
    this.inputRefs = Array(6)
      .fill()
      .map(() => createRef());
  }

  componentDidMount() {
    if (this.inputRefs[0].current) {
      this.inputRefs[0].current.focus();
    }
  }

  handleChange = (text, index) => {
    const {otp} = this.state;
    const newOtp = [...otp];
    newOtp[index] = text.replace(/[^0-9]/g, '');
    otp[index] = newOtp.slice(-1);
    this.setState({otp: newOtp});

    if (text && index < 5) {
      this.inputRefs[index + 1].current.focus();
    }
  };

  handleKeyPress = (key, index) => {
    const {otp} = this.state;
    const newOtp = [...otp];

    if (key === 'Backspace' && index > 0) {
      newOtp[index - 1] = '';
      this.setState({otp: newOtp});
      this.inputRefs[index - 1].current.focus();
    }
  };
  handleSubmit = () => {
    const {otp, attempts} = this.state;
    const otpString = otp.join('');
    if (otpString === '123456') {
      this.setState({modalVisible1: true});
    } else {
      const attempts = this.state.attempts + 1;
      this.setState(prevState => ({
        attempts: attempts,
        isValid: false,
        errorMessage:
          attempts < 3
            ? `The code you entered is incorrect, you have ${
                3 - attempts
              } attempts remaining.`
            : 'No attempts remaining. Please request a new code.',
        modalVisible: attempts === 3,
      }));
    }
  };

  handleModal2 = () => {
    this.setState({modalVisible2: true});
    this.props.navigation.navigate('AddPhone');
  };
  handleModal = () => {
    this.setState({modalVisible: false});
  };
  handleModal1 = () => {
    this.props.navigation.navigate('Login')
    this.setState({modalVisible1: false});

    setTimeout(()=>{
      this.props.navigation.reset({
          index:0,
          routes:[{name:'Login'}]
        })
      },100)
  };

  render() {
    const {
      modalVisible2,
      otp,
      isValid,
      errorMessage,
      modalVisible,
      modalVisible1,
    } = this.state;

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <View style={styles.container}>
          <Background 
          onPress = {this.handleModal2}
          />

          {/* <Pressable style={styles.greyContain} onPress={this.handleModal2}>
            <Image source={backarrow} style={styles.arrowImg} />
          </Pressable> */}
          <View style={{flex: 1, paddingHorizontal: 30}}>
            <View style={styles.textContainer}>
              <Text style={styles.headText}>Verify Account Access</Text>
              <Text style={styles.greyText}>
                Enter the code that we just sent to you on
              </Text>
              <View>
                <Text style={{color: 'black', marginTop: 3}}>
                  +1-788-895-5435.
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.textInput,
                {borderColor: errorMessage ? 'red' : 'white'},
              ]}>
              {otp.map((digit, index) => (
                <View key={index} style={styles.ccpContain}>
                  <TextInput
                    ref={this.inputRefs[index]}
                    value={digit}
                    keyboardType="numeric"
                    maxLength={1}
                    onChangeText={text => this.handleChange(text, index)}
                    onKeyPress={({nativeEvent: {key}}) =>
                      this.handleKeyPress(key, index)
                    }
                    style={[
                      styles.input,
                      {
                        color: !isValid ? 'red' : 'black',
                      },
                    ]}
                  />
                </View>
              ))}
            </View>
            {errorMessage ? (
              <View style={{flexWrap: 'wrap', marginHorizontal: 10}}>
                <View style={styles.container3}>
                  <Image source={exclamatory} style={styles.exclamatoryImage} />
                  <Text style={styles.errorText}>{errorMessage}</Text>
                </View>
              </View>
            ) : null}
            <View style={styles.Resend}>
              <TouchableOpacity>
                <Text style={styles.ResendText}>Resend</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <CustomButton
                onPress={this.handleSubmit}
                buttonName={'Confirm Code'}
              />
            </View>

            <CustomModel
              onPress={() => {
                this.handleModal();
              }}
              modalVisible={modalVisible}
              image={protect}
              modalMessage={'Too many failed attempts'}
              desc={
                'Your account has been locked, please try again in one hour.'
              }
              buttonName={'Back to Login'}
            />

            <CustomModel
              onPress={() => {
                this.handleModal1();
              }}
              modalVisible={modalVisible1}
              image={verify}
              modalMessage={'Account Verified!'}
              desc={'Your account has been verified successfully.'}
              buttonName={'Back to Login'}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default VerifyOtp;
