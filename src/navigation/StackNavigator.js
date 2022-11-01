import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './TabNavigator';

import styles from './styles';

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


//96/8/59
const Stack = createNativeStackNavigator();
const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen options={{headerShown:false }} name="splash" component={Splash} />
            <Stack.Screen options={{headerShown:false }} name="CreateAccount" component={CreateAccount} />
            <Stack.Screen options={styles.WelComeBackS} name="WelcomeBack" component={WelcomeBack} />
            <Stack.Screen options={styles.LoginS}name="Login" component={Login} />
            <Stack.Screen options={styles.AuthenticationS} name="Authentication" component={Authentication} />
            <Stack.Screen options={styles.PracticeS} name="Practice" component={Practice} />
            <Stack.Screen options={{headerShown:false }} name="Goal" component={Goal} />
            <Stack.Screen options={styles.EmailS}name="Email" component={Email} />
            <Stack.Screen options={styles.FindshopS} name="Findshop" component={Findshop} />
            <Stack.Screen options={styles.ItemsS}name="Items" component={Items} />
            <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
        </Stack.Navigator >
    )
}
export default MainStackNavigator;