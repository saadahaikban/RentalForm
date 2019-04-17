import React, { Component } from 'react';
import {StyleSheet,Text,View,TextInput,TouchableOpacity,AsyncStorage,Image,Alert} from 'react-native';
import {Button} from 'native-base';

import Signin from './Signin';
import Profile from './Profile';
import BookList from './BookList';

export default class Signup extends Component {
  componentDidMount= () => {
    AsyncStorage.getItem('username').then((value) => this.setState({'username':value}));
    AsyncStorage.getItem('email').then((value) => this.setState({'email':value}));
    AsyncStorage.getItem('password').then((value) => this.setState({'password':value}));
  }

  savedetail = () =>{
    this.props.navigation.navigate("Profile")
  }

  setUsername = (value) => {
    AsyncStorage.setItem('username', value);
    this.setState({'username':value});
  }

  setEmail =(value) =>{
    AsyncStorage.setItem('email',value);
    this.setState({'email':value});
  }

  setPassword =(value) =>{
    AsyncStorage.setItem('password',value);
    this.setState({'password':value});
  }

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email   : "",
      password: "",
    }
  }



  render() {

    return (
      <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
            placeholder="Username"
            underlineColorAndroid='transparent'
            value={this.state.username}
            onChangeText={this.setUsername}/>
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            value={this.state.email}
            onChangeText={this.setEmail}/>
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            value={this.state.password}
            onChangeText={this.setPassword}/>
      </View>

        <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} onPress={() => {this.savedetail}}>
          <Text style={styles.signUpText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => {this.props.navigation.navigate('Signin');}}>
          <Text style={styles.loginText}>Already have account.Login Now!</Text>
        </TouchableOpacity>
      </View>
    );
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
  signupButton: {
    backgroundColor: "#00b5ec",
  },
  signUpText: {
    color: 'white',
  }
});
