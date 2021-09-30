import React from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import { colors, perfectSize } from "../../../../theme";
import { useFonts } from "expo-font";
import TabBar from "../myComponents/TabBar";
import FormButtonGreen from "../myComponents/FormButtonGreen";

const SettingsPaymnets = () => {
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
        Paymnets
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
        Your cards
      </Text>
      <Text
        style={{
          color: colors.blackColor,
          fontWeight: "bold",
          fontSize: perfectSize(16),
          lineHeight: perfectSize(18.75),
          fontFamily: "PoppinsMedium",
          marginLeft: "8%",
          marginTop: "5%",
        }}
      >
        Your payment cards
      </Text>
      <View style={{ alignItems: "center" }}>
        <Image source={require("../../../../assets/Card.png")} />
      </View>

      <FormButtonGreen buttonTitle="Add Cardend" />

      <TabBar />
    </View>
  );
};

export default SettingsPaymnets;

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
