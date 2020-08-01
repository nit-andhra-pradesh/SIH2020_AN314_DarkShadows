import * as React from "react";
import { Button, View, StyleSheet } from "react-native";
import { Dimensions, TouchableOpacity, Text, Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Searchnavigator from "./Searchnavigator";
import Newsnavigator from "./Newsnavigator";
import Card from "../components/card";

function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#424242",
      }}
    >
      <View
        style={{
          width: Math.round(Dimensions.get("window").width) - 50,
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate("News")}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "black" }}>News</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: Math.round(Dimensions.get("window").width) - 50,
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate("Search")}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ color: "black" }}>Search</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

function InfoScreen() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Info Spectrum" component={HomeScreen} />
      <Stack.Screen name="News" component={Newsnavigator} />
      <Stack.Screen name="Search" component={Searchnavigator} />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  griditems: {
    padding: 5,
    flex: 1,
    margin: 10,
    height: 200,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    textAlign: "right",
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 20,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginBtn: {
    width: "100%",
    backgroundColor: "#d1d1d1",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
});
export default InfoScreen;
