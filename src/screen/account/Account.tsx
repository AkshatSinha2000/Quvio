import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export class Account extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Account</Text>
      </SafeAreaView>
    )
  }
}

export default Account


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    }
})