import React from "react";
import { StyleSheet, Text, View, StatusBar, TextInput } from "react-native";
import { colors, perfectSize } from "../../../../theme";
import { useFonts } from "expo-font";
import TabBar from "../myComponents/TabBar";
import ArrowDownIcon from "../myComponents/ArrowDownIcon";
import PhotoIcon from "../myComponents/PhotoIcon";
import FormButtonGreen from "../myComponents/FormButtonGreen";
import Accordian from "../myComponents/Accordian";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const Settings2 = () => {
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
      <Text
        style={[
          styles.headersTitle,
          {
            marginTop: "16%",
            fontSize: perfectSize(18),
            fontWeight: "600",
            marginBottom: "7%",
            lineHeight: perfectSize(27),
            fontFamily: "PoppinsSemiBold",
          },
        ]}
      >
        Your Logo
      </Text>
      <Text
        style={[
          styles.headersTitle,
          {
            marginBottom: "2%",
            fontWeight: "600",
            lineHeight: perfectSize(39),
            fontFamily: "PoppinsSemiBold",
          },
        ]}
      >
        Settings
      </Text>

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
            fontWeight: "500",
            fontSize: perfectSize(21),
            lineHeight: perfectSize(31),
            fontFamily: "PoppinsMedium",
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
      <FormButtonGreen buttonTitle="Talent Profile" />
      <View style={{ marginTop: "5%" }}>
        <Accordian title="Notification" />
        <View
          style={{
            height: perfectSize(1),
            borderTopWidth: perfectSize(1),
            borderColor: colors.grayColor,
          }}
        />
      </View>
      <ScrollView style={{ marginTop: "5%" }}>
        <View style={{ marginBottom: "5%" }}>
          <FormButtonGreen buttonTitle="Serveces" />
        </View>
        <View style={{ marginBottom: "5%" }}>
          <FormButtonGreen buttonTitle="Locations" />
        </View>
        <View style={{ marginBottom: "5%" }}>
          <FormButtonGreen buttonTitle="Analytics" />
        </View>
        <View style={{ marginBottom: "5%" }}>
          <FormButtonGreen buttonTitle="F&Q" />
        </View>
        <View style={{ marginBottom: "5%" }}>
          <FormButtonGreen buttonTitle="Paymnets" />
        </View>
        <View style={{ marginBottom: "20%" }}>
          <FormButtonGreen buttonTitle="Contect Support" />
        </View>
      </ScrollView>

      <TabBar />
    </View>
  );
};

export default Settings2;

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
