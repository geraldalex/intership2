import React from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import { colors, perfectSize } from "../../../../theme";
import { useFonts } from "expo-font";
import FormButtonGreen from "../myComponents/FormButtonGreen";
import Logo from "../../../../assets/svg/Logo.svg"
import { ScrollView } from "react-native-gesture-handler";

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
      <Text style={styles.headersTitle}>Sign in up - Step 3</Text>

      <Text style={styles.underHeaderText}>If you already have an account register</Text>
<View style={styles.rowText}>
      <Text style={styles.underHeaderText}>You can</Text>
      <Text style={styles.registerText}>Login Here!</Text>
      </View>
<ScrollView style={styles.scrollStyle}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Email or Phone Number"
          placeholderTextColor={colors.blackColor}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Choose your category: "
          placeholderTextColor={colors.blackColor}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="You offer:"
          placeholderTextColor={colors.blackColor}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Do you pay tax?"
          placeholderTextColor={colors.blackColor}
          keyboardType="email-address"
        />
      </View>
      </ScrollView>

      
      <View style={styles.buttonContainer}>
        <View style={styles.underTextContainer}>
          <Text style={styles.underButtonText}>By clicking ”Register” you agree to the terms of use</Text>
          <Text style={styles.underButtonTextGren}> terms of use</Text>
        </View>
        <FormButtonGreen buttonTitle="Register" />
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
    marginLeft: "3%",
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
    borderColor: colors.darkGreen,
    borderBottomWidth: perfectSize(2),
    marginTop: "3%",
  },
  textInput: {
    paddingLeft: perfectSize(10),
    color: colors.blackColor,
    fontSize: perfectSize(15),
    fontFamily: "PoppinsRegular",
    fontWeight: "400",
    width: "80%",
  },
  rowText: {
    flexDirection: 'row'
  },
  scrollStyle: {
    marginTop:'10%'
  },
  underTextContainer: {
    flexDirection:'row', alignSelf:'center', bottom:'2%'
  },
  underButtonText: {
    color: colors.blackColor,
    
    fontWeight: "400",
    fontSize: perfectSize(12),
    lineHeight: perfectSize(18),
    fontFamily: "PoppinsRegular",
  },
  underButtonTextGren: {
    color: colors.darkGreen,
    
    fontWeight: "400",
    fontSize: perfectSize(12),
    lineHeight: perfectSize(18),
    fontFamily: "PoppinsRegular",
  },
 
  buttonContainer: {
    position: "absolute",
    width: "100%",
    bottom: perfectSize(48),
    
  },
});

