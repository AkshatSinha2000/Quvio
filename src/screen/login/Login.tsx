import React, { Component } from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  View,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import background from '../../assets/background.png';
import iconImage from '../../assets/IconImage.png';
import iconone from '../../assets/iconone.png';
import icontwo from '../../assets/icontwo.png';
import iconthree from '../../assets/iconthree.png';
import emailImage from '../../assets/email.png';
import emailerror from '../../assets/emailerror.png';
import eye from '../../assets/eye.png';
import lock from '../../assets/lock.png';
import errorlock from '../../assets/errorlock.png';
import erroricon from '../../assets/erroricon.png';
import Style from './LoginStyle';
import eyecut from '../../assets/eye-slash-svgrepo-com.png';
import accountlock from '../../assets/accountlock.png';
import joyicon from '../../assets/joyicon.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Toast from 'react-native-toast-message';
import CustomModel from '../../components/CustomModel';
import CustomToast from '../../components/CustomToast';

const data = [
  { image: iconone, textOne: 'Aesthetical', textTwo: 'Graphics' },
  { image: icontwo, textOne: 'Real time', textTwo: 'statistics' },
  { image: iconthree, textOne: 'Track usage', textTwo: 'statistics' },
];

type LoginState = {
  toggle: boolean;
  email: string;
  password: string;
  emailError: boolean;
  passwordError: boolean;
  modalVisible: boolean;
  modalMessage: string;
  count: number;
  image: string;
  desc: string;
};

interface LoginProp {
  navigation: any;
}

export class Login extends Component<LoginProp, LoginState> {
  constructor(props: LoginProp) {
    super(props);
    this.state = {
      toggle: false,
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
      modalVisible: false,
      modalMessage: '',
      count: 0,
      image: '',
      desc: '',
    };
  }

  validatePassword = (): boolean => {
    let isValid = true;
    const { password } = this.state;

    if (!password) {
      this.setState({ passwordError: 'Password is required' });
      isValid = false;
    } else {
      this.setState({ passwordError: '' });
    }

    return isValid;
  };

  validateEmail = () => {
    let isValid = true;
    const { email } = this.state;

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
    if (this.validateEmail() && this.validatePassword()) {
      const { email, password, count ,emailError,passwordError} = this.state;
      if (count > 3) {
        this.setState({
          count :0,
          image: accountlock,
          modalMessage: 'Account Locked',
          desc: 'Your account has been locked due to too many failed attempts. Please try again after some time.',
          modalVisible: true,
        });
      } else {
        if (email === 'Ak@gmail.com' && password === '123') {
          this.setState({
            image: joyicon,
            modalMessage: 'Login Successful',
            desc: 'Welcome to Quivio',
            modalVisible: true,
          });
          this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'BottomTab' }],
          });
        } else {
          Toast.show({
            text1: 'Invalid credentials. Please try again',
            type: 'custom_error',
          });
          this.setState({ count: count + 1 , emailError:'Email Address not registered', passwordError:'Incorrect password'});
        }
      }
    } else {
      Toast.show({
        text1: 'Please enter correct credentials',
        type: 'custom_error',
      });
      this.setState({
        emailError: 'Invalid email address entered.',
        passwordError: 'Invalid password entered.',
      });
    }
  };

  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };

  render() {
    const { navigation } = this.props;
    const { email, password, emailError, passwordError, modalVisible, modalMessage, image, desc } = this.state;

    return (
      <ImageBackground source={background} resizeMode="cover" style={Style.container}>
        <SafeAreaView>
          <View style={{ marginHorizontal: 30 }}>
            <Image source={iconImage} style={Style.iconImage} />
            <Text style={Style.QuivioText}>QUIVIO</Text>
            <Text style={Style.bottomText}>Your Personal CarWash Assistant</Text>

            <View style={Style.flatlistcontainer}>
              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <View style={Style.handlerenderitem}>
                    <Image source={item.image} style={Style.flatlistimage} />
                    <View>
                      <Text style={Style.flatlisttextone}>{item.textOne}</Text>
                      <Text style={Style.flatlisttexttwo}>{item.textTwo}</Text>
                    </View>
                  </View>
                )}
                keyExtractor={item => item.image.toString()}
                showsHorizontalScrollIndicator={false}
                horizontal
              />
            </View>
          </View>
        </SafeAreaView>

        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position' : 'height'} keyboardVerticalOffset={-137} style={{ flex: 1 }}>
          <View style={Style.containerfour}>
            <Text style={Style.signText}>Sign in</Text>
            <Text style={Style.descSignText}>with your valid credentials</Text>

            <CustomInput
              Error={emailError}
              text={email}
              onChangeText={text => this.setState({ email: text },()=>this.validateEmail)}
              onBlur={this.validateEmail}
              icon1={emailImage}
              icon2={emailerror}
              secureText={false}
              icon5={erroricon}
              placeholder={'Email Address'}
              // onFocus={this.validateEmail}
            />

            <CustomInput
              Error={passwordError}
              text={password}
              onChangeText={text => this.setState({ password: text })}
              icon1={lock}
              icon2={errorlock}
              toggle={this.state.toggle}
              onBlur={this.validatePassword}
              onPress={() => this.setState({ toggle: !this.state.toggle })}
              icon3={eye}
              icon4={eyecut}
              icon5={erroricon}
              secureText={true}
              placeholder={'Password'}
            />

            <TouchableOpacity
              style={Style.forgot}
              onPress={() =>
                this.setState(
                  { email: '', password: '', emailError: false, passwordError: false },
                  () => navigation.navigate('ForgotPassword')
                )
              }
            >
              <Text style={Style.forgotbutton}>Forgot Password</Text>
            </TouchableOpacity>

            <CustomButton onPress={this.handleLogin} buttonName={'Primary'} />
            <CustomModel
              onPress={() => this.setModalVisible(false)}
              modalVisible={modalVisible}
              image={image}
              modalMessage={modalMessage}
              desc={desc}
              buttonName={'Okay'}
            />
          </View>
        </KeyboardAvoidingView>

        <Toast config={{ custom_error: ({ text1 }) => <CustomToast text1={text1} /> }} />
      </ImageBackground>
    );
  }
}

export default Login;
