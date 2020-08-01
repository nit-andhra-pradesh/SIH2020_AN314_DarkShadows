import * as React from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Card, Icon } from 'react-native-elements';
import { Button } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { Row, Col } from 'react-native-responsive-grid-system';


class DashComponent extends React.Component {
  state = {
    g_antibiotics: [],
    g_pathogens: [],
    g_problems: [],
    g_syndromes: [],
    u_antibiotics: [],
    u_pathogens: [],
    u_problems: [],
    u_syndromes: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({
      loading: true,
    });
    await this.get();
    this.setState({
      loading: false,
    });
  }

  get = async () => {
    // g_antibiotics
    fetch("https://pasp-api.herokuapp.com/gstats/numberofeach/aid", {
      method: "GET",
      headers: new Headers({
        token: await AsyncStorage.getItem("otp"),
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          g_antibiotics: json,
        });
        console.log("g_antibiotics")
        console.log(this.state.g_antibiotics);
      })
      .catch((error) => {
        console.error(error);
      });

    // u_antibiotics
    fetch("https://pasp-api.herokuapp.com/stats/numberofeach/aid", {
      method: "GET",
      headers: new Headers({
        token: await AsyncStorage.getItem("otp"),
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          u_antibiotics: json,
        });
        console.log("u_antibiotics")
        console.log(this.state.u_antibiotics);
      })
      .catch((error) => {
        console.error(error);
      });
    // g_pathogens
    fetch("https://pasp-api.herokuapp.com/gstats/numberofeach/pathid", {
      method: "GET",
      headers: new Headers({
        token: await AsyncStorage.getItem("otp"),
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          g_pathogens: json,
        });
        console.log("g_pathogens")
        console.log(this.state.g_pathogens);
      })
      .catch((error) => {
        console.error(error);
      });
    // g_problems
    fetch("https://pasp-api.herokuapp.com/gstats/numberofeach/pid", {
      method: "GET",
      headers: new Headers({
        token: await AsyncStorage.getItem("otp"),
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          g_problems: json,
        });
        console.log("g_problems")
        console.log(this.state.g_problems);
      })
      .catch((error) => {
        console.error(error);
      });
    // g_syndromes
    fetch("https://pasp-api.herokuapp.com/gstats/numberofeach/sid", {
      method: "GET",
      headers: new Headers({
        token: await AsyncStorage.getItem("otp"),
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          g_syndromes: json,
        });
        console.log("g_syndromes")
        console.log(this.state.g_syndromes);
      })
      .catch((error) => {
        console.error(error);
      });
    // u_pathogens
    fetch("https://pasp-api.herokuapp.com/stats/numberofeach/pathid", {
      method: "GET",
      headers: new Headers({
        token: await AsyncStorage.getItem("otp"),
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          u_pathogens: json,
        });
        console.log("u_pathogens")
        console.log(this.state.u_pathogens);
      })
      .catch((error) => {
        console.error(error);
      });
    // u_problems
    fetch("https://pasp-api.herokuapp.com/stats/numberofeach/pid", {
      method: "GET",
      headers: new Headers({
        token: await AsyncStorage.getItem("otp"),
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          u_problems: json,
        });
        console.log("u_problems")
        console.log(this.state.u_problems);
      })
      .catch((error) => {
        console.error(error);
      });
    // u_syndromes
    fetch("https://pasp-api.herokuapp.com/stats/numberofeach/sid", {
      method: "GET",
      headers: new Headers({
        token: await AsyncStorage.getItem("otp"),
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          u_syndromes: json,
        });
        console.log("u_syndromes")
        console.log(this.state.u_syndromes);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <View style={{ paddingTop: 10 }}>
        <Row>
          <Col xs={6} sm={6} md={4} lg={4}>
            <Card
              title="Globally different Antibiotic usage Count"
              rounded>
              <Text style={{ fontSize: 40, textAlign: "center" }}>
                {this.state.jsonData}
              </Text>

            </Card>


          </Col>
          <Col xs={6} sm={4} md={3} lg={3}>
            <Card
              title="Globally different Antibiotic usage Count"
              rounded>
              <Text style={{ fontSize: 40, textAlign: "center" }}>
                {this.state.jsonData}
              </Text>

            </Card>


          </Col>


        </Row>





      </View>
    );
  }


}



export default DashComponent





