import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import QuivioImage from '../../assets/QuivioImage.png';
import design from '../../assets/design.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class Splash extends Component {
  handleSplash = async () => {
    try {
      const {navigation} = this.props;
      const tutorial = await AsyncStorage.getItem('isTutorial');

      console.log(tutorial);
      if (tutorial === 'true') {
        navigation.reset({
          index: 0,
          // routes:[{name:'Tutorial'}]
          routes: [{name: 'Login'}],
        });

     
      } else {
        navigation.reset({
          index: 0,
          routes: [{name: 'Tutorial'}],
          // routes:[{name:'Login'}]
        });
      }
    } catch (error) {
      console.log('error');
      
    }
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.handleSplash();
    }, 2000);
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={design} style={styles.design} />
        </View>
        <View style={styles.Quivio}>
          <Image source={QuivioImage} style={{height: 70, width: 205}} />
        </View>
      </View>
    );
  }
}

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A7BBB',
  },
  design: {
    height: 343,
    width: 584,
  },
  Quivio: {
    padding: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
