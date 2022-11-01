import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";
const styles = StyleSheet.create({
    
    container:{
    flex: 1,
    marginHorizontal: 12,
    marginBottom: 20,
    marginTop: 10,
    },
    subHeder:{
        marginTop:15,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    buttonStyle:{
        padding:5,
        marginVertical:5,
        width:"20%",
    },
    heder:{
        flexDirection:"row", 
        justifyContent:"space-between"

    },
    inputStyle:{
        width:"78%",
    },
    text:{
        fontWeight:"bold",
        color:Colors.black,
        marginVertical:10,
    },
    hr:{
        borderWidth:1,
        borderColor:Colors.graylight,
        marginTop:12,
    }

})
export default styles;