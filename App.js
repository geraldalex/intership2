import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Login from './src/components/screns/Login';
import SignUpStep1 from './src/components/screns/SignUpStep1';
import SignUpStep2 from './src/components/screns/SignUpStep2';
import SignUpStep3 from './src/components/screns/SignUpStep3';

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
