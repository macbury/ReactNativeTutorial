import React from 'react'
import { View } from 'react-native'

const styles = {
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
}

const Card = (props) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  )
}

export default Card
