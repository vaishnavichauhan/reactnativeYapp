import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

const styles = StyleSheet.create({
    button:{
        alignItems:"center",
        backgroundColor:Colors.blue,
        padding:12,
        borderRadius:  60,
        width:"100%",
    },
    text:{
        color: Colors.white, 
    }
})

export default styles;