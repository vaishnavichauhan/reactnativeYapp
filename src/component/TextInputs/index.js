import { View, Text } from 'react-native'
import React from 'react'
import Input from '../Input'
import styles from './style'

const TextInputs = ({value,placeholder,onChangeText,keybordtype,inputStyle,onPressIn,onPressOut,textss,userName}) => {
  return (
    <View>
     <View style={styles.profileText}>
        <Text style={styles.sideText}>{userName} </Text>
    <Input  value={value} 
            placeholder={placeholder}
             onChangeText={onChangeText} 
             inputStyle={styles.inputStyle}
    />
    </View>
    </View>
  )
}

export default TextInputs;