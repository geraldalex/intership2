import React from "react";
import { StyleSheet, Text, View, StatusBar, TextInput } from "react-native";
import { colors, perfectSize } from "../../../../theme";
import { useFonts } from "expo-font";
import TabBar from "../myComponents/TabBar";
import FormButtonGreen from "../myComponents/FormButtonGreen";

import LogoIcon from "../myComponents/LogoIcon";

const SettingsFQ = () => {
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
        Contact Support
      </Text>

      <Text
        style={{
          color: colors.blackColor,
          fontWeight: "500",
          fontSize: perfectSize(11),
          lineHeight: perfectSize(17),
          fontFamily: "PoppinsMedium",
          marginLeft: "8%",
        }}
      >
        If you have any questions please check our F&Q section.
      </Text>
      <Text
        style={{
          color: colors.blackColor,
          fontWeight: "500",
          fontSize: perfectSize(11),
          lineHeight: perfectSize(17),
          fontFamily: "PoppinsMedium",
          marginLeft: "8%",
        }}
      >
        Other wise you can send us a message in a form below.
      </Text>

      <View
        style={[
          styles.inputContainer,
          { marginTop: "10%", marginBottom: "5%" },
        ]}
      >
        <TextInput
          style={styles.textInput}
          placeholder="Subject "
          placeholderTextColor={colors.blackColor}
        />
      </View>
      <View style={{ marginLeft: "8%" }}>
        <Text style={styles.textInput}>Message</Text>
      </View>
      <View style={styles.textAreaContainer}>
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="You can post some information here. interests or family information. Goal: Write down here what your customers want to achieve"
          placeholderTextColor={colors.grayColor}
          numberOfLines={10}
          multiline={true}
        />
      </View>

      <Text
        style={{
          fontSize: perfectSize(12),
          alignSelf: "center",
          marginTop: "5%",
        }}
      >
        We will reply to your e-mail within 60 minutes
      </Text>
      <FormButtonGreen buttonTitle="Send" />

      <TabBar />
    </View>
  );
};

export default SettingsFQ;

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
  textAreaContainer: {
    borderColor: colors.blackColor,
    borderWidth: perfectSize(1),
    padding: 4,
    width: "84%",
    alignSelf: "center",
  },
  textArea: {
    height: perfectSize(150),
    color: colors.blackColor,
    
    
  },
});
