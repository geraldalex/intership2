import React from "react";
import { StyleSheet, Text, View, StatusBar, TextInput } from "react-native";
import { colors, perfectSize } from "../../../../theme";
import { useFonts } from "expo-font";
import TabBar from "../myComponents/TabBar";
import Accordian from "../myComponents/Accordian";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import LogoIcon from "../myComponents/LogoIcon";
import SettingIcon from "../myComponents/SettingIcon";
import SeldIcon from "../myComponents/SeldIcon";
import DotsAnalyticsIcon from "../myComponents/DotsAnalyticsIcon";
import DotAnalyticsIcon from "../myComponents/DotAnalyticsIcon";

const SettingsAnalystics = () => {
  const [loaded] = useFonts({
    PoppinsMedium: require("../../../../assets/fonts/Poppins-Medium.ttf"),
    PoppinsRegular: require("../../../../assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("../../../../assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("../../../../assets/fonts/Poppins-Medium.ttf"),
    PoppinsLight: require("../../../../assets/fonts/Poppins-Light.ttf"),
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
        Analytics
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: "8%",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity style={{ paddingHorizontal: perfectSize(10) }}>
          <Text
            style={{ fontSize: perfectSize(14), fontFamily: "PoppinsRegular" }}
          >
            Week
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingHorizontal: perfectSize(10) }}>
          <Text
            style={{ fontSize: perfectSize(14), fontFamily: "PoppinsRegular" }}
          >
            Month
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingHorizontal: perfectSize(10) }}>
          <Text
            style={{ fontSize: perfectSize(14), fontFamily: "PoppinsRegular" }}
          >
            Year
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: colors.darkGreen,
            paddingHorizontal: perfectSize(10),
          }}
        >
          <Text
            style={{
              color: colors.whiteColor,
              fontSize: perfectSize(14),
              fontFamily: "PoppinsRegular",
            }}
          >
            Costumer
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginHorizontal: "8%",
          justifyContent: "space-between",
          marginTop: "5%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: perfectSize(10),
          }}
        >
          <Text
            style={{
              paddingRight: "8%",
              color: colors.blackColor,
              fontSize: perfectSize(14),
              fontFamily: "PoppinsRegular",
            }}
          >
            From
          </Text>
          <TouchableOpacity
            style={{
              padding: perfectSize(4),
              borderRadius: perfectSize(9),
              borderWidth: perfectSize(2),
              borderColor: colors.blackColor,
            }}
          >
            <Text
              style={{
                color: colors.blackColor,
                fontSize: perfectSize(14),
                fontFamily: "PoppinsRegular",
              }}
            >
              02/02/2020
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              paddingRight: "8%",
              color: colors.blackColor,
              fontSize: perfectSize(14),
              fontFamily: "PoppinsRegular",
            }}
          >
            To
          </Text>
          <TouchableOpacity
            style={{
              padding: perfectSize(4),
              borderRadius: perfectSize(9),
              borderWidth: perfectSize(2),
              borderColor: colors.blackColor,
            }}
          >
            <Text
              style={{
                color: colors.blackColor,
                fontSize: perfectSize(14),
                fontFamily: "PoppinsRegular",
              }}
            >
              03/03/2021
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ alignItems: "center", marginTop: "5%" }}>
        <SeldIcon />
      </View>
      <Text
        style={{
          marginTop: "2%",
          textAlign: "center",
          fontSize: perfectSize(18),
          fontFamily: "PoppinsSemiBold",
          lineHeight: perfectSize(27),
        }}
      >
        Seld
      </Text>
      <Text
        style={{
          marginTop: "2%",
          textAlign: "center",
          fontSize: perfectSize(24),
          fontFamily: "PoppinsSemiBold",
          lineHeight: perfectSize(36),
        }}
      >
        100% / 1000 / 100$
      </Text>
      <View style={{ alignItems: "center", marginVertical: "2%" }}>
        <DotsAnalyticsIcon />
      </View>
      <ScrollView style={{}}>
        <View
          style={{
            marginLeft: "8%",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "2%",
          }}
        >
          <DotAnalyticsIcon />
          <Text
            style={{
              marginLeft: "2%",
              fontSize: perfectSize(14),
              fontFamily: "PoppinsLight",
            }}
          >
            Month
          </Text>
          <Text
            style={{
              marginLeft: "5%",
              fontSize: perfectSize(14),
              fontFamily: "PoppinsSemiBold",
              fontWeight: "600",
              lineHeight: perfectSize(21),
            }}
          >
            25% / 102 / 102$
          </Text>
        </View>

        <View
          style={{
            marginLeft: "8%",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "2%",
          }}
        >
          <DotAnalyticsIcon />
          <Text
            style={{
              marginLeft: "2%",
              fontSize: perfectSize(12),
              fontFamily: "PoppinsLight",
            }}
          >
            Month
          </Text>
          <Text
            style={{
              marginLeft: "5%",
              fontSize: perfectSize(12),
              fontFamily: "PoppinsSemiBold",
              fontWeight: "600",
              lineHeight: perfectSize(21),
            }}
          >
            25% / 102 / 102$
          </Text>
        </View>
        <View
          style={{
            marginLeft: "8%",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "2%",
          }}
        >
          <DotAnalyticsIcon />
          <Text
            style={{
              marginLeft: "2%",
              fontSize: perfectSize(12),
              fontFamily: "PoppinsLight",
            }}
          >
            Month
          </Text>
          <Text
            style={{
              marginLeft: "5%",
              fontSize: perfectSize(12),
              fontFamily: "PoppinsSemiBold",
              fontWeight: "600",
              lineHeight: perfectSize(21),
            }}
          >
            25% / 102 / 102$
          </Text>
        </View>
        <View
          style={{
            marginLeft: "8%",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "2%",
          }}
        >
          <DotAnalyticsIcon />
          <Text
            style={{
              marginLeft: "2%",
              fontSize: perfectSize(12),
              fontFamily: "PoppinsLight",
            }}
          >
            Month
          </Text>
          <Text
            style={{
              marginLeft: "5%",
              fontSize: perfectSize(12),
              fontFamily: "PoppinsSemiBold",
              fontWeight: "600",
              lineHeight: perfectSize(21),
            }}
          >
            25% / 102 / 102$
          </Text>
        </View>
        <View
          style={{
            height: perfectSize(1),
            borderTopWidth: perfectSize(1),
            borderColor: colors.grayColor,
          }}
        />
        <View
          style={{ flexDirection: "row", marginLeft: "8%", marginTop: "2%" }}
        >
          <Text
            style={{ fontFamily: "PoppinsLight", fontSize: perfectSize(12) }}
          >
            Total
          </Text>
          <Text
            style={{
              marginLeft: "20%",
              fontFamily: "PoppinsSemiBold",
              fontSize: perfectSize(12),
            }}
          >
            100% / 408 / 408$
          </Text>
        </View>
      </ScrollView>

      <TabBar />
    </View>
  );
};

export default SettingsAnalystics;

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
});
