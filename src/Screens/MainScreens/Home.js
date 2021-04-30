import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Screen from "../../Components/Screen";
import { ResturantsList } from "../../Constants/DummyData";
import { useFonts } from "expo-font";

import Card from "../../Components/Card";
const Home = ({ navigation }) => {
  const [loaded] = useFonts({
    Merriweather: require("../../../assets/Fonts/Merriweather-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <Screen style={styles.container}>
      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <FlatList
          data={ResturantsList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <Card
                item={item}
                onPress={() =>
                  navigation.navigate("Menu", { resturants_ID: item.id })
                }
              />
            );
          }}
        />
      </View>
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { backgroundColor: "white" },
  test: { textTransform: "capitalize", letterSpacing: 1 },
});
