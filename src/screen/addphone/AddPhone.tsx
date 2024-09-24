import React, {Component} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  Animated,
} from 'react-native';
import exit from '../../assets/exit.png';
import {SafeAreaView} from 'react-native-safe-area-context';
import CountryPicker from 'react-native-country-picker-modal';
import backarrow from '../../assets/backarrow.png';
import styles from './Style';
import Toast from 'react-native-toast-message';
import CustomToast from '../../components/CustomToast';
import CustomButton from '../../components/CustomButton';
import Background from '../../components/Background';

class AddPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocus: false,
      countryCode: 'US',
      callingCode: '1',
      phoneNumber: '',
      modalVisible2: false,
      flag:false,
      placeholderAnim: new Animated.Value(1),
    };
  }

  // handleFocus = () => {
  //   this.setState({isFocus: true});
  // };

  // handleBlur = () => {
  //   this.setState({isFocus: false});
  // };

  handleCountrySelect = country => {
    this.setState({
      countryCode: country.cca2,
      callingCode: country.callingCode[0],
    });
  };
  handleModal2 = () => {
    this.setState({modalVisible2: true});
  };

  handleback = () => {
    this.setState({modalVisible2: true});

  };

  handleSendCode = () => {
    const {phoneNumber} = this.state;
    if (phoneNumber.length > 10 || phoneNumber.length < 10) {
      Toast.show({
        text1: 'Phone Number Should have 10',
        type: 'custom_error',
      });
    } else {
      if (phoneNumber === '1234567890') {
        Toast.show({
          text1: 'User exists. Try a different number.',
          type: 'custom_error',
        });
      } else {
        this.props.navigation.navigate('Verify');
      }
    }
  };
  handleFocus = () => {
    Animated.timing(this.state.placeholderAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  handleBlur = () => {
    if (!this.state.phoneNumber.trim()) {
      Animated.timing(this.state.placeholderAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  render() {
    const {isFocus, countryCode, phoneNumber, flag} = this.state;

    const placeholderStyle = {
      position: 'absolute',
      // left: 10,
      
      top: this.state.placeholderAnim.interpolate({
        inputRange: [0, 1],
        outputRange: Platform.OS === 'ios' ? [-15, 0] : [0,15], // Adjust the values to position the placeholder
      }),
      fontSize: this.state.placeholderAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [11, 14], // Adjust to your desired sizes
      }),
      color: '#60707D',
    };
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <View style={styles.safeareaContainer}>
          <Background onPress={this.handleback} />

          <View style={styles.container}>
            <Text style={styles.text1}>Add Phone Number </Text>
            <Text style={styles.text2}>
              To initiate the two-factor authentication,provide your phone
              number below.
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View>
                <TouchableOpacity style={styles.country}>
                  <CountryPicker
                    countryCode={countryCode}
                    withFilter
                    withFlag
                    withCallingCode
                    // withCallingCodeButton
                    onSelect={this.handleCountrySelect}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.container3}>
                <Text style={styles.text3}>+{this.state.callingCode}</Text>
                <View style={{ flex: 1 }}>
                <Animated.Text style={placeholderStyle}>
                  Phone Number
                </Animated.Text>
                <TextInput
                  value={phoneNumber}
                  keyboardType="number-pad"
                  onChangeText={(text) => {
                    this.setState({phoneNumber: text}, () => {
                      
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
                {/* <TextInput
                  style={styles.phone}
                  keyboardType="number-pad"
                  placeholder="Phone Number"
                  placeholderTextColor={'#60707D'}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  onChangeText={e =>
                    this.setState({phoneNumber: e})
                  }></TextInput> */}
              </View>
            </View>

            <View style={styles.buttonPressable}>
              <CustomButton
                onPress={this.handleSendCode}
                buttonName={'Send Code'}
              />
            </View>
          </View>
          <Toast
            config={{custom_error: ({text1}) => <CustomToast text1={text1} />}}
          />
          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisible2}
            onRequestClose={() => this.setState({modalVisible2: false})}>
            <View style={styles.modalBackground}>
              <View style={styles.modalContainer}>
                <View style={styles.modalImage}>
                  <Image source={exit} style={{height: 50, width: 50}} />
                </View>
                <Text style={styles.modalheading}>Exit 2FA?</Text>
                <Text style={styles.modalText}>
                  Are you sure you want to exit 2FA, You will need to redo it
                  again.
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Pressable
                    style={[styles.modalButton, {backgroundColor: '#F6F7F7'}]}>
                    <Text
                      style={[styles.modalButtonText, {color: 'black'}]}
                      onPress={() => this.setState({modalVisible2: false})}>
                      No, Continue
                    </Text>
                  </Pressable>

                  <Pressable
                    style={[styles.modalButton, {backgroundColor: '#2A7BBB'}]}
                    onPress={() =>
                      this.setState(
                        {modalVisible2: false},
                        this.props.navigation.navigate('BottomTab'),
                      )
                    }>
                    <Text style={[styles.modalButtonText, {color: 'white'}]}>
                      Yes, Exit
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default AddPhone;
