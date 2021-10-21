import React from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import { colors, perfectSize } from "../../../../theme";
import { useFonts } from "expo-font";
import FormButtonGreen from "../myComponents/FormButtonGreen";
import Logo from "../../../../assets/svg/Logo.svg"
import { ScrollView } from "react-native-gesture-handler";
import Invisible from "../../../../assets/svg/invisible1.svg"

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
      <Text style={styles.headersTitle}>New Account Set Up</Text>

      <Text style={styles.underHeaderText}>If you already have an account with us</Text>

     
      <Text style={styles.registerText}>Login Here!</Text>
     
<ScrollView style={styles.scrollStyle}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Create User Name"
          placeholderTextColor={colors.blackColor}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor={colors.blackColor}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Phone Number"
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
        <Invisible />
      </View>
      <View style={styles.rowInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Confirm Password"
          placeholderTextColor={colors.blackColor}
          secureTextEntry={true}
        />
        <Invisible />
      </View>

      </ScrollView>

      
      <View style={styles.buttonContainer}>
       
       
        <FormButtonGreen buttonTitle="Next" />
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
    alignSelf:'center',
    marginBottom: "8%",
    fontWeight: "600",
    lineHeight: perfectSize(39),
    fontFamily: "PoppinsSemiBold",
  },
  underHeaderText: {
    color: colors.blackColor,
    alignSelf:'center',
    fontWeight: "400",
    fontSize: perfectSize(14),
    lineHeight: perfectSize(21),
    fontFamily: "PoppinsRegular",
  },
  registerText: {
    color: colors.blackColor,
    alignSelf:'center',
    fontWeight: "600",
    fontSize: perfectSize(14),
    lineHeight: perfectSize(21),
    color: colors.darkGreen,
    fontFamily: "PoppinsRegular",
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

  scrollStyle: {
    marginTop:'10%'
  },
  
 
  buttonContainer: {
    position: "absolute",
    width: "100%",
    bottom: perfectSize(48),
    
  },
});

