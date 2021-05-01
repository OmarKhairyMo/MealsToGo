import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { theme } from "../../Theme/index";
import { ResturantsList } from "../../Constants/DummyData";
import { BackButton } from "../../Components/NavgationHeader";

import MenuCard from "../../Components/MenuCard";
const Menu = ({ navigation, route }) => {
  const ResturantID = route.params.resturants_ID;
  const CurrentResturant = ResturantsList.find((item) => {
    return item.id === ResturantID;
  });
  const menuCatigory = CurrentResturant.menuList.find((item) => {
    return item.name;
  });
  useLayoutEffect(() => {
    navigation.setOptions({
      title: CurrentResturant.title,
      headerTitleAlign: "center",
      headerTitleStyle: {
        color: theme.colors.white,
        fontFamily: theme.fonts.main,
        textTransform: "capitalize",
        letterSpacing: 1,
      },
      headerStyle: {
        height: 110,
        backgroundColor: theme.colors.primary,
      },
      headerLeft: () => {
        return <BackButton />;
      },
    });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.titleCont}>
        <Text style={styles.title}>{menuCatigory.title}</Text>
      </View>
      <FlatList
        data={CurrentResturant.menuList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <MenuCard
              item={item}
              onPress={() => {
                navigation.navigate("Detailes", {
                  itemId: item.id,
                  myList: CurrentResturant.menuList,
                });
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 10 },
  titleCont: {
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: theme.fontSizes.title,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.dark,
  },
});
