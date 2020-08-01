import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
  AsyncStorage,
  Alert,
} from "react-native";

import Card from "../components/card";
export default class Login extends React.Component {
  state = {
    username: "",
    password: "",
    otp: "",
    loading: false,
  };

  login = () => {
    this.setState({
      loading: true,
    });
    let u = this.state.username;
    let p = this.state.password;
    let o = this.state.otp;
    let str = "";
    if (u == "" || p == "") {
      Alert.alert("PASP", "Please fill the fields");
      this.setState({
        loading: false,
      });
      return;
    }
    if (o != "")
      str =
        "https://pasp-api.herokuapp.com/login?" +
        "username=" +
        u +
        "&password=" +
        p +
        "&otp=" +
        o;
    else
      str =
        "https://pasp-api.herokuapp.com/login?" +
        "username=" +
        u +
        "&password=" +
        p;

    fetch(str, {})
      .then((resp) => {
        if (resp.ok && resp.status == 200)
          // login success
          return "success";
        else if (resp.status == 203)
          return "A unique pin is sent to your registered email id and use it whenever you login";
        else {
          console.log(resp.status);
          return "Wrong username/password/pin";
        }
      })
      .then((jsonData) => {
        console.log(jsonData);
        if (jsonData == "Failed") {
          Alert.alert("Authentication Failed", "Wrong username/password/otp");
        } else if (jsonData == "success") {
          // store values and navigate to dasboard
          AsyncStorage.setItem("username", this.state.username);
          AsyncStorage.setItem("password", this.state.password);
          AsyncStorage.setItem("otp", this.state.otp);
          this.props.navigation.navigate("Main");

          //  alert(jsonData);
        } else {
          Alert.alert("PIN has been sent", jsonData);
        }
        this.setState({
          loading: false,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="white" />
        </View>
      );
    }
    return (
      <View
        style={{ flex: 1, alignItems: "center", backgroundColor: "#242424" }}
      >
        <View
          style={{
            flex: 0.5,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 100,
          }}
        >
          <ImageBackground
            source={require("../assets/images/splash.png")}
            style={styles.backgroundImage}
          ></ImageBackground>
        </View>
        <Card style={styles.authContainer}>
          <ScrollView>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="User Name"
                placeholderTextColor="#003f5c"
                onChangeText={(text) => this.setState({ username: text })}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                secureTextEntry
                style={styles.inputText}
                placeholder="Password"
                placeholderTextColor="#003f5c"
                onChangeText={(text) => this.setState({ password: text })}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                secureTextEntry
                style={styles.inputText}
                placeholder="PIN (Forgot no problem, just login)"
                placeholderTextColor="#003f5c"
                onChangeText={(text) => this.setState({ otp: text })}
              />
            </View>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Forgot")}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white" }}>Forgot Password?</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={this.login}>
              <Text style={{ color: "black", fontSize: 20 }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Signup")}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white" }}>Register</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  authContainer: {
    alignContent: "center",
    width: "90%",
    maxWidth: 400,
    maxHeight: 400,
    padding: 20,
    backgroundColor: "#424242",
  },
  inputView: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  forgot: {
    color: "white",
    fontSize: 11,
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
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#424242",
  },
  backgroundImage: {
    width: 200,
    height: 200,
    paddingVertical: 100,
  },
});
