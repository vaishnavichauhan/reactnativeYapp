import React from "react";
import { Text, View, ImageBackground, TouchableOpacity } from "react-native";
import Button from "../../component/Button";
import Header from "../../component/Header";
import styles from "./style";
import Images from '../../assers/images';

const { yoga } = Images;
const Splash = ({navigation}) => (
    <ImageBackground source={yoga} style={styles.image}>
        <View style={styles.container}>
            <View style={styles.hederText}>
                <Text style={styles.subTitle}>Keepyoga</Text>
                <Header
                    position={styles.title}
                    title={"Practice yoga \n whenever you want."}
                />
            </View>
            <View style={styles.bottomButton}>
                <Button
                    titleStyle={styles.titleStyle}
                    buttonStyle={styles.buttonStyle}
                    text="Get started"
                    // onPress= {() => navigation.navigate("CreateAccount")}
                    onPress= {() => navigation.navigate("CreateAccount")}
                    
                    />
            </View>
        </View>
    </ImageBackground>
)
export default Splash;