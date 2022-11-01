import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        paddingBottom: 20,
        paddingTop: 10,
        backgroundColor:Colors.white,
    },
    header:{
        flex:1,
    },
    inputStyle:{
        marginBottom:10,
    },
    errorMsg:{
        color:Colors.red,
        marginBottom:5,
    },
    headerText:{
        color:Colors.blue,
        fontWeight: "bold",
    },
    space:{
        flex:2,
    },
    footer:{
        flex:1,
        justifyContent: "center",
    },
    footerText:{
        marginBottom: 15,
    },
    footerColor:{
        color:Colors.blue,
        fontWeight: "bold",
    }
});

export default styles;