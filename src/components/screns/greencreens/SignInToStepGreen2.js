import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { colors, perfectSize } from "../../../../theme";
import { useFonts } from "expo-font";
import FormButtonGreen from "../myComponents/FormButtonGreen";

const SignInToStepGreen2 = () => {
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
              color: colors.darkGreen,
              fontFamily: "PoppinsRegular",
            },
          ]}
        >
          Login here !
        </Text>
      </View>
      <View
        style={[
          styles.inputContainer,
          { marginTop: "10%" },
          { flexDirection: "row" },
          { justifyContent: "space-between" },
          { alignItems: "center" },
        ]}
      >
        <TextInput
          style={styles.textInput}
          placeholder="Enter code"
          placeholderTextColor={colors.blackColor}
        />
        <TouchableOpacity style={styles.miniButtonContainer}>
          <Text style={styles.buttonTitle}>Send</Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.inputContainer,
          { marginTop: "5%", marginBottom: "26%" },
          { flexDirection: "row" },
          { justifyContent: "space-between" },
          { alignItems: "center" },
        ]}
      >
        <TextInput
          style={styles.textInput}
          placeholder="Phone code"
          placeholderTextColor={colors.blackColor}
          keyboardType="phone-pad"
        />
        <TouchableOpacity style={styles.miniButtonContainer}>
          <Text style={styles.buttonTitle}>Send</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{ position: "absolute", width: "100%", bottom: perfectSize(48) }}
      >
        <FormButtonGreen buttonTitle="Register" />
      </View>
    </View>
  );
};

export default SignInToStepGreen2;

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
    backgroundColor: colors.whiteBackImage,
    borderBottomWidth:perfectSize(2),
    borderColor: colors.darkGreen,
    alignSelf: "center",
    justifyContent: "center",
  },
  textInput: {
    paddingLeft: perfectSize(20),
    color: colors.blackColor,
    fontSize: perfectSize(15),
    fontFamily: "PoppinsRegular",
    fontWeight: "400",
    width:'60%'
  },
  miniButtonContainer: {
    width: "25%",
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: colors.darkGreen,
    borderRadius: 5,

    padding: perfectSize(10),
    marginRight: "5%",
    shadowColor: colors.darkGreen,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 8,
  },
  buttonTitle: {
    fontWeight: "bold",
    fontSize: perfectSize(20),
    color: colors.whiteColor,
  },

  buttonTitle: {
    fontSize: perfectSize(14),
    color: colors.whiteColor,
  },
});
