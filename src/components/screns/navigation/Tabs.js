import React from "react";
import { StyleSheet, Text, View} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors, perfectSize } from "../../../../theme";
import {
    ForgotPasswordGreen1,
    ForgotPasswordGreen2,
    SignInToGreen,
    SignInUpStepGreen3,
    ConfirmationCode
  } from "./src/components/screns/greencreens";
  
const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,
    style: {
        height: '10%'
    }
}

const Tabs = () => {
  return (
    <Tab.Navigator
    tabBarOptions={tabOptions}
    screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
            const tintColor = focused ? colors.darkGreen : colors.grayLineColor

            switch (route.name) {
case "1" :
return(
    <Text>1</Text>
)   
case "2" :
return(
    <Text>2</Text>
)  
case "3" :
return(
    <Text>3</Text>
)  
case "4" :
return(
    <Text>4</Text>
) 
case "5" :
return(
    <Text>5</Text>
)              }
        }
    })}
    >
      <Tab.Screen name="1" component={ForgotPasswordGreen1} />
      <Tab.Screen name="2" component={ForgotPasswordGreen2} />
      <Tab.Screen name="3" component={SignInToGreen} />
      <Tab.Screen name="4" component={SignInUpStepGreen3} />
      <Tab.Screen name="5" component={ConfirmationCode} />
      
    </Tab.Navigator>
  );
}
export default Tabs

const styles = StyleSheet.create({})
