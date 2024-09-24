import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './Style';
import Modals from 'react-native-modal';
import ModalImage from '../../assets/modalImage.png';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import bell from '../../assets/bell.png';
import chat from '../../assets/chat.png';
import setting from '../../assets/setting.png';
import clock from '../../assets/clock.png';
import speaker from '../../assets/speaker.png';
import contact from '../../assets/contact.png';
import ModalsCustom from '../../components/Modals';

const data = [
  {id: '1', image: speaker, title1: 'Create', title2: 'Campaign'},
  {id: '2', image: clock, title1: 'One Time', title2: 'Trigger'},
  {id: '3', image: speaker, title1: 'Create', title2: 'Campaign'},
  {id: '4', image: clock, title1: 'One Time', title2: 'Trigger'},
];

const list = [
  {
    id: '1',
    image: contact,
    title: 'Successfully configured POS for sites',
    date: 'Jun 3, 2023 | 12:30 PM',
  },
  {
    id: '10',

    image: contact,
    title: 'You ended the campaign Holiday',
    date: 'Jun 3, 2023 | 12:30 PM',
  },
  {
    id: '2',
    image: contact,
    title: 'Activated the user access group named Site manager',
    date: 'Jun 3, 2023 | 12:30 PM',
  },
  {
    id: '3',
    image: contact,
    title: 'Successfully configured POS for sites',
    date: 'Jun 3, 2023 | 12:30 PM',
  },
  {
    id: '4',
    image: contact,
    title: 'Successfully configured POS for sites',
    date: 'Jun 3, 2023 | 12:30 PM',
  },
  {
    id: '5',
    image: contact,
    title: 'Successfully configured POS for sites',
    date: 'Jun 3, 2023 | 12:30 PM',
  },
  {
    id: '6',
    image: contact,
    title: 'You ended the campaign Holiday',
    date: 'Jun 3, 2023 | 12:30 PM',
  },
  {
    id: '7',
    image: contact,
    title: 'Activated the user access group named Site manager',
    date: 'Jun 3, 2023 | 12:30 PM',
  },
  {
    id: '8',
    image: contact,
    title: 'Successfully configured POS for sites',
    date: 'Jun 3, 2023 | 12:30 PM',
  },
  {
    id: '9',
    image: contact,
    title: 'Successfully configured POS for sites',
    date: 'Jun 3, 2023 | 12:30 PM',
  },
];

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: true,
    };
  }

  HandleNavigate = () => {
    const {navigation} = this.props;
    this.setState({isModalVisible: false}), navigation.navigate('AddPhone');
  };
  renderCart = ({item}) => {
    return (
      <View style={styles.flatContainer}>
        <View style={styles.container5}>
          <Image source={item.image} style={styles.flatimage} />
        </View>
        <View>
          <Text style={styles.flattext}>{item.title1}</Text>
          <Text style={styles.flattext}>{item.title2}</Text>
        </View>
      </View>
    );
  };

  renderList = ({item}) => {
    return (
      <View style={styles.listContainer}>
        <View>
          <Image source={item.image} style={styles.listimgae} />
        </View>
        <View>
          <View style={{width: Dimensions.get('window').width - 100}}>
            <Text style={styles.text6}>{item.title}</Text>
          </View>
          {/* <Text style={styles.text6}>{item.title}</Text> */}
          <Text style={styles.text7}>{item.date}</Text>
        </View>
      </View>
    );
  };
  toggleModal = () => {
    this.setState({isModalVisible: false});
  };
  render() {
    const {isModalVisible} = this.state;
    return (
      <View style={{flex: 1}}>
        <SafeAreaView style={styles.container}>
          <View style={styles.topbarContainer}>
            <View>
              <Text style={styles.text1}>Welcome</Text>
              <Text style={styles.text2}>Kevin</Text>
            </View>
            <View style={styles.container6}>
              <View style={styles.imageContainer}>
                <Image source={chat} style={styles.chat} />
              </View>
              <View style={styles.imageContainer}>
                <Image source={bell} style={styles.chat} />
              </View>
            </View>
          </View>
        </SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <View style={styles.containerMain}>
            <View style={styles.containerTwo}>
              <View>
                <Image style={styles.setting} source={setting} />
              </View>
              <View>
                <Text style={styles.text3}>Complete your account setup</Text>
                <Text style={styles.text4}>Tap to continue</Text>
              </View>
            </View>
            <Text style={styles.text5}>FREQUENTLY USED</Text>
            <View>
              <FlatList
                data={data}
                renderItem={this.renderCart}
                keyExtractor={item => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <Text style={styles.text5}>RECENT ACTIVITIES</Text>

            <View style={styles.listMainContainer}>
              <FlatList
                data={list}
                renderItem={this.renderList}
                keyExtractor={item => item.id.toString()}
              />
            </View>
          </View>

          <ModalsCustom
            navigation={this.props.navigation}
            isVisible={this.state.isModalVisible}
            onBackdropPress={this.toggleModal}
            ModalImage={ModalImage}
            description={
              'Setup two-factor authentication to secure your account in just two steps.'
            }
            header={'Secure your Account ?'}
            desc1={'Link your account with your phone number'}
            image1={image1}
            desc2={'Enter the one-time passcode'}
            image2={image2}
            desc3={'Secure your account '}
            image3={image3}
            buttonName={'Get Started'}
            onPress={this.HandleNavigate}
          />
        </ScrollView>
      </View>
    );
  }
}

export default Home;
