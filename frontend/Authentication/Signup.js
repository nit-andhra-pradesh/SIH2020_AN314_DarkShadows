import  React from 'react';
import  { StyleSheet,Text, View, TextInput, TouchableOpacity,ScrollView,ImageBackground, ActivityIndicator, Alert} from 'react-native';

import  Card from '../components/card';
console.disableYellowBox = true;
export  default class Signup extends React.Component {
  state={
    email:"",
    password:"",
    username:"",
    loading: false
  }
  register = () => {
    this.setState({
      loading: true
    });
    let u = this.state.username;
    let p = this.state.password;
    let e = this.state.email;
    let str = "";
    if (u == "" || p == "" || e == ""){
      Alert.alert("PASP", "Please fill the fields");
    this.setState({
      loading: false
    });
   return;  
  }
    str = "https://pasp-api.herokuapp.com/signup?"+"username="+u+"&password="+p+"&email="+e;

    fetch(str, {

    })
        .then((resp)=>{
            if (resp.status == 203)
            return "A unique pin is sent to your registered email id and use it whenever you login";
            else if (resp.status == 401){
              console.log(resp.status);
            return "You have been already registered!";
            }
            else
            {
              return "Server is down, please try again later"
            }
        })
        .then((jsonData) => {
          console.log(jsonData);
            if(jsonData == "You have been already registered!"){
                Alert.alert("Registration Failed",jsonData);
                this.props.navigation.navigate('Home');
            }
            else if (jsonData == "A unique pin is sent to your registered email id and use it whenever you login"){
          Alert.alert("Success", jsonData);
           this.props.navigation.navigate('Home');
            }
            else {
              Alert.alert("Something went wrong!",jsonData);
            }
            this.setState({
              loading: false
            });
        })
        .catch((e)=>{
            console.log(e);
        })

}
  render(){
    if(this.state.loading){
      return( 
        <View style={ styles.loader}> 
          <ActivityIndicator size="large" color="white"/>
        </View>
    )}
    return (
      
      <View style={{flex:1,alignItems:'center', backgroundColor:'#242424'}}>
       <View style={{flex:0.5 ,alignItems:'center',justifyContent:'center',marginTop:100}}>
         <ImageBackground source={require('../assets/images/splash.png')} style={styles.backgroundImage} ></ImageBackground>
         </View>
        <Card    style={styles.authContainer}>
          <ScrollView>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="User Name" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({username:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
    
        <TouchableOpacity style={styles.loginBtn} onPress={this.register}>
          <Text style={{color:'black', fontSize: 20}}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress ={( )=> this.props.navigation.navigate('Home') } >
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:'white'}}>Login</Text>
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
    flex: 1
  },
  authContainer: {
    alignContent:'center',
    width: '90%',
    maxWidth: 400,
    maxHeight: 400,
    padding: 20,
    backgroundColor:'#424242'
  },
  inputView:{
    width:"100%",
    backgroundColor:"white",
    borderRadius:10,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"100%",
    backgroundColor:"#d1d1d1",
    borderRadius:5,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#424242"
   },
  backgroundImage:{
    width:200,
       height:200,
       paddingVertical:100
       }
});