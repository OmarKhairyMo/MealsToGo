import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import Carousel from "react-native-snap-carousel";
import { colors } from "../../Theme/colors ";
import { fontSizes } from "../../Theme/font";
const AppCarousel = ({ OnboardingList, setindex, test }) => {
  return (
    <Carousel
      scrollEnabled={false}
      data={OnboardingList}
      ref={test}
      keyExtractor={(item) => item.title.toString()}
      onSnapToItem={(index) => setindex(index)}
      renderItem={({ item }) => {
        return (
          <View style={styles.carluselCont}>
            <View style={styles.imgContaniner}>
              <Image style={styles.img} source={{ uri: item.img }} />
            </View>
            <View style={styles.textCont}>
              <Text style={styles.textStyle}>{item.title}</Text>
            </View>
          </View>
        );
      }}
      sliderWidth={Dimensions.get("screen").width}
      itemWidth={Dimensions.get("screen").width}
    />
  );
};

export default AppCarousel;

const styles = StyleSheet.create({
  carluselCont: { height: "80%" },
  imgContaniner: {
    height: "80%",
    borderRadius: 15,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
  textCont: { width: "80%", alignSelf: "center", marginTop: 40 },
  textStyle: {
    fontSize: fontSizes.standared,
    fontWeight: "bold",
    color: colors.dark,
    textAlign: "center",
  },
});
