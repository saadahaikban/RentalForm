import React, {Component} from 'react';
import {StyleSheet,View,Animated} from 'react-native';

export default class Block extends Component{
  handleMargins(){
    const{margin}= this.props;
    if(typeof margin === 'number'){
      return {
        marginTop:margin,
        marginRight:margin,
        marginBottom:margin,
        marginLeft:margin,
      }
    }

    if(typeof margin === 'object'){
      const marginSize = Object.keys(margin).length;
      swith(marginSize){
        case 1:
          return{
            marginTop:margin[0],
            marginRight:margin[0],
            marginLeft:margin[0],
            marginBottom:margin[0],
          }
        case 2:
          return{
            marginTop:margin[0],
            marginRight:margin[1],
            marginBottom:margin[0],
            marginLeft:margin[1],
          }
        case 3:
          return{
          marginTop:margin[0],
          marginRight:margin[1],
          marginBottom:margin[2],
          marginLeft:margin[1],
        }
        default:
          return{
          marginTop:margin[0],
          marginRight:margin[1],
          marginBottom:margin[2],
          marginLeft:margin[3],
        }
      }
    }
  }

  handlePadding(){
    const{padding} = this.props;
    if(typeof padding === 'number'){
      return{
        paddingTop : padding,
        paddingRight:padding,
        paddingBottom : padding,
        paddingLeft: padding,
      }
    }

    if (typeof padding === 'object'){
      const paddingSize = Object.keys(padding).length;
      switch(paddingSize){
        case 1:
          return{
            paddingTop:padding[0],
            paddingRight:padding[0],
            paddingBottom:padding[0],
            paddingLeft:padding[0],




      }
    }
      }
    }
  }
}
