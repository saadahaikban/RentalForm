import React,{Component} from 'react';
import{
  AppRegistry,
  AsyncStorage,
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Image,
  TouchableHighlight,Linking
} from 'react-native';
import {createStackNavigator} from 'react-navigation';

export default class AddScreen extends Component{
    constructor(props) {
    super(props);
    this.state = {
     myKey: '',
     text1: '',
     text2: ''
    }
  }

   getKey = async () => {
          try {
              const key = await AsyncStorage.getItem('@MySuperStore:key');

              const key1 = await AsyncStorage.getItem('@MySuperStore:key1');
              const key2 = await AsyncStorage.getItem('@MySuperStore:key2');

              this.setState({ myKey: value });
          } catch (error) {
              console.log("Error retrieving data" + error);
          }
      }
     async saveKey(text1, text2) {
        //here store two texts with two different key or concatenate text1 and text2
        key = text1+text2;
        try {
            await AsyncStorage.setItem('@MySuperStore:key1', text1);
            await AsyncStorage.setItem('@MySuperStore:key2', text2);
        }
        catch (error) {
            console.log("Error saving data" + error);
        }
      }

    render() {
      return (
     <TextInput
       placeholder="CostType_input"
       value={this.state.mykey}
       onChangeText={(value) => this.setState({ text1: value})}
      />
    <TextInput
       placeholder="Some_input"
       value={this.state.mykey}
       onChangeText={(value) => this.setState({ text2: value})}
      />
     <Button
       onPress={() => this.saveKey(this.state.text1, this.state.text2)}
       title="Save key"
      />
    );
  }}
