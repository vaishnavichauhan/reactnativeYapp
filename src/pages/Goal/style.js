import { StyleSheet } from "react-native";

import Colors from "../../theme/colors";

const styles = StyleSheet.create({
    
    container:{
        flex: 1,
      marginHorizontal: 12,
      marginBottom: 20,
      marginTop: 30,
    },
    position:{
        marginTop:20,
    },
    texts:{
     marginTop:5, 
     color:Colors.black,  
    },
    main:{
        marginTop:25,
    },
    buttonStyle:{
        marginBottom:15,
        borderWidth:1,
        borderColor:Colors.gray
    },
    titleStyle:{
        color:Colors.black,
    }
});


export default styles;