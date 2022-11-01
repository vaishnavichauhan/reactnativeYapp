import React from 'react';
import {Text,View,Image, TouchableOpacity} from 'react-native';
import styles from './style';


const Card = ({title,imagespath,onpress}) => {
    return (
       <View style={styles.main}>
        <TouchableOpacity onPress={onpress}>
        <Image
        style={styles.images}
        source={imagespath}
      />
        <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
       </View>
    )
}

export default Card;