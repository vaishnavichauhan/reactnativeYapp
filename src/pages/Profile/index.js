import { View, Text } from 'react-native';
import React from 'react';
import Images from '../../assers/images';
import RoundedImages from '../../component/RoundImage';
import Button from '../../component/Button';
import Input from '../../component/Input';
import styles from './style';
import data from './data';
import TextInputs from '../../component/TextInputs';
import Icon from 'react-native-vector-icons/FontAwesome';

const { profile1 } = Images;
const Profile = () => {
    const [text, onChangeText] = React.useState(data.Firstname);
    const [textlast, onChangeTextlast] = React.useState(null);
    const [textloc, onChangeTextloc] = React.useState(data.Location);
    const [textemail, onChangeTextemail] = React.useState(data.Email);
    return (
        <View style={styles.container}>
            <View style={styles.profileImg}>
                <RoundedImages imagespath={profile1} img={styles.img} />
                <Button text="Change" buttonStyle={styles.buttonstyle} titleStyle={styles.titleStyle} />
            </View>

            <View style={styles.profileInput}>
                <TextInputs value={text} onChangeText={onChangeText} userName="First name" />
                <TextInputs value={textlast} onChangeText={onChangeTextlast} placeholder="enter last name" userName="Last name" />
                <TextInputs value={textloc} onChangeText={onChangeTextloc} userName="Location" />
                <Text style={styles.profiletitle}>ACCOUNT INFORMATION</Text>
                <TextInputs value={textemail} onChangeText={onChangeTextemail} userName="Email" />
                <Text style={styles.profiletitle}>INTERNATIONAL PREFERENCES</Text>

                <View style={styles.footer}>
                    <View>
                        <Text style={styles.footerTitle} >Language</Text>
                        <Text>English</Text>
                    </View>
                    <View>
                        <Icon name="angle-right" size={30} color="black" />
                    </View>
                </View>
            </View>
        </View>
    )
}
export default Profile;