import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH)

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Text style={styles.header}>{item.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    color: "black",
    fontSize: 23,
     fontWeight: "bold",
     textAlign:"center",
    
  },
})

export default CarouselCardItem