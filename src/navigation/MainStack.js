import React from 'react';
import MainStackNavigator from './StackNavigator';
import BottomTabNavigator from './TabNavigator';

import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
 //import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Splash from '../pages/Splash';
import CreateAccount from '../pages/CreateAccount';
import WelcomeBack from '../pages/WelcomeBack';
import Login from '../pages/Login';
import Authentication from '../pages/Authentication';
import Practice from '../pages/Practice';
import Goal from '../pages/Goal';
import Email from '../pages/Email';
import Findshop from '../pages/Findshop';
import Items from '../pages/Items';
import Notification from '../pages/Notification';
import MainHome from '../pages/MainHome';
import Discover from '../pages/Discover';
import Profile from '../pages/Profile';

//const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
//const Drawer = createDrawerNavigator();

const MainStack = () => {
    console.log('MainStack file')
    return (
         <NavigationContainer>
            <MainStackNavigator/>
            {/* <BottomTabNavigator/> */}
            {/* <Stack.Navigator > */}
                {/* <Stack.Screen options={{headerShown:false }} name="Home" component={Splash} /> */}
                {/* <Stack.Screen options={{headerShown:false }} name="CreateAccount" component={CreateAccount} /> */}
                {/* <Stack.Screen options={styles.WelComeBackS} name="WelcomeBack" component={WelcomeBack} /> */}
                {/* <Stack.Screen options={styles.LoginS}name="Login" component={Login} /> */}
                {/* <Stack.Screen options={styles.AuthenticationS} name="Authentication" component={Authentication} /> */}
                {/* <Stack.Screen options={styles.PracticeS} name="Practice" component={Practice} /> */}
                {/* <Stack.Screen options={{headerShown:false }} name="Goal" component={Goal} /> */}
                {/* <Stack.Screen options={styles.EmailS}name="Email" component={Email} /> */}
                {/* <Stack.Screen options={styles.FindshopS} name="Findshop" component={Findshop} /> */}
                {/* <Stack.Screen options={styles.ItemsS}name="Items" component={Items} /> */}
               
              
                {/* <Stack.Screen name="MainHome" component={MainHome} /> */}
                {/* <Stack.Screen name="Notification" component={Notification} />  */}
                {/* <Stack.Screen name="Discover" component={Discover} /> */}
                {/* <Stack.Screen name="Profile" component={Profile} /> */}
            {/* </Stack.Navigator> */}
        </NavigationContainer>
    )
};
export default MainStack;