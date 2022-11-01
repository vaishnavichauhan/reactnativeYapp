import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

const styles = StyleSheet.create({
    
    main:{
        flexDirection:"row",
        borderWidth:1,
        borderColor:Colors.grayless,
        marginBottom:10,
        marginTop:10,
    },
    logoss:{
        height:40,
        width:40,
        marginTop:10,
        marginRight:15,
        borderRadius:20,
    },

    title:{
        color:Colors.black,
        fontWeight:"bold"
    },
    date:{
        flexGrow:1,
        alignItems:"flex-end"
    


       
    }


})
export default styles;