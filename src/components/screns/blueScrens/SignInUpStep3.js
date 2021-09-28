import React from "react";
import { StyleSheet, Text, View, StatusBar, TextInput } from "react-native";
import { colors, perfectSize } from "../../../../theme";
import { useFonts } from "expo-font";
import FormButtonBlue from "../myComponents/FormButtonBlue";
import EyeIcon from "../myComponents/EyeIcon";

const SignInUpStep3 = () => {
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
        Sign in up - Step 3
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
        If you don’t have an account register
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
          You can
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
          Login here !
        </Text>
      </View>
      <View
        style={[styles.inputContainer, { marginTop: "5%", marginBottom: "5%" }]}
      >
        <TextInput
          style={styles.textInput}
          placeholder="Choose your category: "
          placeholderTextColor={colors.blueColor}
        />
      </View>

      <View style={[styles.inputContainer, { marginBottom: "5%" }]}>
        <TextInput
          style={styles.textInput}
          placeholder="You offer:"
          placeholderTextColor={colors.blueColor}
        />
      </View>
      <View style={[styles.inputContainer, { marginBottom: "5%" }]}>
        <TextInput
          style={styles.textInput}
          placeholder="Are you registered bussines?"
          placeholderTextColor={colors.blueColor}
        />
      </View>

      <View
        style={[
          styles.inputContainer,
          { marginBottom: "5%", height: perfectSize(90) },
        ]}
      >
        <TextInput
          style={styles.textInput}
          placeholder="Do you pay tax?"
          placeholderTextColor={colors.blueColor}
        />
      </View>
      <Text
        style={{
          marginRight: "8%",
          alignSelf: "flex-end",
          fontSize: perfectSize(12),
          fontWeight: "400",
          fontFamily: "PoppinsRegular",
          color: colors.blueColor,
        }}
      >
        terms of use
      </Text>

      <FormButtonBlue buttonTitle="Register" />
    </View>
  );
};

export default SignInUpStep3;

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
    fontSize: perfectSize(12),
    fontFamily: "PoppinsRegular",
    fontWeight: "400",
    width: "50%",
  },
});
