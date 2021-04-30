import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { theme } from "../Theme/index";
import AddButton from "../Components/AddToCart_Button";
import QuantatyButton from "../Components/QuantatyButton";
import { AntDesign } from "@expo/vector-icons";
const MenuCard = ({ item }) => {
  return (
    <View style={styles.listCard}>
      <View style={styles.imgCont}>
        <Image style={styles.img} source={{ uri: item.img }} />
      </View>
      <View style={styles.body}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price} EGP</Text>
        <View style={styles.buttonsCont}>
          <QuantatyButton
            color={theme.colors.white}
            sign={
              <AntDesign name="minus" size={14} color={theme.colors.dark} />
            }
          />
          <Text style={{ marginHorizontal: 10 }}>1</Text>
          <QuantatyButton
            color={theme.colors.white}
            sign={<AntDesign name="plus" size={14} color={theme.colors.dark} />}
          />
          <AddButton size={100} style={styles.addButton} />
        </View>
      </View>
    </View>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  listCard: {
    flexDirection: "row",
    height: Dimensions.get("window").height / 4.5,
    backgroundColor: theme.colors.secondary,
    borderRadius: 10,
    marginBottom: 10,
    padding: 5,
  },
  imgCont: { width: "40%", paddingHorizontal: 5, paddingRight: 20 },
  img: { width: "100%", height: "100%", resizeMode: "contain" },
  body: { flex: 1, paddingTop: 10 },
  itemName: {
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    textTransform: "uppercase",
    color: theme.colors.primary,
    fontWeight: theme.fontWeight.bold,
  },
  description: {
    fontSize: theme.fontSizes.caption,
    color: "gray",
    textAlign: "left",
    paddingVertical: 10,
  },
  price: {
    fontSize: theme.fontSizes.caption,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.dark,
  },
  buttonsCont: { flex: 1, alignItems: "center", flexDirection: "row" },
  addButton: { marginLeft: 15 },
});
