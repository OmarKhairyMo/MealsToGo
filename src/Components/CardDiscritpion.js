import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { theme } from "../Theme/index";
const CardDiscritpion = ({ name }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 5,
      }}
    >
      <Entypo name="dot-single" size={15} color="white" />
      <Text style={styles.address}>{name}</Text>
    </View>
  );
};

export default CardDiscritpion;

const styles = StyleSheet.create({
  address: {
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeight.medium,
    fontSize: theme.fontSizes.caption,
    color: theme.colors.white,
  },
});
