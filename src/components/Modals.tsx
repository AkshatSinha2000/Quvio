import {Text, TouchableOpacity, View, Image} from 'react-native';
import React, {Component} from 'react';
import Modals from 'react-native-modal';
import styles from '../screen/home/Style';

export class ModalsCustom extends Component {
  render() {
    const {navigation} = this.props;
    const {
      isVisible,
      desc2,
      buttonName,
      image3,
      desc3,
      desc1,
      onBackdropPress,
      image1,
      image2,
      ModalImage,
      description,
      header,
    } = this.props;
    return (
      <Modals
        isVisible={isVisible}
        onBackdropPress={onBackdropPress}
        style={styles.modal}>
        <View style={styles.modalsContent}>
          <Image
            source={ModalImage}
            style={[styles.logo, {alignSelf: 'center'}]}
          />
          <Text style={styles.header}>{header}</Text>
          <Text style={styles.description}>{description}</Text>

          <View style={styles.container3}>
            <Image source={image1} style={styles.image} />
            <Text style={styles.points}>{desc1}</Text>
          </View>

          <View style={styles.container3}>
            <Image source={image2} style={styles.image} />
            <Text style={styles.points}>{desc2} </Text>
          </View>

          <View style={styles.container3}>
            <Image source={image3} style={styles.image} />
            <Text style={styles.points}>{desc3}</Text>
          </View>

          <TouchableOpacity style={styles.login} onPress={this.props.onPress}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              {buttonName}
            </Text>
          </TouchableOpacity>
        </View>
      </Modals>
    );
  }
}

export default ModalsCustom;
