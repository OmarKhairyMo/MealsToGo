import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const QuantatyButton = ({ color, sign, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      {sign}
    </TouchableOpacity>
  );
};

export default QuantatyButton;

const styles = StyleSheet.create({
  button: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "red",
  },
});
