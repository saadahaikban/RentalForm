import React, { Component } from 'react';
import {StyleSheet,Text,View,TextInput,Button,
  TouchableOpacity,AsyncStorage} from 'react-native';

import Profile from './Profile';
import SignupTest from './SignupTest';

const userInfo={username:'saadah',password:'123'}
export default class Signin extends Component {


  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
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
              onChangeText={(username) => this.setState({username})}
              value={this.state.username}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}/>
        </View>

        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => {this.props.navigation.navigate('Profile');}}>
          <Text style={styles.loginText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => {this.props.navigation.navigate('Signup');}}>
            <Text>Create new account.</Text>
        </TouchableOpacity>
      </View>
    );
  }
  _login = async() => {
    if(userInfo.username === this.state.username && userInfo.password === this.state.password){
      await AsyncStorage.setItem('isLoggedIn', '1');
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
