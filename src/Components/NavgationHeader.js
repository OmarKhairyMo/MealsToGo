import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { colors } from "../Theme/colors ";
import { theme } from "../Theme";
export const LeftButton = () => {
  return (
    <TouchableOpacity style={styles.left}>
      <AntDesign name="bars" size={28} color="black" />
    </TouchableOpacity>
  );
};
export const RightHeader = () => {
  return (
    <View style={styles.right}>
      <TextInput
        style={{
          paddingHorizontal: 10,
          fontSize: theme.fontSizes.caption,
          fontFamily: theme.fonts.main,
          flex: 1,
        }}
        placeholder="What are you looking for?"
      />
      <View style={styles.searchCont}>
        <AntDesign name="search1" size={20} color={colors.white} />
      </View>
    </View>
  );
};

export const BackButton = ({ onPress, color = colors.white }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ paddingLeft: 10 }}
      onPress={() => navigation.pop()}
    >
      <AntDesign name="left" size={24} color={color} />
    </TouchableOpacity>
  );
};
export const ProfileRight = () => {
  return (
    <TouchableOpacity style={{ paddingRight: 10 }}>
      <Entypo name="dots-three-horizontal" size={24} color={colors.white} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  left: { paddingLeft: 5 },
  right: {
    width: 280,
    height: 40,
    borderRadius: 20,
    marginRight: 5,
    flexDirection: "row",
    backgroundColor: "#E8E8E8",
  },
  searchCont: {
    width: "35%",
    backgroundColor: colors.primary,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
