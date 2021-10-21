import React from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import { colors, perfectSize } from "../../../../theme";
import { useFonts } from "expo-font";
import FormButtonGreen from "../myComponents/FormButtonGreen";
import Logo from "../../../../assets/svg/Logo.svg";

const ConfirmationCode = () => {
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
      <Text style={styles.headersTitle}>Confirmation Code</Text>

      <Text style={styles.underHeaderText}>
        We have sent you a confirmation code to
      </Text>
      <View style={styles.rowText}>
        <Text style={styles.underHeaderText}>your </Text>
        <Text style={styles.registerText}>E-Mail. </Text>
        <Text style={styles.underHeaderText}>Please fill it in below.</Text>
      </View>
      <View style={styles.rowInputContainers}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholderTextColor={colors.blackColor}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholderTextColor={colors.blackColor}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholderTextColor={colors.blackColor}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholderTextColor={colors.blackColor}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholderTextColor={colors.blackColor}
            keyboardType="email-address"
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <FormButtonGreen buttonTitle="Next" />
      </View>
    </SafeAreaView>
  );
};

export default ConfirmationCode;

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
    alignSelf: "center",
    marginBottom: "8%",
    fontWeight: "600",
    lineHeight: perfectSize(39),
    fontFamily: "PoppinsSemiBold",
  },
  underHeaderText: {
    color: colors.blackColor,
    alignSelf: "center",
    fontWeight: "400",
    fontSize: perfectSize(14),
    lineHeight: perfectSize(21),
    fontFamily: "PoppinsRegular",
  },
  registerText: {
    color: colors.blackColor,
    alignSelf: "center",
    fontWeight: "600",
    fontSize: perfectSize(14),
    lineHeight: perfectSize(21),
    color: colors.darkGreen,
    fontFamily: "PoppinsRegular",
  },
  rowText: {
    flexDirection: "row",
    alignSelf: "center",
  },
  rowInputContainers: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "8%",
    marginTop: "5%",
  },
  inputContainer: {
    height: perfectSize(40),
    width: perfectSize(50),
    backgroundColor: colors.whiteBackImage,
    alignSelf: "center",
    justifyContent: "center",
    borderColor: colors.darkGreen,
    borderWidth: perfectSize(2),
  },
  textInput: {
    marginLeft: "45%",
    color: colors.blackColor,
    fontSize: perfectSize(15),
    fontFamily: "PoppinsRegular",
    fontWeight: "400",
    width: "100%",
  },

  buttonContainer: {
    position: "absolute",
    width: "100%",
    bottom: perfectSize(48),
  },
});
