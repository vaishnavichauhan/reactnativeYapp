import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Header from '../../component/Header';
import data from './data';
import styles from './style';
import Button from '../../component/Button';

const Practice = ({ navigation }) => {
  var [dataid, setdataid] = useState({})
  let press = (item) => {
    setdataid(item)
  }
  function validNavigate() {
    if (dataid.id) {
      navigation.navigate("Goal")
    }
    else {
      alert("please select any one practice area")
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header title="Practice Area" />
        <Text>So we can recommend exercises</Text>
      </View>
      {data.map((item) =>
        <Button text={item.title}
          buttonStyle={[styles.buttonStyle, { backgroundColor: item.id === dataid.id ? "#6b4eff" : "#e3e4e5" }]}
          titleStyle={styles.titleStyle}
          onPress={(e) => press(item)}
        />
      )}
      <View style={styles.footer}>
        <Button text="Select"
          onPress={() => validNavigate()}
        />
      </View>
    </View>
  )
}
export default Practice;