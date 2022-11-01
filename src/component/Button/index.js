import React from 'react';
import {Text, TouchableOpacity } from 'react-native';
import styles from './style';

const Button = ({ text ,buttonStyle,titleStyle,isDisable,onPress}) => {
    return (
        <TouchableOpacity style = {[styles.button,buttonStyle]} disabled={isDisable} onPress={onPress}>
        <Text style ={[styles.text,titleStyle]}>{text}</Text>  
      </TouchableOpacity>

    )
}

export default Button;