import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { theme } from "../Theme/index";
import { FontAwesome } from "@expo/vector-icons";
import CardDiscritpion from "./CardDiscritpion";
const Card = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground
        imageStyle={styles.img}
        style={styles.listContainer}
        source={{ uri: item.img }}
      >
        <View style={styles.uppperCard}>
          <View style={styles.raitingCont}>
            <FontAwesome name="star" size={10} color={theme.colors.white} />
            <Text style={styles.raitingText}>{item.raiting}</Text>
          </View>
          <Text
            style={[
              styles.status,
              {
                color: item.isOpened ? "lime" : "tomato",
              },
            ]}
          >
            {item.isOpened ? "Opened" : "Closed"}
          </Text>
        </View>
        <View style={styles.lowerCard}>
          <Text style={styles.name}>{item.title}</Text>
          <View style={styles.descitption}>
            <CardDiscritpion name={item.address} />
            <CardDiscritpion name={item.type} />
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  listContainer: {
    height: Dimensions.get("screen").height / 3.8,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: theme.colors.black,
  },
  img: { borderRadius: 10, opacity: 0.78 },
  uppperCard: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingTop: 15,
  },
  raitingCont: {
    width: 80,
    height: 40,
    backgroundColor: theme.colors.primary,

    borderRadius: 70 / 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  raitingText: { fontSize: 13, paddingLeft: 5, color: theme.colors.white },
  lowerCard: {
    flex: 1,
    paddingBottom: 20,
  },
  descitption: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  name: {
    fontSize: theme.fontSizes.title,
    fontWeight: "600",
    fontFamily: theme.fonts.main,
    textTransform: "uppercase",
    letterSpacing: 1,
    color: "#EEECEC",
    alignSelf: "center",
  },
  address: {
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeight.medium,
    fontSize: theme.fontSizes.caption,
    color: theme.colors.white,
  },
  status: {
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeight.medium,
    fontSize: theme.fontSizes.caption,
    color: theme.colors.primary,
  },
});
