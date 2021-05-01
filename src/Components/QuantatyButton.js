import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const QuantatyButton = ({ color, sign, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles(color).button, style]} onPress={onPress}>
      {sign}
    </TouchableOpacity>
  );
};

export default QuantatyButton;

const styles = (color) =>
  StyleSheet.create({
    button: {
      width: 30,
      height: 30,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      backgroundColor: color,
      shadowOpacity: 0.1,
    },
  });
