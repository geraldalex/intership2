import React from "react";
import { StyleSheet, Text, View, StatusBar, TextInput } from "react-native";
import { colors, perfectSize } from "../../../../theme";
import { useFonts } from "expo-font";
import TabBar from "../myComponents/TabBar";
import ArrowDownIcon from "../myComponents/ArrowDownIcon";
import PhotoIcon from "../myComponents/PhotoIcon";
import FormButtonGreen from "../myComponents/FormButtonGreen";



const Settings = () => {
  const [loaded] = useFonts({
    PoppinsMedium:require('../../../../assets/fonts/Poppins-Medium.ttf'),
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
        Settings
      </Text>
     
      <View style={{ flexDirection: "row", justifyContent:'space-between',marginRight:'8%', marginLeft:'8%'}}>
      <Text
        style={{
             color:colors.blackColor,
            fontWeight: "500",
            fontSize: perfectSize(21),
            lineHeight: perfectSize(31),
            fontFamily: "PoppinsMedium",
          }
        }
      >
        Settings
      </Text>
      <View  style={{ flexDirection: "row", alignItems:'center',  }}>
      <Text style={{fontSize:perfectSize(17), color:colors.grayColor}}>RU</Text>
      <ArrowDownIcon/>
      </View>
      </View>
      <View style={{marginTop:perfectSize(18),width:'84%', height:perfectSize(92), borderWidth:perfectSize(1), borderColor:colors.grayColor,justifyContent:'center', alignItems:'center',alignSelf:'center', borderRadius:perfectSize(4)}}>
<PhotoIcon/>
<Text style={{fontSize:perfectSize(9), fontFamily:'PoppinsRegular'}}>Add image</Text>
      </View>
      <FormButtonGreen buttonTitle='Talent Profile'/>



     
    


      
<TabBar/>
    </View>

  );
};

export default Settings;

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
