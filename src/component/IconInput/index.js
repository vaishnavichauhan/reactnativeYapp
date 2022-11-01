import React from 'react';
import {Text ,TextInput,View} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';


const IconInput = ({value,placeholder,onChangeText,keybordtype,inputStyle,onPressIn,onPressOut}) => {
    return (
        
        <View style={styles.main}>
        <Icon name="search" size={20} style={styles.icon}  />
        <TextInput
        style={[styles.input, inputStyle]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType={keybordtype}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      />
        </View>
    
    )
}

export default IconInput;