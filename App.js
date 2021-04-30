import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainNavigation from "./src/Navigation/MainNavigation";
import Profile from "./src/Screens/MainScreens/Profile";
import OnBoarding from "./src/Screens/OnBordingScreen/OnBoarding";

export default function App() {
  return (
    <View style={styles.container}>
      <MainNavigation />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
