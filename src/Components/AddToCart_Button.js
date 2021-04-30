import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { theme } from "../Theme";

const AddButton = ({ size = 40, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles(size).button, style]} onPress={onPress}>
      <Text style={styles().title}>Add To Cart</Text>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = (size) =>
  StyleSheet.create({
    button: {
      height: size / 2.5,
      width: size,
      borderRadius: size / 2,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.primary,
    },
    title: {
      fontSize: theme.fontSizes.button,
      fontWeight: theme.fontWeight.medium,
      color: theme.colors.white,
    },
  });
