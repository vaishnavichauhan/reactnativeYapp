import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Discover from '../pages/Discover';
import Notification from '../pages/Notification';
import Profile from '../pages/Profile';
import MainHome from '../pages/MainHome';
import styles from './styles';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen options={styles.MainHomeS} name="Home" component={MainHome} />
            <Tab.Screen options={styles.DiscoverS} name="Discover" component={Discover} />
            <Tab.Screen  options={styles.NotiS} name="Notifications" component={Notification} /> 
             <Tab.Screen options={styles.ProfiS} name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}
export default BottomTabNavigator;
