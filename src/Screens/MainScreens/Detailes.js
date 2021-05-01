import React, { useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { BackButton } from "../../Components/NavgationHeader";
import { theme } from "../../Theme";
import { AntDesign } from "@expo/vector-icons";
import QuantatyButton from "../../Components/QuantatyButton";
import AddToCart_Button from "../../Components/AddToCart_Button";
const Detailes = ({ navigation, route }) => {
  const { itemId, myList } = route.params;
  const CurrentObj = myList.find((item) => {
    return item.id === itemId;
  });
  const raitingArray = Array.from(
    new Array(Math.floor(CurrentObj.Item_raiting))
  );
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "center",
      title: CurrentObj.name,
      headerTransparent: true,
      headerTitleStyle: {
        color: theme.colors.dark,
        fontFamily: theme.fonts.main,
        textTransform: "capitalize",
        letterSpacing: 1,
      },
      headerLeft: () => {
        return <BackButton color={theme.colors.dark} />;
      },
    });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.img} source={{ uri: CurrentObj.img }} />
      </View>
      <View style={styles.body}>
        <Text style={styles.description}>{CurrentObj.description}</Text>
        <View style={styles.raitingCont}>
          <Text style={[styles.raitingNumber, { paddingLeft: 0 }]}>
            250 g | 400 cal{" "}
          </Text>
          <View style={{ flexDirection: "row" }}>
            {raitingArray.map((item, index) => {
              return (
                <AntDesign
                  key={index.toString()}
                  name="star"
                  size={10}
                  color={theme.colors.primary}
                  style={{ alignSelf: "center", paddingHorizontal: 2 }}
                />
              );
            })}
            <Text style={styles.raitingNumber}>
              {CurrentObj.Item_raiting} Stars
            </Text>
          </View>
        </View>
        <View style={styles.priceCont}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <QuantatyButton
              sign={
                <AntDesign name="plus" size={14} color={theme.colors.dark} />
              }
              color={theme.colors.secondary}
              style={styles.QuantatyButton}
            />
            <Text style={styles.quantatyNumber}>1</Text>
            <QuantatyButton
              sign={
                <AntDesign name="minus" size={14} color={theme.colors.dark} />
              }
              color={theme.colors.secondary}
              style={styles.QuantatyButton}
            />
          </View>
          <Text style={styles.price}>{CurrentObj.price} EGP</Text>
        </View>
        <View style={styles.buttonCont}>
          <AddToCart_Button size={120} style={styles.button} />
        </View>
      </View>
    </View>
  );
};

export default Detailes;

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flex: 0.5,
    backgroundColor: theme.colors.secondary,
    borderRadius: 20,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  img: { width: 300, height: 300, resizeMode: "contain", top: 50 },
  body: { flex: 0.6, padding: 20 },
  description: {
    fontSize: theme.fontSizes.body,
    color: "gray",
  },
  raitingCont: {
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "space-between",
  },
  raitingNumber: {
    fontSize: theme.fontSizes.button,
    color: theme.colors.primary,
    fontWeight: theme.fontWeight.medium,
    paddingLeft: 5,
  },
  priceCont: {
    flexDirection: "row",

    paddingVertical: 10,
    justifyContent: "space-between",
  },
  QuantatyButton: { width: 50, height: 50, borderRadius: 10 },
  quantatyNumber: {
    marginHorizontal: 10,
    fontSize: theme.fontSizes.button,
    fontWeight: theme.fontWeight.medium,
  },
  price: {
    fontSize: theme.fontSizes.button,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.dark,
    alignSelf: "center",
  },
  buttonCont: {
    flex: 1,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  button: { width: "100%", height: "35%", shadowOpacity: 0.2 },
});
