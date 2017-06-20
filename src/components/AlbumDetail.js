import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'

const style = {
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  headerText: {
    fontSize: 18
  },

  thumbnail: {
    height: 50,
    width: 50
  },

  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },

  image: {
    height: 300,
    width: null,
    flex: 1
  }
}

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album

  return (
    <Card>
      <CardSection>
        <View style={style.thumbnailContainer}>
          <Image style={style.thumbnail} source={ { uri: thumbnail_image } } />
        </View>
        <View style={style.headerContent}>
          <Text style={style.headerText}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={style.image} source={ { uri: image } } />
      </CardSection>
    </Card>
  )
}

export default AlbumDetail
