import React from "react";
import { StyleSheet, Text, View, StatusBar, TextInput } from "react-native";
import { colors, perfectSize } from "../../../../theme";
import { useFonts } from "expo-font";
import TabBar from "../myComponents/TabBar";
import Accordian from "../myComponents/Accordian";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import LogoIcon from "../myComponents/LogoIcon";

const SettingsFQ2 = () => {
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
        F&Q
      </Text>

      <Text
        style={{
          color: colors.blackColor,
          fontWeight: "500",
          fontSize: perfectSize(21),
          lineHeight: perfectSize(31),
          fontFamily: "PoppinsMedium",
          marginLeft: "8%",
        }}
      >
        Frequently Asked Questions
      </Text>
      <ScrollView style={{ marginTop: "6%" }}>
        <Accordian title="Notification" />
        <Accordian title="Notification" />
        <Accordian title="Notification" />
        <Accordian title="Notification" />
        <Accordian title="Notification" reverse={true} />
      </ScrollView>

      <TabBar />
    </View>
  );
};

export default SettingsFQ2;

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
  inputContainer: {
    height: perfectSize(64),
    width: "84%",
    backgroundColor: colors.whiteBackImage,
    alignSelf: "center",
    justifyContent: "center",
    borderBottomWidth: perfectSize(2),
    borderColor: colors.darkGreen,
  },
  textInput: {
    paddingLeft: perfectSize(20),
    color: colors.blackColor,
    fontSize: perfectSize(15),
    fontFamily: "PoppinsRegular",
    fontWeight: "400",
    width: "80%",
  },
});
