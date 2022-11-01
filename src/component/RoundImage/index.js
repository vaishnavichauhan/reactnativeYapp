import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from './style'




const RoundedImages = ({imagespath,img}) => {
  return (
    <View>
      <Image source ={imagespath} style={[styles.img,img]} />
    </View>
  )
}

export default RoundedImages