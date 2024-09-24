import React, { Component } from 'react';
import { Animated, Image, Pressable, Text, TextInput, View } from 'react-native';
import Style from '../screen/login/LoginStyle';

export class CustomInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderAnimation: new Animated.Value(1),
    };
  }

  handleFocus = () => {
    Animated.timing(this.state.placeholderAnimation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  handleBlur = () => {
    if (!this.props.text.trim()) {
      Animated.timing(this.state.placeholderAnimation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  render() {
    const {
      Error,
      icon1,
      secureText,
      icon2,
      text,
      toggle,
      icon3,
      icon4,
      icon5,
      placeholder,
      onChangeText,
      onFocus,
      onBlur,
      onPress,
    } = this.props;

    const placeholderStyle = {
      position: 'absolute',
      left: 10,
      top: this.state.placeholderAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [9, 23],
      }),
      fontSize: this.state.placeholderAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [11, 14],
      }),
      color: Error ? 'red' : '#60707D',
    };

    return (
      <>
        <View
          style={[
            Style.containerThree,
            Error && { borderColor: 'red', borderWidth: 1 },
          ]}
        >
          <View style={Style.imageContainer}>
            <Image source={Error ? icon2 : icon1} style={Style.email} />
          </View>

          <View style={{ flex: 1 }}>
            <Animated.Text style={placeholderStyle}>
              {placeholder}
            </Animated.Text>
            <TextInput
              value={text}
              onChangeText={onChangeText}
              placeholderTextColor={'#60707D'}
              style={Style.inputText}
              onFocus={() => {
                this.handleFocus();
                if (onFocus) onFocus();
              }}
              onBlur={() => {
                this.props.onBlur
                this.handleBlur();
                if (onBlur) onBlur();
              }}
              secureTextEntry={secureText ? !toggle : false}
            />
          </View>

          {secureText && (
            <View style={Style.imageContainer}>
              <Pressable onPress={onPress}>
                <Image source={toggle ? icon4 : icon3} style={Style.email} />
              </Pressable>
            </View>
          )}
        </View>
        {Error && (
          <View style={Style.errorContainer}>
            <Image source={icon5} style={Style.image} />
            <Text style={Style.errorText}>{Error}</Text>
          </View>
        )}
      </>
    );
  }
}

export default CustomInput;
