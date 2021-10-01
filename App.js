import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Login from './src/components/screns/Login';
import SignUpStep1 from './src/components/screns/SignUpStep1';
import SignUpStep2 from './src/components/screns/SignUpStep2';
import SignUpStep3 from './src/components/screns/SignUpStep3';
import ForgotPassword from './src/components/screns/ForgotPassword';
import ForgotPassword1 from './src/components/screns/blueScrens/ForgotPassword1';
import ForgotPassword2 from './src/components/screns/blueScrens/ForgotPassword2';
import SignInTo from './src/components/screns/blueScrens/SignInTo';
import SignInToStep1 from './src/components/screns/blueScrens/SignInToStep1';
import SignInUpStep3 from './src/components/screns/blueScrens/SignInUpStep3';
import SignInToStep2 from './src/components/screns/blueScrens/SignInToStep2';
import ForgotPasswordGreen1 from './src/components/screns/greencreens/ForgotPasswordGreen1';
import ForgotPasswordGreen2 from './src/components/screns/greencreens/ForgotPasswordGreen2';
import SignInToGreen from './src/components/screns/greencreens/SignInToGreen';
import SignInUpStepGreen3 from './src/components/screns/greencreens/SignInUpStepGreen3';
import SignInToStepGreen2 from './src/components/screns/greencreens/SignInToStepGreen2';
import SignInToStepGreen1 from './src/components/screns/greencreens/SignInToStepGreen1';
import Settings from './src/components/screns/settings/Settings';
import SettingsFQ from './src/components/screns/settings/SettingsFQ';
import Settings2 from './src/components/screns/settings/Settings2';
import SettingsFQ2 from './src/components/screns/settings/SettingsFQ2';
import SettingsPaymnets from './src/components/screns/settings/SettingsPaymnets';
import Settings3 from './src/components/screns/settings/Settings3';
import SettingsPeyment2 from './src/components/screns/settings/SettingsPeyment2';
import SettingsAnalystics from './src/components/screns/settings/SettingsAnalystics';


export default function App() {

  const Drawer = createDrawerNavigator();
   
  return (
    <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="SignUpStep1" component={SignUpStep1} />
      <Drawer.Screen name="SignUpStep2" component={SignUpStep2} />
      <Drawer.Screen name="SignUpStep3" component={SignUpStep3} />
      <Drawer.Screen name="ForgotPassword" component={ForgotPassword} />
      <Drawer.Screen name="ForgotPasswordBlue1" component={ForgotPassword1} />
      <Drawer.Screen name="ForgotPasswordBlue2" component={ForgotPassword2} />
      <Drawer.Screen name="SignInTo" component={SignInTo} />
      <Drawer.Screen name="SignInToStep1" component={SignInToStep1} />
      <Drawer.Screen name="SignInUpStep3" component={SignInUpStep3} />
      <Drawer.Screen name="SignInToStep2" component={SignInToStep2} />
      <Drawer.Screen name="ForgotPasswordGreen1" component={ForgotPasswordGreen1} />
      <Drawer.Screen name="ForgotPasswordGreen2" component={ForgotPasswordGreen2} />
      <Drawer.Screen name="SignInToGreen" component={SignInToGreen} />
      <Drawer.Screen name="SignInUpStepGreen3" component={SignInUpStepGreen3} />
      <Drawer.Screen name="SignInToStepGreen2" component={SignInToStepGreen2} />
      <Drawer.Screen name="SignInToStepGreen1" component={SignInToStepGreen1} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Settings2" component={Settings2} />
      <Drawer.Screen name="Settings3" component={Settings3} />
      <Drawer.Screen name="SettingsFQ" component={SettingsFQ} />
      <Drawer.Screen name="SettingsFQ2" component={SettingsFQ2} />
      <Drawer.Screen name="SettingsPaymnets" component={SettingsPaymnets} />
      <Drawer.Screen name="SettingsPeyment2" component={SettingsPeyment2} />
      <Drawer.Screen name="SettingsAnalystics" component={SettingsAnalystics} />
     
    </Drawer.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
