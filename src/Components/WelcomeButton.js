import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { fontSizes } from "../Constants/Them";
import { OnboardingList } from "../Constants/DummyData";
const WelcomeButton = ({ title, onPress, bgColor, fontColor, index }) => {
  console.log(index);
  return (
    <TouchableOpacity style={styles(bgColor).button} onPress={onPress}>
      {index === OnboardingList.length - 1 ? (
        <Text style={[styles().font, { color: fontColor }]}> Start </Text>
      ) : (
        <Text style={[styles().font, { color: fontColor }]}> {title} </Text>
      )}
    </TouchableOpacity>
  );
};

export default WelcomeButton;

const styles = (bgColor) =>
  StyleSheet.create({
    button: {
      height: 60,
      backgroundColor: bgColor,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 5,
    },
    font: {
      fontSize: fontSizes.standared,
      fontWeight: "400",
    },
  });
