import React from "react";
import { StyleSheet, Text, View, StatusBar, TextInput } from "react-native";
import { colors, perfectSize } from "../../../theme";
import ArrowIcon from "./myComponents/ArrowIcon";
import FormButton from "./myComponents/FormButton";
import OkIcon from "./myComponents/OkIcon";

const Login = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle="light-content" />
      <Text style={styles.headerTitle}>Login</Text>
      <View
        style={[
          styles.inputContainer,
          { marginTop: "15%" },
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
        <OkIcon />
      </View>

      <View style={[styles.inputContainer, { marginTop: "2%" }]}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor={colors.grayColor}
          secureTextEntry={true}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "flex-end",
          marginRight: "5%",
          marginTop: "5%",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: colors.whiteColor,
            fontSize: perfectSize(14),
            marginRight: "2%",
          }}
        >
          Forgot your password?
        </Text>
        <ArrowIcon />
      </View>
      <FormButton buttonTitle="LOGIN" />
      <FormButton buttonTitle="SIGN UP" />
    </View>
  );
};

export default Login;

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
  },

  inputContainer: {
    height: perfectSize(64),
    width: "90%",
    backgroundColor: colors.dark,
    alignSelf: "center",
    justifyContent: "center",
  },
  textInput: {
    paddingLeft: perfectSize(20),
    color: colors.whiteColor,
    fontSize: perfectSize(14),
    width:'80%'
  },
});
