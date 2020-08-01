//This is an example code to Add Search Bar Filter on Listview//
import React, { Component } from "react";
//import react in our code.
import * as Animatable from "react-native-animatable";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
  Button,
  TouchableOpacity,
} from "react-native";
//import { TouchableOpacity, TouchableNativeFeedback } from 'react-native-gesture-handler';
//import all the components we are going to use.

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: true, text: "" };
    this.arrayholder = [];
  }

  componentDidMount() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function () {
            this.arrayholder = responseJson;
          }
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }
  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function (item) {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : "".toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      text: text,
    });
  }
  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          width: "90%",
          backgroundColor: "blue",
        }}
      />
    );
  };
  renderSearchItem = (itemdata) => {
    return (
      <TouchableOpacity
        onPress={() => alert("pressed")}
        style={styles.textmaker}
      >
        <View>
          <Text style={styles.textstyle}>{itemdata.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle}>
        <View style={styles.searchbar}>
          <Animatable.View
            animation="slideInRight"
            duration={500}
            style={{
              height: 50,
              backgroundColor: "white",
              flexDirection: "row",
              padding: 5,
              alignItems: "center",
            }}
          >
            <TextInput
              style={styles.textInputStyle}
              onChangeText={(text) => this.SearchFilterFunction(text)}
              value={this.state.text}
              underlineColorAndroid="transparent"
              placeholder="Search Here"
            />
          </Animatable.View>
        </View>

        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          renderItem={this.renderSearchItem}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textmaker: {
    padding: 10,
  },
  viewStyle: {
    justifyContent: "center",
    flex: 1,
    marginTop: 10,
    padding: 5,
  },
  textStyle: {
    padding: 10,
    fontFamily: "open-sans-bold",
  },
  textInputStyle: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: "red",
    borderRadius: 10,
    fontFamily: "open-sans-bold",
    backgroundColor: "#FFFFFF",
  },
  searchbar: {
    flexDirection: "row",
  },
});
