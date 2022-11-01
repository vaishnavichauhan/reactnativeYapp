import React from 'react';
import {View} from 'react-native';
import MainStack from './src/navigation/MainStack';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


// import Splash from './src/pages/Splash';
// import Loginscreen from './src/login';

// const Stack = createNativeStackNavigator();
const App =() => {
  return(
   
<MainStack/>
   
//<NavigationContainer>
//<Stack.Navigator initialRouteName="Home">
//<Stack.Screen name="Home" component={Splash} />
  //{/* <Stack.Screen name="Home" component={HomeScreen} /> */}
  //<Stack.Screen name="Login" component={Loginscreen} />
//</Stack.Navigator> 
//</NavigationContainer>


  )
   
};
export default App;


