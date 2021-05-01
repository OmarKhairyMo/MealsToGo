import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  FlatList,
} from "react-native";
import { theme } from "../../Theme/index";
import { ProfileData } from "../../Constants/DummyData";
import { AntDesign } from "@expo/vector-icons";
import ListItems from "../../Components/ListItems";
const Profile = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.header}
        imageStyle={styles.bgImg}
        source={{
          uri:
            "https://images.pexels.com/photos/7125298/pexels-photo-7125298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        }}
      >
        <View style={styles.imgContaier}>
          <Image
            style={styles.imgStyle}
            source={{
              uri:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            }}
          />
        </View>
      </ImageBackground>
      <View style={styles.titleCont}>
        <Text style={styles.title}>Omar Khairy</Text>
      </View>
      <View style={styles.listCont}>
        <FlatList
          data={ProfileData}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return <ListItems item={item} />;
          }}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    height: Dimensions.get("window").height / 3.2,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: theme.colors.primary,
  },
  bgImg: {
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    opacity: 0.16,
  },
  imgContaier: {
    width: 160,
    height: 160,
    position: "absolute",
    left: 110,
    top: 170,
  },
  imgStyle: { width: "100%", height: "100%", borderRadius: 1000 },
  titleCont: {
    height: "10%",
    justifyContent: "flex-end",
    alignItems: "center",
    marginVertical: 40,
  },
  title: {
    fontSize: theme.fontSizes.title,
    fontWeight: theme.fontWeight.bold,
    fontFamily: theme.fonts.main,
    position: "absolute",
    top: 20,
  },
});
