import React from 'react';
import {Text } from 'react-native';
import styles from './style';


const Header = ({title,position}) => {
    return (
       <Text style={[styles.title,position]}>{title}</Text>
    )
}

export default Header;