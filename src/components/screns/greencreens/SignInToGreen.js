import React from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import { colors, perfectSize } from "../../../../theme";
import { useFonts } from "expo-font";
import FormButtonGreen from "../myComponents/FormButtonGreen";
import LogoIcon from "../myComponents/LogoIcon";
import EyeIcon from "../myComponents/EyeIcon";

const SignInToGreen = () => {
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
        <LogoIcon />
      </View>
      <Text style={styles.headersTitle}>Sign In</Text>

     

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Email or Username"
          placeholderTextColor={colors.blackColor}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.rowInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor={colors.blackColor}
          secureTextEntry={true}
        />
        <EyeIcon />
      </View>
      <Text
        style={styles.forgotPaswordText}
      >
        Forgot password ?
      </Text>

      <View style={styles.buttonContainer}>
        <FormButtonGreen buttonTitle="SEND" />
        <Text style={styles.underButtonText}>Don’t have an account?!</Text>
        <Text style={styles.registerText}>Register Here</Text>
      </View>
    </SafeAreaView>
  );
};

export default SignInToGreen;

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
    marginBottom: "8%",
    fontWeight: "600",
    lineHeight: perfectSize(39),
    fontFamily: "PoppinsSemiBold",
    alignSelf:'center'
  },
 

  inputContainer: {
    height: perfectSize(64),
    width: "84%",
    backgroundColor: colors.whiteBackImage,
    alignSelf: "center",
    justifyContent: "center",
    borderColor: colors.darkGreen,
    borderBottomWidth: perfectSize(2),
    marginTop: "15%",
  },
  rowInputContainer: {
    height: perfectSize(64),
    width: "84%",
    backgroundColor: colors.whiteBackImage,
    alignSelf: "center",
    justifyContent: "center",
    borderColor: colors.darkGreen,
    borderBottomWidth: perfectSize(2),
    marginTop: "3%",
    marginBottom: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    paddingLeft: perfectSize(10),
    color: colors.blackColor,
    fontSize: perfectSize(15),
    fontFamily: "PoppinsRegular",
    fontWeight: "400",
    width: "80%",
  },
  forgotPaswordText: {
    marginRight: "8%",
    alignSelf: "flex-end",
    fontSize: perfectSize(13),
    fontWeight: "400",
    fontFamily: "PoppinsRegular",
    color: colors.darkGreen,
  },

  buttonContainer: {
    position: "absolute",
    width: "100%",
    bottom: perfectSize(48),
  },
  underButtonText: {
    color: colors.blackColor,
    fontSize: perfectSize(14),
    marginTop: "5%",
    fontWeight: "400",
    lineHeight: perfectSize(21),
    fontFamily: "PoppinsRegular",
    alignSelf:'center'
  },
  registerText: {
    color: colors.darkGreen,
    fontSize: perfectSize(14),
    marginBottom: "5%",
    fontWeight: "600",
    lineHeight: perfectSize(21),
    fontFamily: "PoppinsRegular",
    alignSelf:'center'
  }
});
