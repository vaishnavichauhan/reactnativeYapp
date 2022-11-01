import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import styles from './style';
import Header from '../../component/Header';
import Input from '../../component/Input';
import data from './data';
import Icon from 'react-native-vector-icons/FontAwesome';

 const Findshop = ({navigation})=>{
   var [texts,setTexts]= useState("");
   const [press, setpress]=useState(false);
    
   var ans = data.filter(function(i){
    return i.title.toUpperCase().includes(texts.toUpperCase())
  })
  var mynewdata; 
  function check(){
  if(texts.length < 1){
      mynewdata = data;
  }else{
     mynewdata = ans;
  }
  }
  check();

 function  validNavigate(){
  if(ans.length==1){
  navigation.navigate("Items")
  }
};


 
  return (
    <View style={styles.container}>

      <Header title="Find nearby shop"/>
      <Text style={styles.text}>Enter your location to find them</Text>
     
 
      <Input onChangeText={setTexts}
      value={texts}
      onPressIn={()=>setpress(true)}
      inputStyle={{ borderColor: press ? "#6b4eff" : "#e3e4e5"}}
      />

      <View>
        {
        mynewdata.map((item) =>
        <TouchableOpacity onPress={() => validNavigate()}>       
            <View style={styles.boxstyle}>
            <Icon name="map" size={20} style={styles.icon}  />
            <View>
            <Text style={styles.titlestyle} >{item.title} </Text>
            <Text>{item.subtitle}</Text>
            </View>
          
             </View> 
             </TouchableOpacity>
        )}
      </View>


    </View>
  )
}
export default Findshop;