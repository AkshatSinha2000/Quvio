import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        // marginTop:30,
        flex:1,
        
        // backgroundColor:'white'
    },
    country: {
        flexDirection: 'row',
        marginTop: 30,
        borderRadius: 10,
        backgroundColor:'#FFFFFF',
        paddingHorizontal:10,
        paddingVertical:10,
    },
   
    container3:{
        flexDirection:'row',
        marginTop: 30,
        marginLeft: 10,
        justifyContent:'flex-start',
        alignItems:'center',
        width:Dimensions.get('window').width-120,
        borderRadius:10,
        backgroundColor: '#FFFFFF'
    },
    phone: {
        flex:1,
       paddingHorizontal:10,
    //    backgroundColor:'blue'
    },
    text3:{
        
        paddingHorizontal:15,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'red'
    },
    button: {
        marginTop: 40,
        marginBottom:10,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'royalblue',
        borderColor: 'white',
        height: 50,
        padding: 5,
        borderRadius: 10,
    },
    buttonPressable:{flex: 1, justifyContent: 'flex-end',marginVertical:30},
    safeareaContainer:{
        flex: 1, 
        backgroundColor: '#E6EDF3'
    },
    backarrow:{
        backgroundColor: '#FFFFFFB2',
        alignSelf: 'flex-start',
        padding: 15,
        borderRadius: 10,
      },
      text1:{
        // marginTop: 60,
         fontSize: 26, 
         fontWeight: '700'
        },
        text2:{
            marginTop: 10, 
            fontSize: 15, 
            color: '#4F5F72'
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
            paddingVertical:20,
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
            textAlign:'center',
            justifyContent: 'center',
            color: '#4D5876',
            lineHeight: 19.5,
          },
          modalButton: {
              marginHorizontal:8,
            paddingVertical: 13,
            paddingHorizontal:5,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
          //   height: 51,
            width: '40%',
          },
          modalButtonText: {
            color: 'white',
            fontSize: 13,
            fontWeight:'600'
        },
        modalImage: {
     
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 0.8,
          },
})

export default styles