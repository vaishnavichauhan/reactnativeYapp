import { StyleSheet } from "react-native";
import { Text ,TouchableOpacity,View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Colors from "../theme/colors";

const styles = StyleSheet.create({
    WelComeBackS: {
        headerTitle: ""
    },
    LoginS: {
        headerTitle: "Log in",
        headerTitleAlign: 'center',
    },
    AuthenticationS:{
        headerTitle: "",
        headerRight: () => (
            <TouchableOpacity
          ><Text style={{color:Colors.blue, fontSize: 18}}>Change number</Text>
          </TouchableOpacity>
            ),
    },
    PracticeS:{
        headerTitle: "",
        headerRight: () => (
            <TouchableOpacity
          ><Text style={{color:Colors.graydark, fontSize: 18}}>Skip</Text>
          </TouchableOpacity>
            ),
    },
    EmailS:{
        headerTitle: "",
    },
    FindshopS:{
        headerTitle: "",
    },
    ItemsS:{
        headerTitle: "All items",
        headerTitleAlign: 'center',
        headerRight: () => (
            <Icon name="settings" size={25} color="black" />
            ),

    },
    MainHomeS:{
        tabBarLabel: '',
        headerTitle:() => (
            <View style={{marginLeft:10}}>
                <Text style={{fontSize:20,fontWeight:"bold",color:"black"}}>Good morning</Text>
                <Text>Monday, January 25, 2021</Text>
          </View>),
        headerRight: () => (
            <View style={{marginRight:15}}>
                <Text><Icon name="sun" size={25} color="yellow" /></Text>
                <Text>28 c</Text>
          </View>),
        tabBarIcon: () => (
            <Icon name="home" size={25} color="black" />
      ),
    },
    DiscoverS:{
        tabBarLabel: '',
        headerTitle:"Saved items",
        headerTitleAlign: 'center',
        tabBarIcon: () => (
            <Icon name="heart" size={25} color="black" />
      ),
    },
    NotiS:{
        tabBarLabel: '',
      headerShown:false ,
        tabBarIcon: () => (
            <Icon name="bell" size={25} color="black" />
      ),
    },
    ProfiS:{
        tabBarLabel: '',
        headerTitle:"My details",
        headerTitleAlign: 'center',
        tabBarIcon: () => (
            <Icon name="user" size={25} color="black" />
      ),
    },
   
})


export default styles;