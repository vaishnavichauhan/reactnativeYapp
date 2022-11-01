import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

const styles = StyleSheet.create({
  main: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.graylight,
    flexDirection: "row",
    backgroundColor: Colors.gray,
  },
  input: {
    paddingLeft: 12,
    padding: 2,
    width: "100%",
  },
  icon: {
    padding:5,

  },

})

export default styles;