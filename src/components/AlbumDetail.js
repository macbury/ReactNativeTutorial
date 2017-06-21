import React, { Component } from 'react'
import { Text, View, Image, Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

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
    height: 240,
    width: null,
    flex: 1
  }
}

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album

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

      <CardSection>
        <Button onPress={() => Linking.openURL(url) }>
          Buy now
        </Button>
      </CardSection>
    </Card>
  )
}

export default AlbumDetail
