import { View, Text,Image,ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import  Header  from '../../component/Header'
import IconInput from '../../component/IconInput'
import RoundImage from '../../component/RoundImage'
import Images from '../../assers/images';
import CardList from '../../component/CardlList';
import Button from '../../component/Button';
import data from './data';
import { useState } from 'react'

const { profile1 } = Images;
const Notification = ()=> {
 
  function print(obj) {
  var today = new Date(obj);
   var month = today.toLocaleString('default', { month: 'short' });
   var datess = new Date(obj).getDate();
  var dateMonth =  datess + " "+ month
  return dateMonth ;
  }

  return (
    <View style={styles.container}>
        <ScrollView>
            <View style={styles.heder}>
            <IconInput placeholder="Search email" inputStyle={styles.inputStyle}/>
            <RoundImage imagespath={profile1}/>
            </View>
    
        <View style={styles.subHeder}>
        <Header title="Inbox"/>
        <Button text="Write" buttonStyle={styles.buttonStyle}/>
        </View>
        
      <Text style={styles.text}>Unread - 2</Text>

    <View>
        {data[0].data1.map((item) =>
        <CardList source = {item.img}
        titleSub = {item.titleSub}
        title     = {item.title}
        subTitle  = {item.subTitle}
         date = {print(item.date)}
    />
    )}
    </View>

     <View  style={styles.hr}></View>
       <Text style={styles.text}>Others</Text>

{data[0].data2.map((item) =>
        <CardList source = {item.img}
        titleSub = {item.titleSub}
        title     = {item.title}
        subTitle  = {item.subTitle}
        date = {print(item.date)}
    />
    )}


</ScrollView>
    </View>
  )
}
export default Notification;