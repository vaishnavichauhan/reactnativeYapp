import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

const styles = StyleSheet.create({
    input: {
         padding: 10,
         textAlign:"center",
         keyboardType:"numeric",
        borderRadius:25,
        width:50,
        height:50,
        // borderColor:Colors.graylight,
      },
      inputfocus:{
        borderWidth: 2,
        borderColor:Colors.blue,
      },
      inputfocusoff:{
        borderWidth: 2,
        borderColor:Colors.graylight,
      },
})

export default styles;