import React, { useState } from 'react';
import {Text ,TextInput} from 'react-native';
import styles from './style';


const RoundInput = ({value,onChangeText,keybordtype,inputStyle}) => {
    const [focus,setFocus]=useState(false);
    const customstyle = focus ? styles.inputfocus :styles.inputfocusoff; 
    return (
        <TextInput
        style={[styles.input, inputStyle,customstyle]}
        onChangeText={onChangeText}
        value={value}
        onPressIn={()=> setFocus(true)}
         onPressOut={()=> setFocus(false)  }
        keyboardType='numeric'
        maxLength={1}
      />
    )
}

export default RoundInput;