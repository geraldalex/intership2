import React from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import { colors, perfectSize } from "../../../../theme";
import { useFonts } from "expo-font";
import FormButtonGreen from "../myComponents/FormButtonGreen";
import Logo from "../../../../assets/svg/Logo.svg"

const ForgotPasswordGreen1 = () => {
  const [loaded] = useFonts({
    PoppinsMedium: require("../../../../assets/fonts/Poppins-Medium.ttf"),
    PoppinsRegular: require("../../../../assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("../../../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <Text style={styles.headersTitle}>Password Recovery</Text>

      <Text style={styles.underHeaderText}>Don’t have an account?!</Text>

      <Text style={styles.registerText}>Register Here</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Kalebrony25@gmail.com"
          placeholderTextColor={colors.pureBorderColor}
          keyboardType="email-address"
        />
      </View>

      <Text style={styles.underInputText}>
        Looks like you don’t have an account with us.
      </Text>
      <View style={styles.buttonContainer}>
        <FormButtonGreen buttonTitle="SEND" />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordGreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: colors.whiteBackImage,
  },
  logoContainer: {
    marginLeft: "8%",
    marginTop: "10%",
    marginBottom: "5%",
  },
  headersTitle: {
    color: colors.blackColor,
    fontSize: perfectSize(26),
    marginLeft: "8%",
    marginBottom: "8%",
    fontWeight: "600",
    lineHeight: perfectSize(39),
    fontFamily: "PoppinsSemiBold",
  },
  underHeaderText: {
    color: colors.blackColor,
    marginLeft: "8%",
    fontWeight: "400",
    fontSize: perfectSize(14),
    lineHeight: perfectSize(21),
    fontFamily: "PoppinsRegular",
  },
  registerText: {
    color: colors.blackColor,
    marginLeft: "8%",
    fontWeight: "600",
    fontSize: perfectSize(14),
    lineHeight: perfectSize(21),
    color: colors.darkGreen,
    fontFamily: "PoppinsRegular",
  },

  inputContainer: {
    height: perfectSize(64),
    width: "84%",
    backgroundColor: colors.whiteBackImage,
    alignSelf: "center",
    justifyContent: "center",
    borderColor: colors.pureBorderColor,
    borderBottomWidth: perfectSize(2),
    marginTop: "15%",
  },
  textInput: {
    paddingLeft: perfectSize(10),
    color: colors.blackColor,
    fontSize: perfectSize(15),
    fontFamily: "PoppinsRegular",
    fontWeight: "400",
    width: "80%",
  },
  underInputText: {
    color: colors.lightPureColor,
    fontSize: perfectSize(12),
    marginLeft: "10%",
    marginBottom: "8%",
    fontFamily: "PoppinsRegular",
    marginTop: "1%",
  },
  buttonContainer: {
    position: "absolute",
    width: "100%",
    bottom: perfectSize(48),
  },
});

