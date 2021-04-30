import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../Theme/index";
import { ResturantsList } from "../../Constants/DummyData";
import { ProfileLeft } from "../../Components/NavgationHeader";
const Menu = ({ navigation, route }) => {
  const ResturantID = route.params.resturants_ID;
  const CurrentResturant = ResturantsList.find((item) => {
    return item.id === ResturantID;
  });
  useLayoutEffect(() => {
    navigation.setOptions({
      title: CurrentResturant.title,
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
        return <ProfileLeft onPress={() => navigation.pop()} />;
      },
    });
  }, []);
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({});
