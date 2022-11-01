import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

const styles = StyleSheet.create({

    main: {
        flexDirection: "row",
        marginBottom: 10,
        marginTop: 10,
        height: 60,
        marginHorizontal: 20,
    },
    logoss: {
        height: 60,
        width: 60,
        marginRight: 15,
        width: "20%",
    },
    rightSide: {
        flexDirection: "column",
        justifyContent: "space-between"
    },
    time: {
        marginRight: 5,
    },
    bottomText: {
        flexDirection: "row",
    },
    textSmall:{
        fontSize:12,
    },
    title: {
        color: Colors.black,
        fontWeight: "bold",
        width: "70%",
    },
})
export default styles;