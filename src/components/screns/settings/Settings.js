import React from "react";
import { StyleSheet, Text, View, StatusBar, TextInput,TextBase } from "react-native";
import { colors, perfectSize } from "../../../../theme";
import { useFonts } from "expo-font";
import TabBar from "../myComponents/TabBar";
import ArrowDownIcon from "../myComponents/ArrowDownIcon";
import PhotoIcon from "../myComponents/PhotoIcon";
import FormButtonGreen from "../myComponents/FormButtonGreen";
import Accordian from "../myComponents/Accordian";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import LogoIcon from "../myComponents/LogoIcon";
import FormButtonRed from "../myComponents/FormButtonRed";

const Settings = () => {
  const [loaded] = useFonts({
    PoppinsMedium: require("../../../../assets/fonts/Poppins-Medium.ttf"),
    PoppinsRegular: require("../../../../assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("../../../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle="light-content" />
      <View style={{ marginLeft: "8%", marginTop: "10%", marginBottom: "5%" }}>
        <LogoIcon />
      </View>
     

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginRight: "8%",
          marginLeft: "8%",
        }}
      >
        <Text
          style={{
            color: colors.blackColor,
            fontWeight: "600",
            fontSize: perfectSize(26),
            lineHeight: perfectSize(31),
            fontFamily: "PoppinsSemiBold",
          }}
        >
          Settings
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: perfectSize(17), color: colors.grayColor }}>
            RU
          </Text>
          <ArrowDownIcon />
        </View>
      </View>
      <TouchableOpacity
        style={{
          marginTop: perfectSize(18),
          marginBottom: "5%",
          width: "84%",
          height: perfectSize(92),
          borderWidth: perfectSize(1),
          borderColor: colors.grayColor,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          borderRadius: perfectSize(4),
        }}
      >
        <PhotoIcon />
        <Text
          style={{ fontSize: perfectSize(9), fontFamily: "PoppinsRegular" }}
        >
          Add image
        </Text>
      </TouchableOpacity>
      <FormButtonGreen buttonTitle="My Profile" />
      <ScrollView style={{ marginTop: "6%" }}>
        <Accordian title="My Services" />
        <Accordian title="My Locations " />
        <Accordian title="My Earnings" />
        <Accordian title="Notifications" />
        <Accordian title="Analytics " />
        <Accordian title="F&Q" />
        <Accordian title="Contact Support " />
        <View style={{ height: perfectSize(1),
    borderTopWidth: perfectSize(1),
    borderColor: colors.grayColor,}}/>
    <FormButtonRed buttonTitle='Log Out'/>
    <View style={{marginTop:'20%'}}/>
      </ScrollView>

      <TabBar />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: colors.whiteBackImage,
  },
  headersTitle: {
    color: colors.blackColor,
    fontSize: perfectSize(26),
    marginLeft: "8%",
  },
});
