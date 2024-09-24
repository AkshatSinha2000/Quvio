import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
      backgroundColor:'#E6EDF3',
        paddingHorizontal:24,
        paddingTop:30,
        flex:1
    },
    logo:{
        height:55,
        width:83
    },
    containerTwo:{
        marginTop:40,
        marginBottom:38
    },
    heading:{
        fontSize:24,
        fontWeight:'700',
        marginBottom:5,
    },
    text:{
        color:'#4F5F72',
        fontSize:15,
        fontWeight:'400'
    },
    inputText:{
        width:280,
        marginLeft:10,
        paddingRight:10
      },
      errorText: {
        color: '#122636',
        fontSize: 13,
        fontWeight:'400'
        
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
        fontWeight:'700',
      },
      modalText: {
        fontSize: 13,
        marginBottom: 20,
        fontWeight:'400',
        alignSelf:'center',
        justifyContent:'center'
      },
      modalButton: {
        paddingVertical: 10,
        paddingHorizontal:20,
        backgroundColor: '#007bff',
        borderRadius: 5,
      },
      modalButtonText: {
        color: 'white',
        fontSize: 16,
      },
      containerThree:{
        flexDirection:'row',
        // borderWidth:1,
        backgroundColor:'#F8F9F9',
        marginTop:20,
        height:70,
        padding:15,
        borderRadius:10,
      },
      email: {
        height: 24,
        width: 24,
      },
      imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        
      },
    
    
    
    
      modalimage:{
        height:50,
        width:50,
        marginBottom:20,
      },

  image:{

    height:20,
    width:20,
    marginRight:5
  },
  errorContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:10,
    marginLeft:10,
    
    
  },
  button: {
    marginTop: 38,
    paddingHorizontal: 30,
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#2A7BBB',
    borderRadius:10,
    marginBottom:10,
  },
  buttontext: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
  buttonContainer:{flex:1,justifyContent:'flex-end'}








  ,





  container1:{
    flex:1,
    // backgroundColor:colors.bg
},
img: {
    height: 55,
    width: 85,
  },
  imageContain: {
    marginTop: 10,
    marginStart: 20,
    marginBottom: 20,
  },
  signText: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'left',
  },
  textContain1: {
    marginTop: 60,
    marginStart: 35,
  },
  greyText: {
    color: '#4F5F72',
    marginTop: 5,
    fontSize: 13,
    fontWeight: '300',
    textAlign: 'left',
  },
  textInputContain: {
    marginHorizontal: 35,
   
  },
  inputContainer: {
    height: 63,
    alignItems:'center',
    borderRadius: 7,
    flexDirection:'row',
    backgroundColor: 'white',

    
  },
  touch: {
    marginTop: 15,
    height: 56,
    width: '75%',
    opacity:0.2,
    backgroundColor: '#2A7BBB',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text1: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  touchContain: {
   
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop:150
    
   
  },
  input: {
    alignItems: 'center',
    padding: 10,
    color: 'black',
    width: '70%',
  },
  img2: {
    height: 16,
    width: 16,
    marginEnd: 10,
    alignItems: 'center',
  },
  passwordContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer1: {
    height: 63,
    marginTop: 30,
    borderRadius: 7,
    
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  validationContainer: {
    marginTop: 10,
    marginHorizontal: 20,
},
validationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
},
validationIcon: {
    width: 17,
    height: 17,
    marginEnd: 10,
},
validationText: {
    fontSize: 14,
    fontWeight:'400',
    color: '#122636',
},

errorText1: {
    color: 'red',
    marginTop: 5,
    fontSize: 12,
},
    
})

export default styles