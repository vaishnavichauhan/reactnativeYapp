import React, { useState } from 'react';
import { Text, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from "../../component/Button";
import Header from "../../component/Header";
import Input from "../../component/Input";
import styles from "./style";

const WelcomeBack = ({ navigation }) => {
  const [no, setno] = useState('');
  const [error, seterror] = useState('');
  const [valid, setvalid] = useState(0);

  const handleValidNo = val => {
    let reg = /^\d{10}$/;
    if (val.length === 0) {
      seterror('Phone Number must be enter');
      setvalid(0);
    } else if (reg.test(val) === false) {
      seterror('enter valid Phone Number');
      setvalid(0);
    } else if (reg.test(val) === true) {
      seterror('');
      setvalid(1);
    }
  };

  function validnavigate() {
    if (valid) {
      navigation.navigate("Login")
    }
    else {
      alert("please enter Phone number")
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Header title="Welcome back." />
        <Text style={styles.hederText}>Log in to your account</Text>
        <View style={styles.fullinput}>
          <View style={styles.icon} ><Text style={styles.icontext}><Icon name="flag" size={25} color="red" />+62 <Icon name="chevron-down" size={20} color="black" /></Text></View>
          <View style={styles.input}><Input placeholder="Mobile number" keybordtype="numeric" maxLength={10} inputStyle={styles.inputStyle} value={no} onChangeText={value => { setno(value); handleValidNo(value) }} /></View>
        </View>
        {error ? <Text style={styles.errorMsg}>{error}</Text> : null}
        <Text>You will receive an SMS verification that may apply message and data rates.</Text>
      </View>
      <View style={styles.space}></View>
      <View style={styles.footer}>
        <View>
          <Button text="Log in" onPress={() => validnavigate()} />
          <Text style={styles.footerText} >Use email, insted</Text>
        </View>
      </View>

    </View>
  )
}
export default WelcomeBack;