import {Dimensions, Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerTwo: {
    // paddingHorizontal:30,
    backgroundColor: 'green',
    // flex: 1
  },
  handlerenderitem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  descSignText: {color: '#4F5F72', marginBottom: 20, fontSize: 15},

  containerfour: {
    backgroundColor: '#E6EDF3',
    paddingHorizontal: 30,

    paddingTop: 35,

    height: '100%',
  },

  iconImage: {
    marginVertical: 27,
    height: 60,
    width: 90,
  },
  QuivioText: {
    fontSize: 28,
    fontWeight: '800',
    color: '#F8F9F9',
  },
  bottomText: {
    fontSize: 17,
    fontWeight: '400',
    color: '#F8F9F9',
  },
  flatlistcontainer: {
    marginTop: 68,
    marginBottom: 10,
  },
  flatlistimage: {
    height: 20,
    width: 20,
    marginRight: 12,
  },
  flatlisttextone: {
    fontSize: 13,
    fontWeight: '400',
    color: '#F8F9F9',
    marginRight: 40,
  },
  flatlisttexttwo: {
    fontSize: 13,
    fontWeight: '400',
    color: '#F8F9F9',
    marginRight: 40,
  },
  signText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0B1721',
    marginBottom: 5,
  },
  signinbottomText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#4F5F72',
  },

  containerThree: {
    flexDirection: 'row',
    // borderWidth:1,
    backgroundColor: '#F8F9F9',
    marginTop: 15,
    // height:70,
    paddingHorizontal: 15,
    paddingVertical: 2,
    borderRadius: 10,
  },
  email: {
    height: 24,
    width: 24,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical:20,
  },
  imageContainer2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Platform.OS === 'ios' ? 20 : 20,
  },

  inputText: {
    width: '90%',
    marginTop:15,
    paddingVertical: 10,
    paddingLeft: 0,
    marginLeft: 10,
    
    // paddingRight:10,
  },
  lock: {},
  eye: {},

  forgot: {
    marginTop: 28,
    // marginBottom: 20,
    alignSelf: 'flex-end',
  },
  forgotbutton: {
    fontSize: 14,
    fontWeight: '600',
    color: '#081017',
  },
  button: {
    marginTop: 38,
    paddingHorizontal: 30,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A7BBB',
    borderRadius: 10,
  },
  buttontext: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

  errorText: {
    color: '#122636',
    fontSize: 13,
    fontWeight: '400',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalContainer: {
    width: Dimensions.get('window').width - 60,
    paddingVertical: 20,
    paddingHorizontal: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalheading: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '700',
  },
  modalText: {
    fontSize: 13,
    marginBottom: 20,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 20,
    justifyContent: 'center',
    color: '#60707D',
  },
  modalButton: {
    paddingVertical: 15,
    paddingHorizontal: 50,
    backgroundColor: '#2A7BBB',
    borderRadius: 10,
  },
  modalButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  modalimage: {
    height: 50,
    width: 50,
    marginBottom: 20,
  },

  image: {
    height: 20,
    width: 20,
    marginRight: 5,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
  },
});

export default styles;
