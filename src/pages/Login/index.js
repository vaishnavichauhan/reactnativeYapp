import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Button from '../../component/Button';
import Input from '../../component/Input';
import styles from './style';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, seterror] = useState('');
  const [errorp, seterrorp] = useState('');
  const [valid, setvalid] = useState(0);
  const [validpass, setvalidpass] = useState(0);

  const handleValidEmail = val => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (val.length === 0) {
      seterror('email must be enter');
      setvalid(0);
    } else if (reg.test(val) === false) {
      seterror('enter valid email');
      setvalid(0);
    } else if (reg.test(val) === true) {
      seterror('');
      setvalid(1);
    }
  };

  const handleValidPass = val => {
    let regPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (val.length === 0) {
      seterrorp('Password must be enter');
      setvalidpass(0);
    } else if (regPass.test(val) === false) {
      seterrorp('password must be(min 8,atleast one special char & number)');
      setvalidpass(0);
    } else if (regPass.test(val) === true) {
      seterrorp('');
      setvalidpass(1);
    }
  };

  function validNavigate() {
    if (valid == 1 && validpass == 1) {
      navigation.navigate("Authentication")
    }
    else {
      alert("please enter Email and Password")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Input placeholder="Email" inputStyle={styles.inputStyle} value={email} onChangeText={value => { setEmail(value); handleValidEmail(value) }} />
        {error ? <Text style={styles.errorMsg}>{error}</Text> : null}
        <Input placeholder="Password" inputStyle={styles.inputStyle} value={pass} onChangeText={value => { setPass(value); handleValidPass(value) }} />
        {errorp ? <Text style={styles.errorMsg}>{errorp}</Text> : null}
        <Text style={styles.headerText}>Forgot password?</Text>
      </View>
      <View style={styles.space}></View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>By continuting you agree to our <Text style={styles.footerColor}>Terms of Service</Text> and <Text style={styles.footerColor}>Privacy Policy.</Text></Text>
        <Button text="Log in" onPress={() => validNavigate()} />
      </View>
    </View>
  )
}
export default Login;