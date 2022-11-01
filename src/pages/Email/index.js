import { View, Text, ProgressBarAndroid } from 'react-native';
import React, { useState } from 'react';
import Input from '../../component/Input';
import styles from './style';
import Button from '../../component/Button';

var progressvalue;
const Email = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [error, seterror] = useState('');
  const handleValidEmail = val => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (val.length === 0) {
      seterror('email must be enter');
      progressvalue = 0.0;
    } else if (reg.test(val) === false) {
      seterror('enter valid email');
      progressvalue = 0.6;
    } else if (reg.test(val) === true) {
      seterror('');
      progressvalue = 1;
    }
  };

  function validNavigate() {
    if (progressvalue == 1) {
      navigation.navigate("Findshop")
    }
    else {
      alert("please enter Email")
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={progressvalue}
          color="blue"
        />
        <Text style={styles.text}>What's your email address?</Text>
        <Input value={email} onChangeText={value => { setEmail(value); handleValidEmail(value) }} />
        {error ? <Text style={styles.errorMsg}>{error}</Text> : null}
      </View>
      <View style={styles.space}>
      </View>
      <View style={styles.footer}>
        <Button text="Continue"
        onPress={() => validNavigate()} />
      </View>
    </View>
  )
}
export default Email;