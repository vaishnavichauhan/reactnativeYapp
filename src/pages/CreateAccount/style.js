import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:25,
        backgroundColor: "white",
    },
    header: {
        flex: 1,
    },
    space: {
        flex: 2,
        alignItems: "center",
    },
    tinyLogo: {
        height: 200,
        width: 200,
    },
    account: {
        flex: 2,
        flexDirection: "column",
        marginTop: 45,
        marginBottom: 45,
        textAlign: "center",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 25,
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
    },
    buttonStyle: {
        width: "50%",
    },
    footer: {
        alignItems: "center"
    },
    footerText: {
        color: Colors.blue,
    }
})
export default styles;