import {Image, Modal, Pressable, Text, View} from 'react-native';
import React, {Component} from 'react';
import Style from '../screen/login/LoginStyle';

export class CustomModel extends Component {
  render() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.modalVisible}
        onRequestClose={() => this.props.onPress}>
        <View style={Style.modalBackground}>
          <View style={Style.modalContainer}>
            <Image source={this.props.image} style={Style.modalimage} />
            <Text style={Style.modalheading}>{this.props.modalMessage}</Text>
            <Text style={Style.modalText}>{this.props.desc}</Text>
            <Pressable style={Style.modalButton} onPress={this.props.onPress}>
              <Text style={Style.modalButtonText}>{this.props.buttonName}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    );
  }
}

export default CustomModel;
