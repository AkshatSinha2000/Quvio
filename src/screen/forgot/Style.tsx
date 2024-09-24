import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
    marginTop: 120,
    borderRadius: 10,
    backgroundColor: '#FFFFFFB2',
    
  },
  

  image: {
    height: 10,
    width: 15,
  },
  containerone: {
    // marginTop:60,
    marginBottom: 15,
  },
  forgottext: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  desctext: {
    color: '#4F5F72',
    fontSize: 15,
    fontWeight: '400',
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
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalheading: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: '700',
  },
  modalText: {
    fontSize: 13,
    marginBottom: 20,
    fontWeight: '400',
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#60707D',
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },

  modalimage: {
    height: 50,
    width: 50,
    marginBottom: 20,
  },

  imagetwo: {
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
  containerThree: {
    flexDirection: 'row',
    backgroundColor: '#F8F9F9',
    marginTop: 15,
    height: 70,
    padding: 15,
    borderRadius: 10,
    alignItems:'center',
  },
  email: {
    height: 24,
    width: 24,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    width: '100%',
    paddingVertical: 10,
    paddingLeft: 0,
    marginLeft: 10,
  },
  button: {
    marginVertical: 30,
    paddingHorizontal: 30,
    paddingVertical: 20,
    alignItems: 'center',
    // backgroundColor: '#2A7BBB',
    borderRadius: 10,
  },
  buttontext: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
  buttonContainer: {flex: 1, justifyContent: 'flex-end'},
});

export default styles;
