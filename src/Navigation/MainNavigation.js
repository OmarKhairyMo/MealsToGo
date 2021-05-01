import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/MainScreens/Home";
import Detailes from "../Screens/MainScreens/Detailes";
import OnBoarding from "../Screens/OnBordingScreen/OnBoarding";
import {
  LeftButton,
  BackButton,
  ProfileRight,
  RightHeader,
} from "../Components/NavgationHeader";
import Profile from "../Screens/MainScreens/Profile";
import { colors } from "../Theme/colors ";

import { Feather, AntDesign, Ionicons } from "@expo/vector-icons";
import MapScreen from "../Screens/MainScreens/MapScreen";
import Menu from "../Screens/MainScreens/Menu";
import { theme } from "../Theme";
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const MapStack = createStackNavigator();
const FavouritStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitleAlign: "center",
        title: "My Profile",
        headerTintColor: colors.white,
        headerTitleStyle: { letterSpacing: 1, fontSize: 20 },
        headerRight: () => {
          return <ProfileRight />;
        },
      }}
    >
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
};
const MapStackNavigator = () => {
  return (
    <MapStack.Navigator>
      <MapStack.Screen name="Profile" component={MapScreen} />
    </MapStack.Navigator>
  );
};
const FavouritStackNavigator = () => {
  return (
    <FavouritStack.Navigator>
      <FavouritStack.Screen name="Profile" component={Profile} />
    </FavouritStack.Navigator>
  );
};
const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: { height: 110 },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          title: "",
          headerTitleAlign: "center",
          headerLeft: () => {
            return <LeftButton />;
          },
          headerRight: () => {
            return <RightHeader />;
          },
        }}
      />
      <HomeStack.Screen
        name="Menu"
        component={Menu}
        // options={{
        //   headerTitleStyle: { marginBottom: 20 },
        //   headerStyle: {
        //     height: 180,
        //     borderBottomLeftRadius: 30,
        //     borderBottomRightRadius: 30,
        //     backgroundColor: theme.colors.primary,
        //   },
        // }}
      />
      <HomeStack.Screen name="Detailes" component={Detailes} />
    </HomeStack.Navigator>
  );
};
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator tabBarOptions={{ activeTintColor: colors.primary }}>
        {/* <Tabs.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{ headerShown: false }}
        /> */}
        <Tabs.Screen
          name="Home"
          component={HomeStackNavigator}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="home-outline" size={size} color={color} />;
            },
          }}
        />
        <Tabs.Screen
          name="Map"
          component={MapStackNavigator}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="map" size={size} color={color} />;
            },
          }}
        />
        <Tabs.Screen
          name="Favourits"
          component={FavouritStackNavigator}
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              if (focused)
                return <AntDesign name="heart" size={size} color={color} />;
              return <Feather name="heart" size={size} color={color} />;
            },
          }}
        />
        <Tabs.Screen
          name="Profile"
          component={ProfileStackNavigator}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <AntDesign name="user" size={size} color={color} />;
            },
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
