import React, { Component } from 'react';
import {StyleSheet,Text,View,TextInput,Button,
  TouchableOpacity,AsyncStorage,Keyboard} from 'react-native';

import Profile from './Profile';
import SignupTest from './SignupTest';
import EditProfile from './EditProfile';

export default class Signin extends Component {

  componentDidMount =() =>{
    AsyncStorage.getItem('username').then((value) => this.setState({'username':value}));
    AsyncStorage.getItem('password').then((value) => this.setState({'password':value}));
  }

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      inputusername: "",
      inputpassword: "",
    }
  }

  myvalidate =() =>{
    const{inputusername,inputpassword} = this.state;
    const myusername = this.state.username;
    const mypassword = this.state.password;

    if(inputusername== myusername && inputpassword ==mypassword){
      alert('Please fill up all the field.')
    }
    else if(inputusername!=myusername && inputpassword==mypassword){
      alert('Please fill in your password.')
    }
    else if(inputusername== myusername && inputpassword!=mypassword){
      alert('Please fill in your username.')
    }
    else{
      this.props.navigation.navigate("Profile")
    }
  }

  render() {
    return (

      <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Username"
              underlineColorAndroid='transparent'
              onChangeText={(inputusername) => this.setState({inputusername})}
              value={this.state.username}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(inputpassword) => this.setState({inputpassword})}
              value={this.state.password}/>
        </View>

        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={this.myvalidate}>
          <Text style={styles.loginText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => {this.props.navigation.navigate('Signup');}}>
            <Text>Create new account.</Text>
        </TouchableOpacity>
      </View>
    );
  }
  _login = async() => {
    if(username === this.state.username && password === this.state.password){
    alert('Logged In');
    this.props.navigation.navigate('Profile');
    }
    else{
    alert('Username or Password is incorrect');
  }
}
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    textAlign: 'center',
    margin: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});
