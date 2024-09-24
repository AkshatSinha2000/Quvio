import { Text, View } from 'react-native'
import React, { Component } from 'react'
import StackNavigation from './navigation'
import Toast from 'react-native-toast-message'
import CustomToast from './components/CustomToast'

export class App extends Component {
  render() {
    return (
      <>
      <StackNavigation/>
      <Toast config={{ custom_error: ({ text1 }) => <CustomToast text1={text1} /> }} />
      </>
    )
  }
}

export default App