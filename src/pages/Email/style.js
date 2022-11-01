import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 12,
        marginBottom: 20,
        marginTop: 10,
    },
    Header: {
        flex: 1,
    },
    text: {
        fontWeight: "bold",
        color: Colors.black,
        fontSize: 17,
        marginVertical: 10,
    },
    errorMsg: {
        color: Colors.red
    },
    space: {
        flex: 2,
    },
    footer: {
        flex: 1,
        justifyContent: "center",
    },
});
export default styles;