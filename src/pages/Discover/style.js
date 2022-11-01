import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

const styles = StyleSheet.create({
    containerFuild: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    container: {
        flex: 1,
        marginHorizontal: 12,
        marginBottom: 20,
        marginTop: 10,
    },
    main: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize:18,
        color: Colors.black,
    },
    text: {
        textAlign: "center",
        marginVertical: 15,
    },
    buttonStyle: {
        width: "50%"
    },
});
export default styles;