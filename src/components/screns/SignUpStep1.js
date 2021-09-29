import React from "react";
import { StyleSheet, Text, View, StatusBar, TextInput } from "react-native";
import { colors, perfectSize } from "../../../theme";
import ArrowIcon from "./myComponents/ArrowIcon";
import FormButton from "./myComponents/FormButton";
import OkIcon from "./myComponents/OkIcon";

const SignUpStep1 = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle="light-content" />
      <Text style={styles.headerTitle}>Sign up step 1</Text>
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
          placeholder="Name"
          placeholderTextColor={colors.grayColor}
        />
        <OkIcon />
      </View>

      <View style={[styles.inputContainer, { marginTop: "2%" }]}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor={colors.grayColor}
          keyboardType="email-address"
        />
      </View>

      <View style={[styles.inputContainer, { marginTop: "2%" }]}>
        <TextInput
          style={styles.textInput}
          placeholder="Phone Number"
          placeholderTextColor={colors.grayColor}
          keyboardType="phone-pad"
        />
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
          Already have an account?
        </Text>
        <ArrowIcon />
      </View>
      <FormButton buttonTitle="SIGN UP" />
      <FormButton buttonTitle="LOGIN" />
    </View>
  );
};

export default SignUpStep1;

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
