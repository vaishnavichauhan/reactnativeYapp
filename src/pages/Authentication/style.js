import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 12,
        marginBottom: 20,
        marginTop: 10,
    },
    header: {
        flex: 1,
    },
    headertitle: {
        fontSize: 22,
        color: Colors.black,
        fontWeight: "bold",
        textAlign: "center",
    },
    hedertext: {
        textAlign: "center",
        color: Colors.black,
        marginTop: 15,
        fontSize: 15,
    },
    round: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 30,
    },
    space: {
        flex: 2,
    },
    footer: {
        flex: 1,
        justifyContent: "center",
    },
    footerText: {
        textAlign: "center",
        color: Colors.blue,
        marginTop: 15,
    },
    buttonStyle1: {
        backgroundColor: Colors.blue,
    },
    buttonStyle2: {
        backgroundColor: Colors.gray,
        color: Colors.black,
    },
    titleStyle1: {
        color: Colors.white,
    },
    titleStyle2: {
        color: Colors.black,
    },
});

export default styles;