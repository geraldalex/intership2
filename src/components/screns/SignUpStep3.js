import React from "react";
import { StyleSheet, Text, View, StatusBar, TextInput } from "react-native";
import { colors, perfectSize } from "../../../theme";
import FormButton from "./myComponents/FormButton";
import OkIcon from "./myComponents/OkIcon";

const SignUpStep3 = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle="light-content" />
      <Text style={styles.headerTitle}>Sign up step 3</Text>
      <View style={[styles.inputContainer, { marginTop: "15%" }]}>
        <TextInput
          style={styles.textInput}
          placeholder="Choose your category:"
          placeholderTextColor={colors.grayColor}
        />
      </View>

      <View style={[styles.inputContainer, { marginTop: "2%" }]}>
        <TextInput
          style={styles.textInput}
          placeholder="You offer"
          placeholderTextColor={colors.grayColor}
        />
      </View>

      <View style={[styles.inputContainer, { marginTop: "2%" }]}>
        <TextInput
          style={styles.textInput}
          placeholder="Are you registered bussines?"
          placeholderTextColor={colors.grayColor}
        />
      </View>

      <View style={[styles.inputContainer, { marginTop: "2%" }]}>
        <TextInput
          style={styles.textInput}
          placeholder="Do you pay tax"
          placeholderTextColor={colors.grayColor}
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
          I agree with termns
        </Text>
        <OkIcon />
      </View>
      <FormButton buttonTitle="SIGN UP" />
    </View>
  );
};

export default SignUpStep3;

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
