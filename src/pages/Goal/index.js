import { View, Text, ProgressBarAndroid } from 'react-native';
import React from 'react';
import styles from './style';
import Header from '../../component/Header';
import Button from '../../component/Button';
import data from './data';
import { useState } from 'react';

var arrays = [];
var progressvalue;

const Goal = ({navigation}) => {
  const [dataid, setdataid] = useState([]);


  const press = (id) => {
    if (!arrays.includes(id)) {
      arrays.push(id);
    } else {
      arrays.splice(arrays.indexOf(id), 1);
    }
    setdataid(id);
  }

  if (arrays.length == 2) {
    progressvalue = 0.7;
  } else if (arrays.length == 3) {
    progressvalue = 1;
    navigation.navigate("Email")
  }
  else if (arrays.length == 1) {
    progressvalue = 0.4;
  } else {
    progressvalue = 0;
  }



  return (
    <View style={styles.container}>
      <ProgressBarAndroid
        styleAttr="Horizontal"
        indeterminate={false}
        progress={progressvalue}
        color="#6b4eff"
      />
      <Header title="Tell us your goal" position={styles.position} />
      <Text style={styles.texts}> We will recommend diets and exercies that suit you </Text>
      <View style={styles.main}>

        <View>

          {data.map((item) =>

            <Button text={item.title}
              buttonStyle={[styles.buttonStyle, { backgroundColor: arrays.includes(item.id) ? "#6b4eff" : "#e3e4e5" }]}
              onPress={(e) => press(item.id)}
              titleStyle={[styles.titleStyle, { color: arrays.includes(item.id) ? "white" : "black" }]}
            />
          )}
        </View>
      </View>
    </View>
  )
}
export default Goal;