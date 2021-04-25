import React from "react";
import { StyleSheet } from "react-native";
import { Pagination } from "react-native-snap-carousel";
import { colors } from "../../Constants/Them";
const Paggination = ({ data, activeIndex }) => {
  return (
    <Pagination
      dotsLength={data.length}
      activeDotIndex={activeIndex}
      containerStyle={{
        backgroundColor: "transparent",
        position: "absolute",
        bottom: 160,
        left: 125,
      }}
      dotStyle={{
        width: 20,
        height: 5,
        borderRadius: 5,
        backgroundColor: colors.primary,
      }}
      inactiveDotStyle={{
        width: 10,
        height: 10,
        borderRadius: 5,
      }}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
    />
  );
};

export default Paggination;

const styles = StyleSheet.create({});
