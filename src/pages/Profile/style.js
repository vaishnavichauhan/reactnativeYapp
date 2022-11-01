import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    profileImg:{
        flex:1,
      alignItems:"center",
      justifyContent:"space-evenly",
      backgroundColor:Colors.white,
    //   paddingBottom:15,
    },
    profileInput:{
        flex:2,
    },
    img:{
        height:60,
        width:60,
        borderRadius:30,
    },
    buttonstyle:{
        width:"20%",
        backgroundColor:Colors.lightblue,
        padding:5,
    },
    titleStyle:{
        color:Colors.blue,
        fontWeight:"bold"
    },
    profileText:{
        flexDirection:"row",
        justifyContent:"space-between",
        borderWidth:2,
        borderColor:Colors.black,
    },
    profiletitle:{
        fontSize:12,
        marginTop:35,
        marginBottom:15,
        paddingLeft:12,

    },
    inputStyle:{
         width:"50%",
      

    },
    footer:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:12,
        backgroundColor:Colors.white,
        paddingVertical:25,


    },
    footerTitle:{
        fontSize:16,
        fontWeight:"bold",
        marginBottom:2,
    }

})
export default styles;