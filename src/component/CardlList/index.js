import { Text, View, Image } from 'react-native'
import React from 'react'
import styles from './style'

const CardList = ({ source, titleSub, title, subTitle, date, str }) => {
    return (
        <View style={styles.main}>
            <Image
                style={styles.logoss}
                source={source}
            />
            <View>
                <Text>{titleSub}</Text>
                <Text style={styles.title}>{title}</Text>
                <Text>{subTitle}</Text>
            </View>
            <View style={styles.date}>
                <Text>{date}</Text>
                <Text>{str}</Text>
            </View>



        </View>
    )
}

export default CardList;