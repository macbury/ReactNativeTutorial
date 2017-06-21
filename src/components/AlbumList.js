import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail'
import axios from 'axios';

export default class AlbumList extends Component {
  state = { albums: [] }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
         .then(this.onDataFetch.bind(this))
  }

  onDataFetch(response) {
    this.setState({ albums: response.data })
  }

  renderAlbums() {
    return this.state.albums.map((album) => <AlbumDetail key={album.title} album={album} />)
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
