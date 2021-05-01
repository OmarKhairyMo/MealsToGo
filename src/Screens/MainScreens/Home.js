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
    <View style={styles.container}>
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
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { backgroundColor: "white", flex: 1 },
  test: { textTransform: "capitalize", letterSpacing: 1 },
});
