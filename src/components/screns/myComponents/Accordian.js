import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors, perfectSize } from "../../../../theme";
import AccordianIcon from "./AccordianIcon";
import AccordianIconRverce from "./AccordianIconRverce";

const Accordian = ({ title, reverse }) => {
  return (
    <View>
      <TouchableOpacity style={styles.row}>
        <Text style={styles.title}>{title}</Text>
        {reverse
         ?
         <AccordianIconRverce/>
       
        :
        <AccordianIcon />
        
}
      </TouchableOpacity>
    </View>
  );
};

export default Accordian;

const styles = StyleSheet.create({
  title: {
    fontSize: perfectSize(14),
    lineHeight: perfectSize(20),
    color: colors.blackColor,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: perfectSize(47),
    paddingLeft: "8%",
    paddingRight: "8%",
    alignItems: "center",
    backgroundColor: colors.whiteBackImage,
    borderTopWidth: perfectSize(1),
    borderColor: colors.grayColor,
  },
});
