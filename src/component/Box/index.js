import React, { useState } from 'react';
import {Text,View } from 'react-native';
import styles from './style';

const Box = ({title,boxstyle}) => {
    const [isActive, setIsActive] = useState(false);
    const handleclick =()=>{
        setIsActive(true);
    }
    return (
        <View> 
            <Text  style={[styles.box, boxstyle,
            {backgroundColor:isActive ? "#6b4eff" : "#e3e4e5"}]} 
             onPress ={handleclick} >{title}</Text>
        </View>

    )
}

export default Box;