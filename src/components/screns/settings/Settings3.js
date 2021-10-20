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
import LogoIcon from "../myComponents/LogoIcon";

const Settings3 = () => {
  const [isSelected1, setSelection1] = React.useState(false);
  const [isSelected2, setSelection2] = React.useState(false);
  const [isSelected3, setSelection3] = React.useState(false);
  const [isSelected4, setSelection4] = React.useState(false);
  const [isSelected5, setSelec3ion5] = React.useState(false);
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
        Notifications
      </Text>

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected1}
          onValueChange={setSelection1}
          style={styles.checkbox}
        />
        <Text style={styles.label}>- Push notifications about payment</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected2}
          onValueChange={setSelection2}
          style={styles.checkbox}
        />
        <Text style={styles.label}>
          - Push notifications as a reminder of upcoming classes
        </Text>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected3}
          onValueChange={setSelection3}
          style={styles.checkbox}
        />
        <Text style={styles.label}>
          - Push notifications for the 2 remaining classes
        </Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected4}
          onValueChange={setSelection4}
          style={styles.checkbox}
        />
        <Text style={styles.label}>
          -Push notification that you have confirmed an unpaid activity
        </Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected5}
          onValueChange={setSelec3ion5}
          style={styles.checkbox}
        />
        <Text style={styles.label}>
          - Push notification about completed classes after the last meeting
          with the schedule
        </Text>
      </View>

      <TabBar />
    </View>
  );
};

export default Settings3;

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
