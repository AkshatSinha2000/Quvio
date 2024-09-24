import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
      backgroundColor:'#2A7BBB', 
      paddingBottom:-25,
    },

    container5:{
      backgroundColor: '#46A4BA', borderRadius: 100, padding: 5
    },
    container6:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },

    topbarContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      paddingHorizontal:24,
    },

    text1:{
      fontSize:18,
      fontWeight:'400',
      marginBottom:2,
      color:'#FFFFFF'
    },
    text2:{
      fontSize:20,
      fontWeight:'600',
      marginBottom:5,
      color:'#FFFFFF',
      
    },
    text3:{
      fontSize:15,
      fontWeight:'700',
      marginBottom:5,
      color:'#164061',
    },
    text4:{
      fontSize:13,
      fontWeight:'500',
      color:'#60707D',
    },
    text5:{
      color:'#525454',
      fontSize:12,
      fontWeight:'600',
      marginTop:32,
    },
    text6:{
      color:'#0E1F2C',
      fontSize:14,
      fontWeight:'600',
      marginBottom:5,
      marginLeft:10,
     
    },
    text7:{
      color:'#85929C',
      fontSize:12,
      fontWeight:'500',
      marginLeft:10,
      flexWrap:'wrap'
    },
    chat:{
      height:22,
      width:22,
    },
    imageContainer:{
      backgroundColor:'#FFFFFF1A',
      marginLeft:10,
      padding:10,
      borderRadius:10,
    },
    containerMain:{
      paddingHorizontal:16,
      paddingVertical:24,
      backgroundColor:'#E6EDF3',
      flex:1,
    },
    containerTwo:{
     shadowColor:'black',
     shadowOpacity:0.2,
     shadowRadius:10,
      flexDirection:'row',
      backgroundColor:'#D9E2EE',
      paddingHorizontal:20,
      paddingVertical:19,
      justifyContent:'flex-start',
      alignItems:'center',
      borderRadius:10,

    },
    setting:{
      height:35,
      width:35,
      marginRight:20,
    },


    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginBottom:20,
      },
      title: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 25,
        fontFamily:'Moderustic-Regular'
      },
      subtitle: {
        fontSize: 17,
        paddingTop: 5,
        fontWeight: '400',
        color: 'grey',
        marginBottom: 20,
      },
      input: {
        marginTop: 30,
        borderWidth: 1,
        borderColor: 'grey',
        height: 50,
        padding: 15,
        borderRadius: 10,
      },
      inputText: {
        
        
        position: 'absolute',
        top: 22,
        left: 10,
        backgroundColor: 'whitesmoke',
        color: 'grey',
      },
      inputContainer: {
        position: 'relative',
      },
      eyeIcon: {
        position: 'absolute',
        top: -36,
        left: 275,
        width: 26,
        height: 26,
        resizeMode: 'contain',
      },
      forgotPassword: {
        color: 'royalblue',
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        marginTop: 15,
        fontSize: 13,
      },
      login: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2A7BBB',
        paddingVertical:22,
        // height: 50,
        padding: 5,
        borderRadius: 10,
      },
      loginText: {
        color: 'white',
        fontWeight: 'bold',
      },
      modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContainer: {
        width: 300,
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: 'white',
        borderRadius: 13,
        alignItems: 'center',
        justifyContent:'center'
      },
      modalMessage: {
        fontSize: 15,
        marginBottom: 15,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        color:'grey'
      },
      modalButton: {
        backgroundColor: 'royalblue',
        paddingHorizontal:50,
        paddingVertical:30,
        borderRadius: 5,
      },
      modalButtonText: {
        color: 'white',
        fontWeight: 'bold',
      },
    
      scontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modal: {
        justifyContent: 'flex-end',
        margin: 0,
      },
      modalsContent: {
        backgroundColor: '#E6EDF3',
        padding: 30,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        // width: Dimensions.get('window').width,
        height: Platform.OS === 'ios' ? '70%' : '80%', 
        // justifyContent: 'center',
        // alignItems: 'center',
      },
      header: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 11,
      },
      description: {
        fontSize: 15,
        marginBottom: 20,  
        textAlign: 'left',
        color:'grey'
    
      },
      points:{
        fontSize:14,
        fontWeight:'400',
        color:'#122636',
        alignSelf:'center'
    
      },
      image:{
        height:80,
        width:80
      },
      container3:{
        alignItems:'flex-start',
        alignContent:'center',
        flexDirection:'row',
      },
      flatContainer:{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:20,
        paddingVertical:15,
        borderRadius:5,
        backgroundColor:'#F8F9F9',
        marginRight:10,
      },
      flatimage:{
        height:25,
        width:25,
      },
      flattext:{
        color:'#0E1F2C',
        fontSize:13,
        fontWeight:'600',
        marginLeft:10

      },
      listMainContainer:{
        
        paddingHorizontal:10,
        backgroundColor:'#F8F9F9',
        marginVertical:20,
        borderRadius:10,
      },
      listContainer:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#0000000F',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingVertical:10,
      },
      listimgae:{
        height:35,
        width:35,
        margin:5,
      },
    
})

export default styles;