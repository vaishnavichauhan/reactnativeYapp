import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15,
    },
    image: {
        flex: 1,
        resizeMode: "contain",
    },
    hederText: {
        paddingTop: 35,
        flex: 8,
    },
    subTitle: {
        textAlign: "center",
        fontSize: 20,
        color: Colors.graylight,
    },
    title: {
        textAlign: "center",
        marginTop: 10,
    },
    bottomButton: {
        flex: 1,
    },
    buttonStyle: {
        backgroundColor: Colors.white,

    },
    titleStyle: {
        color: Colors.black,
    }
});

export default styles;