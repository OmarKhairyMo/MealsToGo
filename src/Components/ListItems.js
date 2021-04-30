import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { theme } from "../Theme/index";
import { AntDesign } from "@expo/vector-icons";
const ListItems = ({ item }) => {
  return (
    <View style={styles.list}>
      <Text style={styles.listTitle}>{item.name}</Text>
      <AntDesign name="right" size={24} color="black" />
    </View>
  );
};

export default ListItems;

const styles = StyleSheet.create({
  listCont: { flex: 1, paddingHorizontal: 10 },
  list: {
    flexDirection: "row",
    opacity: 0.6,
    height: Dimensions.get("window").height / 10,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.colors.secondary,
    paddingHorizontal: 10,
    marginBottom: 5,
    borderRadius: 10,
  },
  listTitle: { fontFamily: theme.fonts.main, fontSize: theme.fontSizes.body },
});
