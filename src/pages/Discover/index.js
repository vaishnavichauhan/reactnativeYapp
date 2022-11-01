import { View, Text, Image } from 'react-native'
import React from 'react'
import Button from '../../component/Button';
import Images from '../../assers/images';
import styles from './style';

const { discoverIcon } = Images
const Discover = () => {
    return (
        <View style={styles.containerFuild}>
            <View style={styles.container}>
                <View style={styles.main}>
                    <Image source={discoverIcon} />
                    <Text style={styles.title}>No saved items</Text>
                    <Text style={styles.text}>Tap the heart icon near any product and {"\n"}we'll save it here for you.</Text>
                    <Button text="Discover" buttonStyle={styles.buttonStyle} />
                </View>
            </View>
        </View>
    )
}
export default Discover;