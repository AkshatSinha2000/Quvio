import { ImageBackground, Pressable, Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from '../screen/forgot/Style'

export class CustomButton extends Component {
  render() {
    return (
        
        <Pressable style={({pressed})=>[styles.button,{backgroundColor:pressed ? '#9CD6E4':'#2A7BBB'}]} onPress={this.props.onPress}>
        <Text style={styles.buttontext}>{this.props.buttonName}</Text>
      </Pressable>
    )
  }
}

export default CustomButton