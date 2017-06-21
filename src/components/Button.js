import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const style = {
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    margin: 5,
    padding: 10
  },

  text: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600'
  }
}

export default class Button extends Component {

  render() {
    return (
      <TouchableOpacity style={style.button} onPress={this.props.onPress}>
        <Text style={style.text}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}
