import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

const Screen = ({ children, style }) => {
  return <View style={[styles.screen, style]}>{children}</View>;
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight : 0,
  },
});
