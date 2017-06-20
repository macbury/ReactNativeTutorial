import React from 'react'
import { View } from 'react-native'

const style = {
  container: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
}

const CardSection = (props) => {
  return (<View style={style.container}>{props.children}</View>)
}

export default CardSection
