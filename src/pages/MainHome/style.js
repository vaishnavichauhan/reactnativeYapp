import { StyleSheet } from "react-native"
import Colors from "../../theme/colors"

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingBottom: 20,
        paddingTop: 10,
    },
    btn:{
        flexDirection:"row", 
    },
    img:{
        height:150,
        width:"100%",
        marginVertical:15,
    },
    textSmall:{
        fontSize:12,
        marginTop:5,
    },
    display:{
        flexDirection:"row"
    },
    terminal:{
        marginHorizontal: 20,
    },
    terminalText:{
        fontWeight:"bold",
        color:Colors.black,
        fontSize:16,
    },
    buttonStyle:{
        padding:5,
        marginVertical:5,
        marginHorizontal:5,
        width:"17%",
    },
    buttonStyles:{
        padding:5,
        marginVertical:5,
        marginHorizontal:5,
        backgroundColor:Colors.gray,
        width:"17%",
    },
    titleStyle:{
        color:Colors.black,
    }
})
export default styles