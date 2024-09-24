import {Text, TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import arrow from '../assets/backarrow.png';
import background from '../assets/forgotpagebackground.png';

export class Background extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.topContainer}
          onPress={this.props.onPress}>
          <Image source={arrow} style={styles.image} />
        </TouchableOpacity>

        <Image source={background} style={styles.backgroundimage} />
      </View>
    );
  }
}

export default Background;

const styles = StyleSheet.create({
  backgroundimage: {
    height: 210,
    width: 220,
  },
  mainContainer: {
    paddingHorizontal: 30,
    flex: 1,
  },
  backgroundContainer: {
    flex: 1,
    backgroundColor: '#E6EDF3',
  },

  topContainer: {
    paddingHorizontal: 15,
    paddingVertical: 18,
    alignSelf: 'flex-start',
    marginHorizontal: 30,
    marginTop: 80,
    borderRadius: 10,
    backgroundColor: '#FFFFFFB2',
  },
  image: {
    height: 10,
    width: 15,
  },
});
