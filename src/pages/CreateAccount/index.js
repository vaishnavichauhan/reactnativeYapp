import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./style";
import Button from "../../component/Button";
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import data from './data'
import Images from '../../assers/images';

const { logo } = Images;
const CreateAccount = ({ navigation }) => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>you<Text style={styles.footerText}>learn</Text></Text>
      </View>
      <View style={styles.space}>
        <Image
          style={styles.tinyLogo}
          source={logo}
        />
      </View>
      <View style={styles.account}>
        <View>
          <Carousel
            layoutCardOffset={9}
            ref={isCarousel}
            data={data}
            renderItem={CarouselCardItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            onSnapToItem={(index) => setIndex(index)}
            useScrollView={true}
          />
          <Pagination
            dotsLength={data.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              backgroundColor: '#6b4eff'
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            tappableDots={true}
          />
        </View>
        <View style={styles.footer}>
          <Button text="Create account"
            buttonStyle={styles.buttonStyle}
            onPress={() => navigation.navigate("WelcomeBack")}
          />
        </View>
        <View style={styles.footer}>
          <Text>Have an account? <Text style={styles.footerText}>Log in</Text></Text>
        </View>
      </View>
    </View>
  )

}
export default CreateAccount;