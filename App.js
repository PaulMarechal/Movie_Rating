import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Button, Text, View, StyleSheet, TextInput, ScrollView, Image, TouchableHighlight, Modal, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from 'axios';
import LoginScreen from './screens/LoginScreen';
import FilmScreen from './screens/FilmScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Films" component={FilmScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});