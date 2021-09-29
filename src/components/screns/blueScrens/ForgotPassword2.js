import React from "react";
import { StyleSheet, Text, View, StatusBar, TextInput } from "react-native";
import { colors, perfectSize } from "../../../../theme";
import { useFonts } from "expo-font";
import FormButtonBlue from "../myComponents/FormButtonBlue";

const ForgotPassword2 = () => {
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
        Forgot password
      </Text>
      <Text
        style={[
          styles.headersTitle,
          {
            fontWeight: "500",
            fontSize: perfectSize(21),
            lineHeight: perfectSize(31),
            marginBottom: "8%",
            fontFamily: "PoppinsMedium",
          },
        ]}
      >
        Lorem Ipsum is simply{" "}
      </Text>
      <Text
        style={[
          styles.headersTitle,
          {
            fontWeight: "400",
            fontSize: perfectSize(14),
            lineHeight: perfectSize(21),
            fontFamily: "PoppinsRegular",
          },
        ]}
      >
        You may not have an account yet
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={[
            styles.headersTitle,
            {
              fontWeight: "400",
              fontSize: perfectSize(14),
              lineHeight: perfectSize(21),
              fontFamily: "PoppinsRegular",
            },
          ]}
        >
          Make it
        </Text>
        <Text
          style={[
            styles.headersTitle,
            {
              fontWeight: "400",
              fontSize: perfectSize(14),
              lineHeight: perfectSize(21),
              marginLeft: "2%",
              color: colors.blueColor,
              fontFamily: "PoppinsRegular",
            },
          ]}
        >
          Register here !
        </Text>
      </View>
      <View
        style={[
          styles.inputContainer,
          { marginTop: "10%", marginBottom: "26%" },
        ]}
      >
        <TextInput
          style={styles.textInput}
          placeholder="Enter Email"
          placeholderTextColor={colors.blueColor}
          keyboardType="email-address"
        />
      </View>

      <FormButtonBlue buttonTitle="SEND" />
    </View>
  );
};

export default ForgotPassword2;

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
    backgroundColor: colors.lightBlueColor,
    alignSelf: "center",
    justifyContent: "center",
  },
  textInput: {
    paddingLeft: perfectSize(20),
    color: colors.blueColor,
    fontSize: perfectSize(15),
    fontFamily: "PoppinsRegular",
    fontWeight: "400",
    width:'80%'
  },
});
