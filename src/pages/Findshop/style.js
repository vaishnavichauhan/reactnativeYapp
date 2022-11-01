
import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import Colors from "../../theme/colors";


const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal: 12,
        marginBottom: 20,
        marginTop: 10,
    },
    text:{
        marginVertical:10,
    },
    boxstyle:{
        borderWidth:1,
         paddingVertical:8,
        marginVertical:8,
        borderRadius:10,
        borderColor:Colors.grayless,
        flexDirection:"row", 
        backgroundColor:Colors.grayless
    },
    icon:{
        paddingTop:8,
        marginRight:10,
        marginLeft:5,
    },
    titlestyle:{
        color:Colors.black,
        fontSize:17,
    }


});

export default styles;