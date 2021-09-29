import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import {colors, perfectSize} from '../../../../theme'
import CalendarIcon from "./CalendarIcon";
import DollarIcon from "./DollarIcon";
import MailIcon from "./MailIcon";
import PeopleIcon from "./PeopleIcon";
import SettingIcon from "./SettingIcon";



const TabBar = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity >
        <MailIcon/>
      </TouchableOpacity>
      <TouchableOpacity >
        <PeopleIcon/>
      </TouchableOpacity>
      <TouchableOpacity >
       <CalendarIcon/>
      </TouchableOpacity>
      <TouchableOpacity >
      <DollarIcon/>
      </TouchableOpacity>
      <TouchableOpacity >
      <SettingIcon/>
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    justifyContent:'flex-end',
    bottom:0,
    borderTopColor:colors.grayColor,
    borderTopWidth:perfectSize(1),
   
    flexDirection: "row",
    width: "100%",
    height: 60,
    backgroundColor: "white",
    
    justifyContent: "space-around",
    alignItems: "center",

  },
});