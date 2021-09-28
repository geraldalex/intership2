import React from "react";
import { StyleSheet, Text, View, StatusBar, TextInput } from "react-native";
import { colors, perfectSize } from "../../../theme";
import ArrowIcon from "./myComponents/ArrowIcon";
import ErrorIcon from "./myComponents/ErrorIcon";
import FormButton from "./myComponents/FormButton";
import OkIcon from "./myComponents/OkIcon";

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle="light-content" />
      <Text style={styles.headerTitle}>Forgot password</Text>
      <Text
        style={{
          color: colors.whiteColor,
          fontSize: perfectSize(14),
          marginRight: "5%",
          marginLeft: "5%",
        }}
      >
        Please, enter your email address. You will receive a link to create a
        new password via email.
      </Text>
      <View
        style={[
          styles.inputContainer,
          { marginTop: "5%" },
          { flexDirection: "row" },
          { justifyContent: "space-between" },
          { alignItems: "center" },
        ]}
      >
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor={colors.grayColor}
          keyboardType="email-address"
        />
        <ErrorIcon />
      </View>

      <Text
        style={{
          color: "#ff0000",
          fontSize: perfectSize(14),
          alignSelf: "center",
          marginBottom: "8%",
        }}
      >
        Not a valid email address. Should be your@email.com
      </Text>

      <FormButton buttonTitle="SEND" />
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: colors.darkBackImage,
  },
  headerTitle: {
    color: colors.whiteColor,
    fontSize: perfectSize(34),
    marginLeft: "5%",
    marginTop: perfectSize(106),
    fontWeight: "700",
    marginBottom: "15%",
  },

  inputContainer: {
    height: perfectSize(64),
    width: "90%",
    backgroundColor: colors.dark,
    alignSelf: "center",
    justifyContent: "center",
    borderColor: "#ff0000",
    borderWidth: perfectSize(1),
  },
  textInput: {
    paddingLeft: perfectSize(20),
    color: colors.whiteColor,
    fontSize: perfectSize(14),
  },
});
