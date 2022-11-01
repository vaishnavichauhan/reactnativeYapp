import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingHorizontal: 12,
      paddingBottom: 20,
      paddingTop: 10,
      backgroundColor:Colors.white
   },
   buttonStyle:{
      backgroundColor: Colors.gray,
      marginBottom: 5,
      borderRadius: 10,
   },
   titleStyle: {
      color: Colors.black,
   },
   header: {
      flex: 1,
      alignItems: "center",
      marginBottom: 35,
   },
   footer: {
      flex: 1,
   }
})
export default styles;