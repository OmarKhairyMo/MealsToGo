import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Screen from "../../Components/Screen";
import WelcomeButton from "../../Components/WelcomeButton";
import { OnboardingList } from "../../Constants/DummyData";
import { colors } from "../../Constants/Them";
import AppCarousel from "./AppCarousel";
import Paggination from "./Paggination";
const OnBoarding = () => {
  const [index, setindex] = useState(0);
  const test = useRef(null);
  return (
    <Screen style={styles.container}>
      <AppCarousel
        setindex={setindex}
        OnboardingList={OnboardingList}
        test={test}
      />
      <View style={{ height: "20%", paddingHorizontal: 10 }}>
        <Paggination data={OnboardingList} activeIndex={index} />
        <WelcomeButton
          bgColor={colors.primary}
          title="Next"
          fontColor={colors.white}
          index={index}
          onPress={() => {
            test.current.snapToNext();
          }}
        />
        {index !== OnboardingList.length - 1 && (
          <WelcomeButton
            bgColor={"transparent"}
            title={"Skip"}
            fontColor={colors.primary}
          />
        )}
      </View>
    </Screen>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
});
