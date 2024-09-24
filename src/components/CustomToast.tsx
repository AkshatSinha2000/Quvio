import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import exclamatory from '../assets/exclamatory.png'

export class CustomToast extends Component {
  render() {
    const {text1} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
        <Image
        source={exclamatory}
        style={styles.image}
        />
        </View>
        <Text style={styles.text}>{text1}</Text>
      </View>
    )
  }
}

export default CustomToast


const styles = StyleSheet.create({
    container:{
        borderRadius:10,
        paddingVertical:10,
        flexDirection:'row',
        paddingHorizontal:30,
        backgroundColor:'#F04438',
         marginTop: Platform.OS === 'ios' ?  50 : 20,
        width:'90%',
        // height:45,
        alignItems:'center',
    },
    container2:{
        backgroundColor:'white',
        borderRadius:100,
        marginRight:10,
        
    },
    image:{
        height:30,
        width:30,
    },
    text:{
      color:'#FFFFFF',
      fontWeight:'400',
      fontSize: 14
    }

})