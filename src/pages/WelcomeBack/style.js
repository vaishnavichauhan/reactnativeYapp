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
    header: {
        flex: 1,
        justifyContent: "space-between",
    },
    hederText: {
        color: Colors.black,
    },
    fullinput: {
        flexDirection: "row",
        borderColor: Colors.graylight,
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 15,
    },
    icon: {
        width: "25%",
        paddingTop: 8,
        color: Colors.black,
    },
    icontext: {
        color: Colors.black,
        marginHorizontal: 5,
    },
    input: {
        borderColor: "white",
        width: "75%"
    },
    inputStyle: {
        borderWidth: 0,
    },
    space: {
        flex: 2,
    },
    errorMsg: {
        color: Colors.red,
    },
    footer: {
        flex: 1,
        justifyContent: "center",
    },
    footerText: {
        textAlign: "center",
        color: Colors.blue,
        fontWeight: "bold",
        marginTop: 15,
    },
});

export default styles;