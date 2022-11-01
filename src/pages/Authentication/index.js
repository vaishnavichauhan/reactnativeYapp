import React from 'react'
import { View, Text } from 'react-native'
import Button from '../../component/Button';
import RoundInput from '../../component/RoundInput';
import styles from './style';


const Authentication = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");
  const [text2, onChangeText2] = React.useState("");
  const [text3, onChangeText3] = React.useState("");
  const [text4, onChangeText4] = React.useState("");


  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headertitle} >Enter authentication code</Text>
        <Text style={styles.hedertext}>Enter the 4-digit we have sent via the phone number <Text>+62 813-8172-5977</Text></Text>
        <View style={styles.round}>
          <RoundInput onChangeText={onChangeText}
            value={text} />
          <RoundInput onChangeText={onChangeText2}
            value={text2} />
          <RoundInput onChangeText={onChangeText3}
            value={text3} />
          <RoundInput onChangeText={onChangeText4}
            value={text4} />

        </View>
      </View>
      <View style={styles.space}>

      </View>
      <View style={styles.footer}>
        <Button text="Continue"
          isDisable={text && text2 && text3 && text4 ? false : true}
          buttonStyle={text && text2 && text3 && text4 ? styles.buttonStyle1 : styles.buttonStyle2}
          titleStyle={text && text2 && text3 && text4 ? styles.titleStyle1 : styles.titleStyle2}
          onPress={() => navigation.navigate("Practice")}
        />
        <Text style={styles.footerText}>Resend code</Text>
      </View>

    </View>
  )
}
export default Authentication;