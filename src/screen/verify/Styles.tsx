import {Dimensions, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  // Styles remain unchanged
  modalImage: {
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
  },
  ResendText: {
    color: '#081017',
    fontWeight: '600',
    fontSize: 14,
  },
  Resend: {
    marginTop: 20,
    marginBottom: 25,
    flexDirection: 'row-reverse',
  },
  container: {
    flex: 1,
    backgroundColor: '#E6EDF3',
  },

  headText: {
    fontSize: 24,
    marginBottom: 12,
    fontWeight: '700',
  },
  greyText: {
    color: '#4F5F72',
    fontSize: 15,
    fontWeight: '400',
  },
  ccpContain: {
    height: 40,
    width: (Dimensions.get('window').width - 60) / 7,
    borderRadius: 7,
    borderColor: '#E5E8EA',
    borderRightWidth: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    marginRight: 10,
  },
  textInput: {
    width: Dimensions.get('window').width - 60,
    paddingVertical: 8,
    flexDirection: 'row',
    marginTop: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
  },
  input: {
    alignSelf: 'center',
    justifyContent: 'center',

    color: 'black',
  },
  touchContain: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
    marginHorizontal: 30,
  },
  greyContain: {
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 16,

    backgroundColor: '#FFFFFFB2',
    alignSelf: 'flex-start',
    borderRadius: 7,
  },
  arrowImg: {
    width: 15,
    height: 10,
  },
  errorText: {
    color: 'red',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalContainer: {
    width: '80%',
    paddingHorizontal: 50,
    paddingVertical: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalheading: {
    fontSize: 20,
    marginBottom: 5,
    marginTop: 15,
    fontWeight: '700',
    lineHeight: 26,
  },
  modalText: {
    marginHorizontal: 35,
    fontSize: 13,
    marginBottom: 20,
    fontWeight: '300',
    textAlign: 'center',
    justifyContent: 'center',
    color: '#4D5876',
    lineHeight: 19.5,
  },
  modalButton: {
    marginHorizontal: 8,
    paddingVertical: 13,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    //   height: 51,
    width: '40%',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
  },
  containerThree: {
    flexDirection: 'row',
    // borderWidth:1,
    backgroundColor: '#F8F9F9',
    marginTop: 20,
    height: 60,
    padding: 15,
  },
  buttonContainer: {flex: 1, justifyContent: 'flex-end'},
  container3: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exclamatoryImage: {marginRight: 10, height: 20, width: 20},
});

export default styles;
