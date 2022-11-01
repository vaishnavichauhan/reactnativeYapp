import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

const styles = StyleSheet.create({
    main:{
        borderWidth:1,
        borderColor:Colors.gray,
        borderRadius:10,
        width:175,
        marginBottom:15,
    },
    images:{
        width: 175,
        height: 175,
    },
    title:{
        marginLeft:10,
        marginVertical:3,
    }
})

export default styles;