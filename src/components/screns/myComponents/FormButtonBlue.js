import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { colors, perfectSize } from "../../../../theme";

const FormButtonBlue = ({ buttonTitle, onPress }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.buttonTitle}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButtonBlue;

const styles = StyleSheet.create({
  container: {
    width: "84%",
    height: perfectSize(64),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: colors.blueColor,

    padding: perfectSize(10),
    marginTop: "6%",

    shadowColor: colors.blueColor,
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
});
