import React from 'react';
import {Text ,TextInput} from 'react-native';
import styles from './style';


const Input = ({value,placeholder,onChangeText,keybordtype,inputStyle,onPressIn,onPressOut,maxLength}) => {
    return (
        <TextInput
        style={[styles.input, inputStyle]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType={keybordtype}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        maxLength={maxLength}
      />
    )
}

export default Input;