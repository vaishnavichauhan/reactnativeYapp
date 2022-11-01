import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

const CardSqureImg = ({ source,onPress,time, title, subTitle}) => {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.main}>
            
            <Image
                style={styles.logoss}
                source={source}
            />
            <View style={styles.rightSide}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.bottomText}>
                <Text  style={[styles.time,styles.textSmall]}>{time}</Text>
                <Text style={styles.textSmall}>{subTitle}</Text>
                </View>
            </View>
            
        </View>
        </TouchableOpacity>
    )
}

export default CardSqureImg
;