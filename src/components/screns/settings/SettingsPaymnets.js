import React from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import { colors, perfectSize } from "../../../../theme";
import { useFonts } from "expo-font";
import TabBar from "../myComponents/TabBar";
import LogoIcon from "../myComponents/LogoIcon";
import { ScrollView } from "react-native-gesture-handler";

const SettingsPaymnets = () => {
  const [loaded] = useFonts({
    PoppinsMedium: require("../../../../assets/fonts/Poppins-Medium.ttf"),
    PoppinsRegular: require("../../../../assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("../../../../assets/fonts/Poppins-Medium.ttf"),
    RobotoLight: require("../../../../assets/fonts/Roboto-Light.ttf"),
    RobotoMedium: require("../../../../assets/fonts/Roboto-Medium.ttf"),
    RobotoRegular: require("../../../../assets/fonts/Roboto-Regular.ttf"),
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
        My Earnings
      </Text>

      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../../../../assets/Card.png")}
          style={{ resizeMode: "contain", width: "98%" }}
        />
      </View>

      <Text
        style={{
          fontSize: perfectSize(16),
          lineHeight: perfectSize(18),
          fontFamily: "RobotoLight",
          alignSelf: "center",
          marginLeft: "8%",
          marginRight: "8%",
        }}
      >
        You will receive funds after 7 days from client’s payment.
      </Text>
      <ScrollView>
        <View style={styles.grayLine} />
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: "8%",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.transactionText}>01/01/2022</Text>
          <Text
            style={[
              styles.transactionText,
              { position: "absolute", left: "50%" },
            ]}
          >
            —
          </Text>
          <Text style={styles.transactionText}>20.000$</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: "8%",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.transactionText}>Client Name</Text>
          <Text
            style={[
              styles.transactionText,
              { position: "absolute", left: "50%" },
            ]}
          >
            —
          </Text>
          <Text style={styles.transactionText}>Service Name</Text>
        </View>
        <View style={styles.grayLine} />

        <View
          style={{
            flexDirection: "row",
            marginHorizontal: "8%",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.transactionText}>01/01/2022</Text>
          <Text
            style={[
              styles.transactionText,
              { position: "absolute", left: "50%" },
            ]}
          >
            —
          </Text>
          <Text style={styles.transactionText}>20.000$</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: "8%",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.transactionText}>Client Name</Text>
          <Text
            style={[
              styles.transactionText,
              { position: "absolute", left: "50%" },
            ]}
          >
            —
          </Text>
          <Text style={styles.transactionText}>Service Name</Text>
        </View>
        <View style={styles.grayLine} />
      </ScrollView>
      <TabBar />
    </View>
  );
};

export default SettingsPaymnets;

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
  transactionText: {
    fontSize: perfectSize(16),
    fontFamily: "RobotoMedium",
  },
  grayLine: {
    height: perfectSize(1),
    borderTopWidth: perfectSize(1),
    borderColor: colors.grayColor,
    marginTop: "5%",
    marginBottom: "5%",
  },
});
