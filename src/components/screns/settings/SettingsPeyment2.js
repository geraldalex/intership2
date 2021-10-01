import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  CheckBox,
} from "react-native";
import { colors, perfectSize } from "../../../../theme";
import { useFonts } from "expo-font";
import TabBar from "../myComponents/TabBar";
import FormButtonGreen from "../myComponents/FormButtonGreen";

import LogoIcon from "../myComponents/LogoIcon";

const SettingsPeyment2 = () => {
  const [isSelected1, setSelection1] = React.useState(false);
  const [loaded] = useFonts({
    PoppinsMedium: require("../../../../assets/fonts/Poppins-Medium.ttf"),
    PoppinsRegular: require("../../../../assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("../../../../assets/fonts/Poppins-Medium.ttf"),
    RobotoMedium: require("../../../../assets/fonts/Roboto-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle="light-content" />
      <View style={{ marginLeft: "8%", marginTop: "10%", marginBottom: "5%" }}>
        <LogoIcon />
      </View>
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
        My Payments
      </Text>

      <Text
        style={{
          color: colors.blackColor,
          fontWeight: "500",
          fontSize: perfectSize(16),
          lineHeight: perfectSize(18),
          fontFamily: "RobotoMedium",
          marginLeft: "8%",
        }}
      >
        To receive payments you need to Add Cart
      </Text>

      <View style={[styles.inputContainer, { marginTop: "10%" }]}>
        <TextInput
          style={styles.textInput}
          placeholder="Card Holder Name"
          placeholderTextColor={colors.blackColor}
        />
      </View>

      <View style={[styles.inputContainer, { marginTop: "10%" }]}>
        <TextInput
          style={styles.textInput}
          placeholder="Credit Card Number"
          placeholderTextColor={colors.blackColor}
        />
      </View>

      <View style={{ flexDirection: "row", marginLeft: "8%" }}>
        <View
          style={[
            styles.inputContainer,
            { marginTop: "10%", marginBottom: "5%", width: "50%" },
          ]}
        >
          <TextInput
            style={styles.textInput}
            placeholder="Expiry Date"
            placeholderTextColor={colors.blackColor}
          />
        </View>

        <View
          style={[
            styles.inputContainer,
            {
              marginTop: "10%",
              marginBottom: "5%",
              width: "30%",
              marginLeft: "10%",
            },
          ]}
        >
          <TextInput
            style={styles.textInput}
            placeholder="CVV"
            placeholderTextColor={colors.blackColor}
          />
        </View>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected1}
          onValueChange={setSelection1}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Use as default payment method</Text>
      </View>

      <FormButtonGreen buttonTitle="Save Card" />

      <TabBar />
    </View>
  );
};

export default SettingsPeyment2;

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
    alignSelf: "center",
    justifyContent: "center",
    borderBottomWidth: perfectSize(2),
    borderColor: colors.darkGreen,
  },
  textInput: {
    paddingLeft: perfectSize(20),
    color: colors.blackColor,
    fontSize: perfectSize(15),
    fontFamily: "PoppinsRegular",
    fontWeight: "400",
    width: "80%",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: perfectSize(10),
    marginLeft: "8%",
    marginRight: "8%",
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: perfectSize(8),
    fontSize: perfectSize(14),
    lineHeight: perfectSize(19),
    fontFamily: "PoppinsRegular",
  },
});
