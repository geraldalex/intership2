import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { colors, perfectSize } from "../../../theme";
import ArrowIcon from "./myComponents/ArrowIcon";
import FormButton from "./myComponents/FormButton";
import OkIcon from "./myComponents/OkIcon";

const SignUpStep2 = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle="light-content" />
      <Text style={styles.headerTitle}>Sign up step 2</Text>
      <Text
        style={[styles.headerTitle, { marginTop: "5%" }, { marginLeft: "8%" }]}
      >
        Write phone or email confirm code
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
        <TouchableOpacity style={styles.miniButtonContainer}>
          <Text style={styles.buttonTitle}>Send</Text>
        </TouchableOpacity>
      </View>

      <View
        style={[
          styles.inputContainer,
          { marginTop: "2%" },
          { flexDirection: "row" },
          { justifyContent: "space-between" },
          { alignItems: "center" },
        ]}
      >
        <TextInput
          style={styles.textInput}
          placeholder="Phone Number"
          placeholderTextColor={colors.grayColor}
          keyboardType="phone-pad"
        />
        <TouchableOpacity style={styles.miniButtonContainer}>
          <Text style={styles.buttonTitle}>Send</Text>
        </TouchableOpacity>
      </View>

      <View
        style={[
          styles.inputContainer,
          { marginTop: "10%" },
          { marginBottom: "5%" },
        ]}
      >
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          placeholderTextColor={colors.grayColor}
        />
      </View>

      <FormButton buttonTitle="Next" />
    </View>
  );
};

export default SignUpStep2;

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
  miniButtonContainer: {
    width: "19%",
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: colors.redColor,
    borderRadius: perfectSize(30),
    padding: perfectSize(10),
    marginRight: "5%",
  },
  buttonTitle: {
    fontSize: perfectSize(20),
    color: colors.whiteColor,
  },
});
