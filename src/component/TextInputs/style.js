import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

const styles = StyleSheet.create({
    
    profileText:{
        flexDirection:"row",
        justifyContent:"space-between",
        borderWidth:1,
        backgroundColor:Colors.white,
        borderColor:Colors.gray,
    },
    sideText:{
        marginVertical:15,
        marginLeft:15,
        color:Colors.black

    },
    inputStyle:{
        maxWidth:"42%",
        borderWidth:0,
        color:Colors.black,
        paddingVertical:15,

    }

})
export default styles;